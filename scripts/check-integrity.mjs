#!/usr/bin/env node
import { readFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const failures = [];
const checks = [];
const read = (file) => readFileSync(file, 'utf8');
const fail = (message) => failures.push(message);
const pass = (message) => checks.push(message);

const tracked = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' })
  .split('\0')
  .filter(Boolean);
const sourceFiles = tracked.filter((file) => /\.(?:html|css|js|mjs|md|ya?ml|json|svg)$/i.test(file));

const spritePath = 'icons.svg';
const sprite = read(spritePath);
const symbols = [...sprite.matchAll(/<symbol\b[^>]*\bid=["']([^"']+)["']/g)].map((match) => match[1]);
const symbolSet = new Set(symbols);

if (symbols.length === 0) fail('icons.svg contains no symbol elements.');
if (symbolSet.size !== symbols.length) fail('icons.svg contains duplicate symbol IDs.');
if (!sprite.includes('viewBox="0 0 24 24"')) fail('icons.svg must preserve the 24 × 24 viewBox convention.');
else pass(`SVG sprite: ${symbols.length} symbols, unique IDs, 24 × 24 viewBox`);

const htmlFiles = tracked.filter((file) => file.endsWith('.html'));
for (const file of htmlFiles) {
  const html = read(file);
  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map((match) => match[1]);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length) fail(`${file}: duplicate HTML id(s): ${[...new Set(duplicateIds)].join(', ')}`);

  const idSet = new Set(ids);
  const scriptIds = [...html.matchAll(/getElementById\\(\\s*['"]([^'"]+)['"]\\s*\\)/g)].map((match) => match[1]);
  const missingScriptIds = [...new Set(scriptIds)].filter((id) => !idSet.has(id));
  if (missingScriptIds.length) {
    fail(`${file}: JavaScript references missing element ID(s): ${missingScriptIds.join(', ')}`);
  }

  for (const match of html.matchAll(/(?:href|src)=["']([^"']+)["']/gi)) {
    const raw = match[1].trim();
    if (!raw || raw.startsWith('#') || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(raw)) continue;
    const target = raw.split('#')[0].split('?')[0];
    if (!target) continue;
    const resolved = path.normalize(path.join(path.dirname(file), target));
    if (!existsSync(resolved)) fail(`${file}: local asset/link does not exist: ${raw}`);
  }

  for (const match of html.matchAll(/icons\.svg(?:\?[^"'\s#]*)?#([a-z0-9-]+)/g)) {
    if (!symbolSet.has(match[1])) fail(`${file}: icon reference "#${match[1]}" has no matching symbol in icons.svg.`);
  }
}
pass(`HTML pages: ${htmlFiles.length} scanned for duplicate IDs, missing local assets, and broken icon references`);

const catalogue = read('elements.html');
const galleryIds = [...catalogue.matchAll(/data-copy-icon=["']([^"']+)["']/g)].map((match) => match[1]);
const gallerySet = new Set(galleryIds);
if (gallerySet.size !== galleryIds.length) fail('elements.html contains duplicate icon gallery entries.');
const missingGallery = symbols.filter((id) => !gallerySet.has(id));
const unknownGallery = galleryIds.filter((id) => !symbolSet.has(id));
if (missingGallery.length || unknownGallery.length || galleryIds.length !== symbols.length) {
  if (missingGallery.length) fail(`Icon gallery missing symbols: ${missingGallery.join(', ')}`);
  if (unknownGallery.length) fail(`Icon gallery references unknown symbols: ${unknownGallery.join(', ')}`);
  if (galleryIds.length !== symbols.length) fail(`Icon gallery has ${galleryIds.length} entries but sprite has ${symbols.length} symbols.`);
} else pass(`Icon gallery: all ${symbols.length} symbols are represented exactly once`);

const guidelines = read('ICON-GUIDELINES.md');
const inventorySection = guidelines.split('## 現有圖示清單與語意')[1]?.split('## 常用語意對照')[0];
if (!inventorySection) {
  fail('ICON-GUIDELINES.md is missing the "現有圖示清單與語意" inventory section.');
} else {
  const listedIds = [...inventorySection.matchAll(/\|\s*`([^\`]+)`\s*\|/g)]
    .map((match) => match[1])
    .filter((id) => id !== 'Symbol ID');
  const listedSet = new Set(listedIds);
  const missing = symbols.filter((id) => !listedSet.has(id));
  const unknown = listedIds.filter((id) => !symbolSet.has(id));
  if (missing.length || unknown.length || listedIds.length !== symbols.length) {
    if (missing.length) fail(`ICON-GUIDELINES.md inventory missing symbols: ${missing.join(', ')}`);
    if (unknown.length) fail(`ICON-GUIDELINES.md inventory contains unknown symbols: ${unknown.join(', ')}`);
    if (listedIds.length !== symbols.length) fail(`Icon guideline inventory has ${listedIds.length} entries but sprite has ${symbols.length} symbols.`);
  } else pass(`Icon guidelines: all ${symbols.length} symbols are documented exactly once`);
}

const cssFiles = tracked.filter((file) => file.endsWith('.css'));
const cssContents = cssFiles.map((file) => read(file)).join('\n');
const definedTokens = new Set([...cssContents.matchAll(/(--[a-zA-Z0-9_-]+)\s*:/g)].map((match) => match[1]));
const usedTokens = new Set([...cssContents.matchAll(/var\(\s*(--[a-zA-Z0-9_-]+)/g)].map((match) => match[1]));
const undefinedTokens = [...usedTokens].filter((token) => !definedTokens.has(token)).sort();
if (undefinedTokens.length) fail(`Undefined CSS custom properties: ${undefinedTokens.join(', ')}`);
else pass(`CSS tokens: ${definedTokens.size} declarations, all ${usedTokens.size} referenced variables are defined`);

const emojiPattern = /\p{Extended_Pictographic}/u;
const emojiFiles = [];
for (const file of sourceFiles) {
  const text = read(file).replace(/[©®™]/g, '');
  if (emojiPattern.test(text)) emojiFiles.push(file);
}
if (emojiFiles.length) fail(`Emoji pictographs found in project source/docs: ${emojiFiles.join(', ')}`);
else pass(`No emoji pictographs found in ${sourceFiles.length} tracked source/documentation files`);

for (const message of checks) console.log(`PASS  ${message}`);
if (failures.length) {
  for (const message of failures) console.error(`FAIL  ${message}`);
  console.error(`\nIntegrity check failed with ${failures.length} issue(s).`);
  process.exitCode = 1;
} else {
  console.log('\nAll integrity checks passed.');
}
