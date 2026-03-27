# Testing Guide

## Philosophy

This project prioritizes real-world usability over formal unit tests.

Testing focuses on:
- mobile experience
- interaction quality
- visual clarity

---

## Mobile Usability Checklist

### Core Experience

- [ ] Map loads within ~2–3 seconds on mobile data
- [ ] No blank tiles or rendering glitches on load
- [ ] Map defaults to a useful view (not zoomed too far out/in)

---

### Touch Interaction

- [ ] Tap targets (buttons, toggles) are easy to hit with thumb
- [ ] No accidental taps due to small UI elements
- [ ] Map pans smoothly with one finger
- [ ] Pinch-to-zoom works reliably
- [ ] No “jittery” or laggy interactions

---

### UI Layout

- [ ] Header does not block important map features
- [ ] Legend does not overlap controls
- [ ] Controls are reachable with one hand (bottom/right bias preferred)
- [ ] No UI elements overlap each other at small screen sizes
- [ ] Text is readable without zooming

---

### Popups & Interactions

- [ ] Popups open reliably on tap
- [ ] Popups do not go off-screen
- [ ] Popups are easy to close
- [ ] Popup text is readable (no tiny fonts)

---

### Map Features

- [ ] Trails are clearly visible at default zoom
- [ ] Features (pond, creek, landmarks) are distinguishable
- [ ] Colors are visible in bright outdoor light
- [ ] Terrain (if enabled) enhances clarity, not confusion

---

### Motion & Performance

- [ ] Animations feel smooth (no stutter)
- [ ] No noticeable lag when toggling layers
- [ ] Tour mode runs smoothly without freezing
- [ ] Reset view works quickly and predictably

---

### Real-World Use (Important)

- [ ] Tested while walking (not just standing still)
- [ ] Usable with one hand
- [ ] Screen glare does not make map unusable
- [ ] Works reasonably on low battery mode

---

### Failure Cases

- [ ] App still works after losing/recovering signal
- [ ] No crashes or console errors on mobile browser
- [ ] Reloading page restores usable state

---

### Final Check

- [ ] “Would I actually use this while walking in Tregaron?”