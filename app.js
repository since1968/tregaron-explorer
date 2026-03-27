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


// send long lat to console. useful for debugging 
// comment out if clutter
map.on('click', (e) => {
  console.log(e.lngLat);
});

// add navigation controls
map.addControl(new maplibregl.NavigationControl(), 'top-right');

// add fullscreen control
map.addControl(new maplibregl.FullscreenControl());

