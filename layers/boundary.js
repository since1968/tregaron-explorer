export function addBoundaryLayer(map, options = {}) {
  const {
    sourceId = 'boundary',
    data,
    fillColor = '#088',
    fillOpacity = 0.2,
    lineColor = '#000',
    lineWidth = 2
  } = options;

  if (!data) {
    console.warn('⚠️ No boundary data provided');
    return;
  }

  // Add source (if not already present)
  if (!map.getSource(sourceId)) {
    map.addSource(sourceId, {
      type: 'geojson',
      data
    });
  }

  // Fill layer (polygon interior)
  if (!map.getLayer(`${sourceId}-fill`)) {
    map.addLayer({
      id: `${sourceId}-fill`,
      type: 'fill',
      source: sourceId,
      paint: {
        'fill-color': fillColor,
        'fill-opacity': fillOpacity
      }
    });
  }

  // Outline layer (border)
  if (!map.getLayer(`${sourceId}-line`)) {
    map.addLayer({
      id: `${sourceId}-line`,
      type: 'line',
      source: sourceId,
      paint: {
        'line-color': lineColor,
        'line-width': lineWidth
      }
    });
  }
}