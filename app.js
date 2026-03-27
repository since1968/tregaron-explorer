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


// add navigation controls
map.addControl(new maplibregl.NavigationControl(), 'top-right');

// add fullscreen control
map.addControl(new maplibregl.FullscreenControl());




// debugging
// send long lat to console 
map.on('click', (e) => {
  console.log(e.lngLat);
});

// map loaded to console
map.on('load', () => {
	map.addSource('boundary', {
	type: 'geojson',
	data: 'data/processed/boundary.geojson'
	});

	map.addLayer({
		id: 'boundary-fill',
		type: 'fill',
		source: 'boundary',
		paint: {
			'fill-color': '#66bb6a',
			'fill-opacity': 0.2
		}
	});

	map.addLayer({
		id: 'boundary-outline',
		type: 'line',
		source: 'boundary',
		paint: {
			'line-color': '#1b5e20',
			'line-width': 2
		}
	});





console.log("Map loaded + boundary added");

});


