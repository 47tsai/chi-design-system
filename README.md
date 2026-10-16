# Chi Design System

A framework-agnostic visual foundation for the Chi website ecosystem.

## Goals

- Keep typography, spacing, borders, surfaces, controls, and feedback consistent across projects.
- Use plain CSS custom properties and reusable classes so Astro, Svelte, React, and static HTML projects can adopt the same visual language.
- Preserve each site's information architecture and functionality; standardize the design, not every page layout.
- Use HoYoverse Account Center as a visual reference for clean grouping and restrained panels, without copying its proprietary assets or source code.

## Structure

- `DESIGN.md`: visual principles and implementation rules.
- `tokens.css`: shared design tokens.
- `components.css`: framework-independent component styles.
- `examples/index.html`: standalone preview page.

## Preview

Open `examples/index.html` locally, or enable GitHub Pages for this repository and publish from the root.

## Adoption

Import `tokens.css` and `components.css` into a project, then use the `chi-` class names. Framework-specific interactive behavior remains in each project's own code.

Start with the preview page and refine the system before migrating production sites.