const MAPTILER_ACCESS_TOKEN = '5CYJt7lF8ZbGdWKMHekb';
const MAP_ID = 'basic';

function mapTilerProvider(x, y, z, dpr) {
  return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?key=${MAPTILER_ACCESS_TOKEN}`;
}

export default mapTilerProvider;
