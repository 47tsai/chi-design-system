# Chi Design System

A reusable visual foundation for Chi sites, inspired by the light, airy HoYoverse account-center reference supplied for this project.

## Visual direction

The reference's recognizable character comes from its composition, not just its blue palette: a compact translucent header, soft blue-gray hero glow, centered headline, restrained gradient accent, pill-shaped primary action, lightly elevated feature cards, a quiet logo strip, and a near-black footer. Chi borrows these general principles without copying HoYoverse branding, proprietary assets, or exact copy.

## Principles

1. **Start with page composition.** Establish the header, hero, reading width, content rhythm, and footer before styling components.
2. **Use a cool, quiet canvas.** Pale blue-gray backgrounds and white surfaces create separation without thick outlines.
3. **Reserve gradients for emphasis.** Accent gradients belong on a key phrase or primary action, not every heading and surface.
4. **Use soft elevation selectively.** Feature cards can use a subtle border, translucent surface, and restrained shadow. Ordinary lists should remain flat.
5. **Build cards with a consistent rhythm.** Icon, title, and description follow the same order and spacing. Never shrink body copy just to fit.
6. **Let content set the height.** No fixed card heights, arbitrary offsets, or layout hacks.
7. **Design mobile first, then expand.** A narrow reading column is intentional for focused pages. Wider layouts can use shared container and split/grid utilities.
8. **Keep interactions accessible.** Use semantic HTML, keyboard focus, readable contrast, and reduced-motion support.

## Component catalogue

The root preview is the working visual catalogue. It demonstrates the everyday UI set in context rather than as isolated style swatches:

- **Navigation:** site header, breadcrumbs, tabs, responsive menu trigger and panel, language picker with synchronized selected state, light header and dark footer variants.
- **Actions:** primary, secondary, small, disabled, and destructive buttons; inline links.
- **Forms:** text input, select, textarea, validation state, checkbox, radio, toggle switch, field hint and error.
- **Feedback:** neutral and semantic badges, info/success/warning/danger alerts, notices, empty state, loading skeleton, tooltip.
- **Data display:** flat lists, media rows, avatars and avatar groups, stat blocks, progress bars, step progress, responsive tables, pagination, tags, code and preformatted text.
- **Page patterns:** section headers, filters, feature cards, confirmation-dialog composition, hero, logo strip, footer, light/dark theme tokens.

Prefer semantic native HTML elements and keep application logic in the host project. The catalogue's tabs and theme controls are demo interactions, not a reusable application state layer.

## Component roles

- .chi-site-header: compact translucent navigation.\n- navigation.css: reusable language picker, menu trigger, responsive navigation panel, footer variant, keyboard dismissal, and reduced-motion states.
- .chi-hero: soft gradient introduction with centered reading width.
- .chi-title__accent: restrained violet-to-blue text accent.
- .chi-button--primary and .chi-button--pill: gradient primary action with rounded geometry.
- .chi-feature-list and .chi-card: repeatable feature stack or responsive feature grid.
- .chi-icon-circle: consistent icon backing for host-provided icons.
- .chi-logo-row: low-emphasis brand/integration row. Use approved real logos where available.
- .chi-footer: dark closing section with a centered inner column.
- .chi-panel, .chi-list, .chi-field, .chi-input, .chi-select, .chi-badge: general-purpose building blocks for tools and settings pages.

## Tokens and adoption

- tokens.css contains color, typography, spacing, radius, shadow, and width tokens.
- components.css contains reusable, framework-agnostic chi- styles.
- Load tokens.css before components.css.
- Keep routing, state, validation, and data access in each host project.
- index.html and examples/index.html are visual references, not production pages.

## Review checklist

- Is the visual focus obvious at first glance?
- Does the hero feel airy without creating a dead zone?
- Are gradients used sparingly?
- Are card titles and body text readable on phones?
- Do card spacing and icon geometry remain consistent?
- Does the footer close the page cleanly?
- Are hover, focus, dark-theme, and reduced-motion states considered?\n- Do popovers expose their expanded state and close on outside click or Escape?\n- Are duplicate language pickers sharing one selected language state?
