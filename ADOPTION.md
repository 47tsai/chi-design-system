# Chi UI Consistency and Adoption Plan

This document defines how existing Chi products adopt the shared Design System without replacing product features or forcing every product into the same page template.

## Source of truth

- `chi-design-system/DESIGN.md`: visual decisions and component usage.
- `chi-design-system/example/`: canonical reference implementation for the shared app shell and content slot pattern.
- `chi-design-system/tokens.css`: shared semantic design tokens.
- `chi-design-system/components.css`: shared components and layout primitives.
- `chi-design-system/navigation.css`: shared navigation behavior and presentation.
- `chi-brand/BRAND.md` and `chi-brand/colors/tokens.css`: shared brand identity and product accent mappings.
- Product repositories own their information architecture, routes, data behavior, and product-specific layout composition.

When a product needs a reusable visual primitive, improve or use the shared implementation first. Do not create a second local version without documenting a concrete product-specific reason.

## Audit findings (2026-10-18)

### 1. The rules exist, but adoption is uneven

- Chi Design System already defines semantic tokens, components, navigation primitives, theme behavior, icon guidance, and page-pattern principles.
- NAV has a large local styling layer in `css/design-system.css` with its own semantic aliases such as `--bg`, `--surface`, `--border`, `--text`, and `--accent`. The aliases are useful locally, but the mapping to canonical `--chi-*` tokens needs to be explicit and kept in sync.
- Status duplicates a substantial subset of the shared tokens and common shell styles in an inline `<style>` block in `index.html`.
- Merch uses shared-looking classes such as `.chi-button` and `.chi-panel`, but its page shell and much of its interaction styling remain product-local.
- Chi Brand currently describes product colors as provisional, while the Design System uses a shared blue accent. Product accents and common interaction semantics need a single explicit contract.

These differences mean that having the same design-system files available does not guarantee that the pages consume the same rules.

### 2. Required cross-product contract

Every product should align on these shared behaviors:

1. **Theme:** Light, Dark, and System are supported consistently. System mode follows `prefers-color-scheme`; explicit user selection wins. Use the agreed icon mapping: Light `material-symbols:wb-sunny-outline-rounded`, Dark `material-symbols:dark-mode-outline-rounded`, System `material-symbols:radio-button-partial-outline`. Where the local SVG sprite is used, map to its approved equivalents.
2. **Typography:** Use the shared font family, type scale, line heights, and heading hierarchy. Do not introduce local sizes for the same semantic role without a product-specific reason.
3. **Layout rhythm:** Use shared spacing tokens, content-width conventions, control heights, borders, and radii. Page-specific composition may differ; the underlying rhythm should not.
4. **Controls:** Buttons, fields, selects, tabs, badges, alerts, dialogs, tooltips, focus states, and disabled/loading states should use the shared component contract.
5. **Feedback:** Loading, empty, error, success, warning, and destructive states must be recognizable and behave consistently.
6. **Accessibility:** Preserve semantic HTML, keyboard support, visible focus, readable contrast, reduced-motion preferences, and narrow-screen behavior.
7. **Icons:** Use the approved local icon system. Avoid mixing icon fonts, arbitrary Unicode symbols, and different icon libraries in the same product unless migration constraints are documented.
8. **Branding:** The logo geometry and shared identity remain consistent. Product accent colors may differ, but must be mapped through semantic brand tokens. Do not recolor neutral UI, success, warning, or danger states with a product accent.

## Shared shell versus product layout

The Design System must provide stable primitives for page background, content container, header/navigation, page title and description, action group, section heading, responsive navigation, and theme control.

Products do not have to share identical navigation structures:
- NAV is a personal launcher with categories, search, and a dense workspace.
- Merch is a collection application with data-entry and collection workflows.
- Status is an operational dashboard where status and diagnostic information take priority.
- Auth is an identity/security flow where clarity, trust, and error recovery take priority.

The shared shell contract governs spacing, typography, surfaces, controls, theme, and responsive behavior. Product information architecture remains local.

## Migration sequence

### Phase 1: Canonicalize the shared foundation
- Compare `DESIGN.md`, `tokens.css`, `components.css`, `navigation.css`, `design-system.yml`, and Chi Brand tokens.
- Resolve conflicting token ownership and specify the mapping between shared accent tokens and product brand tokens.
- Maintain `example/` as the canonical app-shell example; product pages should supply content/configuration rather than fork its shell markup and styles.
- Keep `design-system.yml` synchronized with the actual CSS tokens.

### Phase 2: Migrate one product at a time
1. **Status:** extract duplicated inline tokens and shared control patterns only after verifying the canonical stylesheet can be loaded safely. Keep monitoring and diagnostic behavior unchanged.
2. **Merch:** normalize common controls and page rhythm; retain its collection-specific sidebar, routes, data workflows, and brand accent.
3. **NAV:** map local aliases to canonical tokens and migrate common controls in stages. Preserve its launcher grid, search, keyboard shortcuts, and responsive sidebar.
4. **Auth:** align login, callback, loading, error, and recovery screens with the same shell and semantic states. Do not change OAuth, PKCE, state validation, callback matching, session handling, or token storage as part of visual work.

### Phase 3: Prevent regressions
For each migrated product, verify:
- Light, Dark, and System themes.
- Desktop and narrow mobile layouts.
- Common control states: default, hover, focus, active, disabled, loading, error, and destructive.
- Existing routes, data operations, authentication, and API contracts.
- No accidental duplicate CSS overrides or hard-coded neutral/status colors.
- No console errors and no broken navigation.

## Change policy

- Inspect callers and actual styles before editing.
- Prefer the smallest complete change and preserve existing functionality.
- Do not add frameworks, remote fonts, or icon CDNs for the sake of visual consistency.
- Do not mechanically replace every page with the same card grid or hero layout.
- Do not claim a product is migrated until its real pages and key states have been checked.
- Record remaining exceptions explicitly instead of silently creating another local design system.
