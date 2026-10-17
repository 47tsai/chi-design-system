import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { createRequire } from 'node:module';
const require = createRequire('/tmp/chi-browser-tests/package.json');
const { chromium } = require('playwright');

const baseURL = 'http://127.0.0.1:4173';
let server;
let browser;

before(async () => {
  server = spawn('python3', ['-m', 'http.server', '4173', '--bind', '127.0.0.1'], {
    stdio: 'ignore',
  });
  let ready = false;
  for (let attempt = 0; attempt < 50; attempt++) {
    try {
      const response = await fetch(baseURL);
      if (response.ok) {
        ready = true;
        break;
      }
    } catch {}
    await delay(100);
  }
  assert.ok(ready, 'local static server did not start');
  browser = await chromium.launch({ headless: true });
});

after(async () => {
  await browser?.close();
  server?.kill('SIGTERM');
});

async function openCatalog(options = {}) {
  const context = await browser.newContext({
    viewport: options.viewport ?? { width: 1280, height: 900 },
    reducedMotion: 'reduce',
  });
  const page = await context.newPage();
  await page.goto(`${baseURL}/elements.html`);
  return { context, page };
}

test('theme toggle changes theme and persists after reload', async () => {
  const { context, page } = await openCatalog();
  try {
    await page.locator('#theme-toggle').click();
    const selectedTheme = await page.locator('html').getAttribute('data-chi-theme');
    const savedTheme = await page.evaluate(() => localStorage.getItem('chi-theme'));
    assert.ok(['dark', null].includes(selectedTheme));
    assert.equal(savedTheme, selectedTheme ?? 'light');

    await page.reload();
    const reloadedTheme = await page.locator('html').getAttribute('data-chi-theme');
    assert.equal(reloadedTheme, selectedTheme);
  } finally {
    await context.close();
  }
});

test('search filters items and displays an empty state for unmatched text', async () => {
  const { context, page } = await openCatalog();
  try {
    const search = page.locator('#component-search');
    await search.fill('Checkbox Radio');
    assert.ok(await page.locator('.specimen:not([hidden])').count() > 0);
    assert.equal(await page.locator('#catalog-empty').isVisible(), false);

    await search.fill('chi-test-no-match-9347');
    assert.equal(await page.locator('.specimen:not([hidden])').count(), 0);
    assert.equal(await page.locator('[data-icon-item]:not([hidden])').count(), 0);
    assert.equal(await page.locator('#catalog-empty').isVisible(), true);
    assert.match(await page.locator('#catalog-status').textContent(), /找到 0 個/);
  } finally {
    await context.close();
  }
});

test('category filter only shows matching specimens and updates its pressed state', async () => {
  const { context, page } = await openCatalog();
  try {
    await page.locator('[data-filter="forms"]').click();
    const specimens = page.locator('.specimen:not([hidden])');
    assert.ok(await specimens.count() > 0);
    assert.equal(await specimens.evaluateAll(items => items.every(item => item.dataset.category === 'forms')), true);
    assert.equal(await page.locator('[data-icon-item]:not([hidden])').count(), 0);
    assert.equal(await page.locator('[data-filter="forms"]').getAttribute('aria-pressed'), 'true');
    assert.equal(await page.locator('[data-filter="all"]').getAttribute('aria-pressed'), 'false');
  } finally {
    await context.close();
  }
});

test('slash focuses search and Escape clears the query', async () => {
  const { context, page } = await openCatalog();
  try {
    await page.keyboard.press('/');
    assert.equal(await page.locator('#component-search').evaluate(el => el === document.activeElement), true);
    await page.locator('#component-search').fill('not-a-real-component');
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#component-search').inputValue(), '');
    assert.equal(await page.locator('#catalog-empty').isVisible(), false);
  } finally {
    await context.close();
  }
});

test('icon copy control writes the expected SVG reference and announces success', async () => {
  const { context, page } = await openCatalog();
  try {
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'clipboard', {
        configurable: true,
        value: { writeText: async value => { window.__chiCopiedText = value; } },
      });
    });
    await page.reload();
    await page.locator('[data-copy-icon="search"]').click();
    await page.waitForFunction(() => document.querySelector('#icon-copy-status').textContent.includes('已複製 search'));
    const copied = await page.evaluate(() => window.__chiCopiedText);
    assert.match(copied, /<use href="\.\/icons\.svg[^"]*#search"><\/use>/);
    assert.equal(await page.locator('[data-copy-icon="search"]').isDisabled(), true);
  } finally {
    await context.close();
  }
});

test('mobile viewport has no horizontal page overflow and key controls remain visible', async () => {
  const { context, page } = await openCatalog({ viewport: { width: 390, height: 844 } });
  try {
    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      document: document.documentElement.scrollWidth,
    }));
    assert.ok(dimensions.document <= dimensions.viewport, `horizontal overflow: ${JSON.stringify(dimensions)}`);
    assert.equal(await page.locator('#component-search').isVisible(), true);
    assert.equal(await page.locator('#theme-toggle').isVisible(), true);
    assert.ok(await page.locator('.catalog-filter').count() > 0);
  } finally {
    await context.close();
  }
});
