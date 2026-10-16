# Chi Design System

A framework-agnostic visual foundation for the Chi website ecosystem, using the HoYoverse Account Center as a reference for clear grouping and restrained interface design without copying its assets or implementation.

## Files

- `DESIGN.md`: visual principles, layout rules, and review checklist.
- `tokens.css`: shared colors, typography, spacing, radii, and theme tokens.
- `components.css`: framework-agnostic layouts and reusable components.
- `index.html`: GitHub Pages preview homepage.
- `examples/index.html`: standalone component and layout preview.

## Preview

After GitHub Pages is enabled for `main` and `/(root)`, open the repository's Pages URL. The preview is also available in `examples/index.html`.

## Adoption

Import `tokens.css` and then `components.css` into a project. Use the `chi-` classes for shared visual styles. Keep routing, data access, validation, and application behavior in each host project.

This is a working draft. Review the preview on desktop and mobile before applying the system to production sites.
