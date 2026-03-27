export function addElevationLayer(map, options = {}) {
  const {
    sourceId = 'terrain',
    exaggeration = 1.3,
    apiKey,
    hillshade = true
  } = options;

  if (!apiKey) {
    console.warn('⚠️ Missing MapTiler API key for elevation layer');
    return;
  }

  // Avoid duplicate source
  if (!map.getSource(sourceId)) {
    map.addSource(sourceId, {
      type: 'raster-dem',
      url: `https://api.maptiler.com/tiles/terrain-rgb/tiles.json?key=${apiKey}`,
      tileSize: 256
    });
  }

  // Enable 3D terrain
  map.setTerrain({
    source: sourceId,
    exaggeration
  });

	// set lighting
  map.setLight({
    anchor: 'viewport',
    color: 'white',
    intensity: 0.4
  });


  // Optional hillshade layer
  if (hillshade && !map.getLayer('hillshade')) {
    map.addLayer({
      id: 'hillshade',
      type: 'hillshade',
      source: sourceId,
      paint: {
        'hillshade-shadow-color': '#473B24',
        'hillshade-highlight-color': '#fff',
        'hillshade-accent-color': '#000',
        'hillshade-exaggeration': 0.5
      }
    });
  }
}
