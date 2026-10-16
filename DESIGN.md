# Chi Design Principles

## Direction

A clean, structured interface inspired by the restrained layout and clear information grouping of the HoYoverse Account Center. Treat the reference as a source of design ideas, not as an asset or code source.

## Principles

1. **Structure with borders.** Use thin borders and subtle surface contrast to group information instead of relying on heavy shadows or decorative gradients.
2. **Clear hierarchy.** Page title first, supporting description second, then section labels and controls. Keep helper text readable.
3. **Consistent alignment.** Related cards share padding and content alignment. Place title, description, metadata, and actions in predictable positions.
4. **Purposeful whitespace.** Use a small spacing scale. Avoid both cramped controls and oversized empty areas inside cards.
5. **Functional restraint.** Use color to communicate interaction, focus, selection, and status. Avoid decoration that does not aid understanding.
6. **Responsive by default.** Layouts should collapse cleanly on narrow screens without horizontal overflow.
7. **Accessible interaction.** Preserve visible keyboard focus, readable contrast, and semantic HTML.

## Initial visual baseline

- Neutral page background and white surface.
- Dark, readable primary text with subdued secondary text.
- Thin neutral borders and modest corner radius.
- One restrained accent color for links and primary actions.
- Minimal shadows; do not use gradients as a default.
- Comfortable control heights and consistent spacing.

These values are an initial draft. Refine them against screenshots of the chosen reference page before applying them to production websites.

## Cross-framework rules

- Tokens belong in CSS custom properties.
- Shared visual components use ordinary CSS classes prefixed with `chi-`.
- Do not assume a framework, router, build system, or JavaScript runtime.
- Keep behavior, data access, routing, and business logic in each host project.
- Avoid global selectors that unexpectedly restyle a host site's existing elements.

## Component layout guidance

A standard card should place its heading and description at the top, its main content next, and any actions in a consistent action row. Use grid or flexbox for alignment rather than manual offsets. Do not force every card to the same height unless the collection layout needs it.