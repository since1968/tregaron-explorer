// MapTiler key
// restricted to localhost and since1968.github.io
// replace with your own key if you want to host on a different server
const MAPTILER_API_KEY = 'fj08AS00kVLEQZB6UbUy';

// import layer helpers
import { addElevationLayer } from './layers/elevation.js';
import { addBoundaryLayer } from './layers/boundary.js';

// fit map to viewport only on first load
let hasFittedToBoundary = false;

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


map.on('load', async () => {
	
	const response = await fetch('./data/processed/boundary.geojson');
	const geojson = await response.json();	
	
	addElevationLayer(map, {
	    apiKey: MAPTILER_API_KEY,
	    exaggeration: 1.2
	  });	

	  addBoundaryLayer(map, {
	      data: geojson
	    });


	// fit to boundary but only fit once
	if (!hasFittedToBoundary) {
		fitToGeoJSON(map, geojson);
		hasFittedToBoundary = true;
	 };
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

