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

## Geospatial Data Management Best Practices

To keep the project organized, reproducible, and easy to evolve, all geospatial data follows a **raw → processed → derived** pipeline.


---

### Directory Structure

data/
├── trails/
│ ├── raw/ # Original GPS recordings (GPX, untouched)
│ ├── processed/ # Cleaned GeoJSON used by the app
│ └── derived/ # Optional: snapped, simplified, or merged outputs
│
├── boundaries/
│ ├── raw/ # Source data (e.g., Overpass download)
│ ├── processed/ # Boundary used by the app
│ └── derived/ # Buffers, simplifications, etc.
│
├── pois/ # Future datasets follow same pattern


---

### Core Principles

#### 1. Never Modify `raw/`
- Raw data is the **source of truth**
- Always store original downloads or recordings here
- Do not edit these files

---

#### 2. The App Reads Only from `processed/`
- All application code should load data exclusively from `processed/`
- These files represent the **current best version** of the data
- It is OK if these are imperfect—they will improve over time

---

#### 3. `derived/` Is Optional and Experimental
- Use for:
  - Snapped trails
  - Simplified geometries
  - Buffered boundaries
- Safe to delete or regenerate

---

#### 4. Use Stable File Names
Prefer:

tregaron-boundary.geojson
trails.geojson


Avoid:

boundary-final.geojson
trails-v3.geojson


> Filenames stay constant; data improves over time

---

#### 5. Always Preserve Originals Before Editing

Example workflow for new data:

1. Save original:

data/boundaries/raw/tregaron-boundary-overpass.geojson


2. Copy to processed:

data/boundaries/processed/tregaron-boundary.geojson


3. Use in app

4. Iterate later by updating `processed/` version

---

### Mental Model

- **raw/** = history (what you got)
- **processed/** = current truth (what the app uses)
- **derived/** = experiments (how you got there)

---

### Goal

This structure ensures:
- Reproducibility
- Clean iteration
- Separation of concerns
- Easy scaling as new datasets are added



---

## Local Development

Clone the repo:

git clone <your-username>/tregaron-explorer.git
cd tregaron-exlporer


Open `index.html` in your browser.


### 🖥️ Running the App Locally (Important)

This project **must be run using a local web server**. Opening `index.html` directly in your browser (via `file://`) will cause errors when loading data files like GeoJSON.

From the project root directory run:

python3 -m http.server 8000

Then point your browser to:

http://localhost:8000


#### ❗ Why this is required

Modern browsers enforce security restrictions (CORS) that prevent JavaScript from loading local files using `fetch` or `XMLHttpRequest`.

In this app, we load GeoJSON like this:

```js
map.addSource('boundary', {
  type: 'geojson',
  data: 'data/processed/boundary.geojson'
});
```







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
