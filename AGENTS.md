# AGENTS.md

## Purpose and scope

This file defines **how an AI agent should work** in this repository: how to inspect changes, preserve behavior, choose files, validate work, and report results.

- `DESIGN.md` defines the visual language, design decisions, reusable component mapping, tokens, accessibility expectations, and page-pattern guidance. Read it before changing any UI.
- `tokens.css`, `components.css`, and `navigation.css` are the implementation sources for shared styles. Inspect the current code rather than relying on examples in documentation.
- `elements.html` and `elements.css` are the component catalogue and its presentation layer. They are documentation/demo surfaces, not a production-page template.
- `index.html` is the minimal starter shell. Keep it minimal unless the requested task explicitly changes the starter shell.

Do not copy the entire catalogue into a product website. The goal is a shared design language with product-specific information architecture, content, and behavior.

## Instruction priority

When instructions conflict, use this order:

1. The user's explicit request and constraints in the current task.
2. Applicable system, safety, security, and repository instructions.
3. This file for engineering workflow and validation.
4. `DESIGN.md` for visual and interaction design decisions.
5. Existing implementation and established project conventions.
6. Local stylistic preference.

Do not use a design-system rule as a reason to remove a requested feature, silently change a workflow, or rewrite unrelated code.

## Required workflow

### 1. Inspect before editing

- Read `DESIGN.md` and this file.
- Inspect the actual target files and their imports, callers, event handlers, routes, and deployment workflow where relevant.
- Identify whether the request is a documentation change, shared-component change, catalogue change, or product-specific change.
- Check for existing tokens, classes, patterns, and utilities before introducing alternatives.
- If the target file or current state cannot be retrieved, state the limitation instead of inventing its contents.

### 2. Make the smallest complete change

- Preserve existing features, content, URLs, routes, data contracts, permissions, authentication, security checks, and persistence unless the user explicitly asks to change them.
- Prefer existing semantic tokens and shared classes over new one-off CSS.
- Add shared behavior or styling to the appropriate shared file. Keep catalogue-only presentation in `elements.css`.
- Do not add dependencies, frameworks, remote fonts, icon CDNs, or build tooling without a concrete need and user-compatible scope.
- Do not create fake functionality. A visual demo must not be represented as a real API call, authentication flow, data write, or persisted setting.
- Keep changes focused. Avoid unrelated cleanup, broad renaming, and reformatting that makes review harder.
- Do not hardcode token values into new components when a suitable semantic token already exists.

### 3. Choose the right file

| Change | Preferred location |
| --- | --- |
| Semantic colors, type scale, spacing, radii, shadows, shared dimensions | `tokens.css` |
| Shared layout primitives and reusable interface components | `components.css` |
| Shared navigation, language menu, responsive navigation states | `navigation.css` |
| Catalogue-only layout, filters, examples, preview polish | `elements.css` and, for content/markup, `elements.html` |
| Minimal starter-shell markup or its shell-specific behavior | `index.html` |
| Visual rules, component selection, page patterns, AI design guidance | `DESIGN.md` |
| Agent workflow, engineering conventions, validation and reporting | `AGENTS.md` |
| User-facing project overview and setup | `README.md` |

If a change affects a reusable component, update its documentation/example in `elements.html` when appropriate, and keep `DESIGN.md` consistent with the implementation.

### 4. Preserve semantic and accessible behavior

- Use native HTML elements according to their meaning: buttons for actions, links for navigation, and properly labelled form controls.
- Keep accessible names for icon-only controls.
- For interactive widgets, verify keyboard operation, focus visibility and restoration, Escape behavior where appropriate, expanded/selected/disabled state, and relevant ARIA attributes.
- Associate field errors and help text with their controls. Do not rely on color alone to convey state.
- Support light and dark themes, narrow screens, long text, and `prefers-reduced-motion` when relevant.
- Do not add event handlers that only imitate success without performing the promised operation.

### 5. Validate proportionately

After editing, perform the strongest checks available for the change:

- **Documentation:** verify headings, links, examples, and consistency with actual class/token names.
- **CSS:** check selectors and token references, balanced braces, theme overrides, and unintended global selectors.
- **HTML/JavaScript:** inspect asset paths, element IDs, event-handler assumptions, and obvious console/runtime hazards.
- **Responsive UI:** check narrow and wide layouts, text wrapping, overflow, and operation visibility.
- **Deployment:** inspect the relevant GitHub Actions run or published URL if available. A successful commit does not prove that Pages deployed.
- **Browser testing:** claim visual or interactive verification only if the page was actually opened and tested.

If a browser, build command, or runtime is unavailable, report that check as **not verified**. Do not mark a test as passed merely because code inspection found no obvious issue.

## Change-specific rules

### Shared design-system changes

1. Search for an existing token/class before adding one.
2. Prefer a semantic token over a raw color or dimension.
3. Prefer a component variant when behavior and structure remain the same; add a new component only when the semantic pattern is genuinely different.
4. Check both light and dark theme values and relevant interaction states.
5. Update the catalogue and design documentation so future work can discover the change.
6. Verify that product sites do not need to import `elements.css` to use the shared component.

### Catalogue changes

- Keep examples clearly identified as demonstrations.
- Do not let catalogue-specific class names leak into shared product markup.
- Ensure search/filter controls, tabs, theme previews, copy controls, and menu examples still have coherent states and accessible labels.
- Keep the catalogue useful as a reference; do not turn the blank starter shell into a second gallery.

### Security-sensitive changes

- Treat authentication, authorization, secrets, session handling, account linking, API calls, and persistence as behavior that must be preserved and reviewed separately from visual styling.
- Never expose secrets in HTML, CSS, documentation, commit messages, logs, or client-side code.
- Do not weaken security checks or replace real validation with presentation-only feedback to make a demo appear functional.
- If a UI task touches a security-sensitive flow, inspect its implementation and call out any unverified backend behavior.

## Completion report

When reporting a change, summarize:

1. What changed and which files were affected.
2. The commit or revision, if a commit was actually created.
3. Which checks were performed and their results.
4. What remains unverified, especially browser rendering, accessibility behavior, and deployment when not actually tested.

Use precise status wording:

- **Implemented:** the files were changed.
- **Static checks passed:** named code/documentation checks completed.
- **Build passed:** a build command actually ran successfully.
- **Browser tested:** the relevant page and behavior were actually exercised.
- **Deployment verified:** the published deployment was actually checked.

Never treat these statuses as interchangeable.
