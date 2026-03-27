# Tregaron Explorer

An interactive, mobile-first map of Tregaron Conservancy in Washington, DC.

## Current Version

v0.1 — Initial interactive map

## Overview

Tregaron Explorer is a lightweight web map designed for use **while walking in the park**.

It focuses on:
- trails
- terrain
- key features (pond, creek, landmarks)

The goal is to create a **clear, aesthetically pleasing micro-map** of a small, beautiful landscape.

---

## Live Map

TBD

---

## Features

- Interactive trail map
- Elevation (3D terrain + hillshade)
- Feature layers (pond, creek, landmarks)
- Mobile-friendly interface
- Guided tour mode
- Seasonal visual styles

---

## Tech Stack

- MapLibre GL JS
- GeoJSON data
- Static hosting (GitHub Pages)

No backend required.

---

## Project Structure

tregaron-explorer/
├── index.html
├── app.js
├── style.css
├── data/
├── assets/
├── DESIGN.md
├── TESTING.md


### Data Structure Example


├── data/
│   ├── raw/                # Immutable source data (never edited)
│   │   ├── tregaron-trails-raw.gpx
│   │   └── *.gpx
│   │
│   ├── processed/          # Cleaned/converted data used by the app
│   │   ├── trails.geojson
│   │   └── *.geojson
│   │
│   ├── derived/            # Optional: computed outputs (snapped, simplified, merged)
│   │   ├── trails-snapped.geojson
│   │   └── trails-simplified.geojson
│
├── docs/
│   ├── trail-validation.md   # Human-readable findings + screenshots
│   └── decisions.md          # (Optional) Key project decisions over time
│
├── analysis/               # Scratch work / experiments (safe to delete)
│   ├── qgis/               # QGIS project files (.qgz)
│   ├── geojson/            # Temporary overlays
│   └── notes.md
│
├── src/                    # Your app code (unchanged)
│
└── README.md

---

## Local Development

Clone the repo:

git clone <your-username>/tregaron-explorer.git
cd tregaron-exlporer


Open `index.html` in your browser.

---

## Design Philosophy

See `DESIGN.md` for guiding principles.

---

## Testing

See `TESTING.md` for mobile usability checklist and testing approach.

---
## Development

This project was developed with the assistance of AI tools (OpenAI Codex).

All architecture, design direction, and final decisions were guided and reviewed by a human.

---

## License

MIT.
