// create the map
const map = new maplibregl.Map({
  container: 'map',
  style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
  center: [-77.06129157798874, 38.93094797691785],
  zoom: 18,
  pitch: 45
});


// set the default view
const DEFAULT_VIEW = {
  center: [-77.06129157798874, 38.93094797691785],
  zoom: 18,
  pitch: 45,
  bearing: -20
};


// helper function to fit map to screen
function fitToGeoJSON(map, data, padding = 20) {
  const bounds = new maplibregl.LngLatBounds();

  data.features.forEach(feature => {
    const geom = feature.geometry;

    if (geom.type === 'Polygon') {
      geom.coordinates.forEach(ring => {
        ring.forEach(coord => bounds.extend(coord));
      });
    }

    if (geom.type === 'MultiPolygon') {
      geom.coordinates.forEach(polygon => {
        polygon.forEach(ring => {
          ring.forEach(coord => bounds.extend(coord));
        });
      });
    }
  });

  map.fitBounds(bounds, { padding });
}


// add navigation controls
map.addControl(new maplibregl.NavigationControl(), 'top-right');

// add fullscreen control
map.addControl(new maplibregl.FullscreenControl());


// add hover interaction
map.on('mousemove', 'boundary-fill', () => {
  map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'boundary-fill', () => {
  map.getCanvas().style.cursor = '';
});


map.on('load', () => {

  // load GeoJSON manually so we can use it
  fetch('data/processed/boundary.geojson')
    .then(res => res.json())
    .then(data => {

      // add source using loaded data
      map.addSource('boundary', {
        type: 'geojson',
        data: data
      });

      // add fill layer
      map.addLayer({
        id: 'boundary-fill',
        type: 'fill',
        source: 'boundary',
        paint: {
          'fill-color': '#66bb6a',
          'fill-opacity': 0.2
        }
      });

      // add outline layer
      map.addLayer({
        id: 'boundary-outline',
        type: 'line',
        source: 'boundary',
        paint: {
          'line-color': '#1b5e20',
          'line-width': 2
        }
      });

      // 👉 FIT TO BOUNDARY
	  fitToGeoJSON(map, data);

    });
	
	console.log("Map loaded + boundary added");
	

});


// debugging
// send long lat to console 
map.on('click', (e) => {
  console.log(e.lngLat);
});


// add click feedback, will help with debugging
map.on('click', 'boundary-fill', () => {
  console.log('Boundary clicked');
});

