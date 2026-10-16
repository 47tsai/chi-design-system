# Chi Design System

A framework-agnostic UI foundation for Chi sites. It centralizes design tokens, reusable components, interaction patterns, and a live component catalogue.

## Files

- DESIGN.md: visual principles, component roles, and review checklist.
- tokens.css: shared colors, typography, spacing, radii, shadows, and width tokens.
- components.css: framework-agnostic layouts and reusable components.\n- navigation.css: responsive navigation menu, language picker, footer variant, and accessible open/close states.
- index.html: GitHub Pages preview homepage.
- examples/index.html: secondary entry to the same component catalogue.

## Component catalogue

The preview covers responsive navigation, synchronized language pickers, actions, form controls and validation, status badges, alerts, progress and steps, lists, tables, pagination, empty/loading states, avatars, statistics, tooltips, code blocks, and common page patterns. Component styles are in `components.css`; design tokens are in `tokens.css`.

## Preview

Enable GitHub Pages for branch main and folder /(root), then open the repository's Pages URL.

## Adoption

Load tokens.css before components.css, then navigation.css when using the navigation primitives. Use chi-prefixed classes for shared styles. Keep routing, state, validation, and data access in each host project. The preview uses no CSS framework or icon CDN; its symbols are lightweight placeholders, not official product logos.

The catalogue is the primary product: expand it by adding reusable components and interaction patterns, not by building a separate sample business page. Review the live preview on desktop and mobile before production use.
