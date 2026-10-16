# Chi Design System

A framework-agnostic visual foundation for Chi sites, using a cool blue-gray palette, soft feature cards, rounded primary actions, and a dark footer.

## Files

- DESIGN.md: visual principles, component roles, and review checklist.
- tokens.css: shared colors, typography, spacing, radii, shadows, and width tokens.
- components.css: framework-agnostic layouts and reusable components.
- index.html: GitHub Pages preview homepage.
- examples/index.html: secondary entry to the same component catalogue.

## Component catalogue

The preview covers navigation, actions, form controls and validation, status badges, alerts, progress and steps, lists, tables, pagination, empty/loading states, avatars, statistics, tooltips, code blocks, and common page patterns. Component styles are in `components.css`; design tokens are in `tokens.css`.

## Preview

Enable GitHub Pages for branch main and folder /(root), then open the repository's Pages URL.

## Adoption

Load tokens.css before components.css. Use chi-prefixed classes for shared styles. Keep routing, state, validation, and data access in each host project. The preview uses no CSS framework or icon CDN; its symbols are lightweight placeholders, not official product logos.

This is a working draft. Review the live preview on desktop and mobile before applying the system to production sites.
