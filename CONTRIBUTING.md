# Contributing Guide

## Philosophy

This is a **small, high-quality, mobile-first map** of Tregaron Conservancy.

Do not treat this as a general-purpose mapping framework.

Prioritize:
- clarity over complexity
- simplicity over abstraction
- user experience over features

---

## Working Model

Work is organized into **GitHub tickets**.

When implementing a ticket:

1. Read the ticket fully
2. Check DESIGN.md for constraints
3. Check TESTING.md for validation
4. Ask clarifying questions if anything is ambiguous
5. Otherwise proceed with implementation

---

## Implementation Standards

- Keep code simple and readable
- Avoid unnecessary dependencies
- Do not introduce build steps unless absolutely necessary
- Prefer vanilla JS over frameworks

---

## UI / UX Rules

- Mobile-first always
- Do not add UI elements without clear purpose
- Avoid clutter
- Ensure all interactions are touch-friendly

---

## Map-Specific Guidelines

- All layers must have clear visual distinction
- Avoid overly bright or harsh colors
- Maintain visual hierarchy (trails > features > background)

---

## Data Handling

- GeoJSON should be clean and minimal
- Do not include unused properties
- Prefer accuracy over completeness

---

## Before Completing a Ticket

Verify:

- Works on mobile (required)
- No console errors
- No overlapping UI elements
- Interactions feel smooth

---

## Output Requirements (for Codex)

When completing a task:

- List files changed
- Show code updates (full or diff)
- Note any assumptions made

---

## Non-Goals

Do NOT:

- Generalize prematurely
- Add features not requested in a ticket
- Introduce unnecessary complexity

---

## AI-Assisted Development

This project may use AI tools (e.g., Codex) to implement tickets.

All generated code must:
- Follow DESIGN.md
- Pass TESTING.md checks
- Be reviewed before acceptance

---


## Guiding Principle

If unsure, choose the option that makes the map:
> simpler, clearer, and more pleasant to use