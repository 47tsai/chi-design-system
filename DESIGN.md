# Chi Design System

A restrained, panel-led interface system for the Chi website ecosystem.

## Design direction
Use the HoYoverse Account Center as a reference for clarity, quiet surfaces, clear navigation, and separated content areas. Do not copy its assets, exact composition, or proprietary implementation. Chi should share the same discipline while keeping its own identity.

## Visual principles
1. **Build the page before the component library.** Establish page grid, header, content width, and section rhythm first.
2. **Use surfaces with intention.** Page background, primary surface, and inset surface have distinct roles. Not every group needs a card.
3. **Prefer structure over decoration.** Thin borders, separators, alignment, and typography do most of the work. Reserve shadows for floating layers.
4. **Make hierarchy obvious.** Page title, lead, section title, body, metadata, and helper text each have a defined role.
5. **Keep controls calm and consistent.** Inputs and buttons share control height, border treatment, focus ring, and spacing rhythm.
6. **Let content determine height.** Avoid fixed card heights and manual positioning.
7. **Responsive layouts are intentional.** Desktop can use split layouts; narrow screens stack content in a predictable order.
8. **Accessibility is visual design.** Maintain readable contrast, visible keyboard focus, semantic markup, and clear status text.

## Layout rules
- Use a centered container with a readable maximum width.
- Keep the site header compact and separate it from content with a subtle divider.
- Page introductions need a clear title and short lead, not excessive empty space.
- Use grids only for collections of peer items. Use split layouts for content with different priorities.
- Prefer separators and section spacing before adding another bordered box.
- On mobile, reduce outer gutters modestly; do not shrink body text to fit.

## Component roles
- `.chi-panel`: bounded region for related content, such as a settings group or summary.
- `.chi-card`: one item in a collection of peer items. Use sparingly.
- `.chi-section`: vertical grouping with consistent rhythm.
- `.chi-field`, `.chi-input`, `.chi-select`, `.chi-textarea`: form controls with shared interaction language.
- `.chi-button`: primary and secondary actions.
- `.chi-divider`: quiet structural separator.
- `.chi-badge`: compact state or category label, not explanatory text replacement.

## Tokens and adoption
- Tokens live in `tokens.css`; reusable styles live in `components.css`.
- Prefix shared classes and variables with `chi-` to reduce collisions.
- Avoid global rules that unexpectedly restyle host sites.
- Keep routing, data access, validation, and application behavior in the host project.
- Use `examples/index.html` as a visual regression reference.

## Review checklist
- Does the page have one obvious primary focus?
- Are panels used only where they help grouping?
- Are title, description, metadata, and actions aligned?
- Is body and helper text readable at phone width?
- Do focus, hover, disabled, and dark-theme states remain visible?
- Does the result look coherent without gradients or heavy shadows?
