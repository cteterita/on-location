import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { Map } from 'pigeon-maps';
import { parse, stringify } from 'query-string';

import ResultMarker from '../ResultMarker/ResultMarker';

import './ResultMap.css';

const sanFrancisco = {
  lat: 37.7790262,
  lon: -122.4199061,
};
const exampleResults = [
  {
    title: 'The Joy Luck Club',
    type: 'book',
    lat: 37.7790262,
    lon: -122.4199061,
    link: 'https://www.goodreads.com/book/show/7763.The_Joy_Luck_Club',
  },
  {
    title: 'The Wild Parrots of Telegraph Hill',
    type: 'book',
    lat: 37.800785,
    lon: -122.4040908,
    link: 'https://www.goodreads.com/book/show/221682.The_Wild_Parrots_of_Telegraph_Hill?ac=1&from_search=true&qid=ygucMo2g7U&rank=1',
  },
  {
    title: 'The Rock',
    type: 'movie',
    lat: 37.82672135,
    lon: -122.42275899441964,
    link: 'https://www.imdb.com/title/tt0117500/',
  },
];

function ResultMap() {
  // Parse the map center & zoom from the query params
  const params = parse(useLocation().search);
  let lon = parseFloat(params.lon);
  let lat = parseFloat(params.lat);
  // If the lat and lon don't make sense, just load San Francisco
  if (Number.isNaN(lon) || Math.abs(lon) > 180 || Number.isNaN(lat) || Math.abs(lat) > 90) {
    lon = sanFrancisco.lon;
    lat = sanFrancisco.lat;
  }
  let initialZoom = parseFloat(params.zoom);
  if (Number.isNaN(initialZoom) || initialZoom < 1 || initialZoom > 18) initialZoom = 11;

  const [center, setCenter] = useState([lat, lon]);
  const [zoom, setZoom] = useState(initialZoom);
  const [results] = useState(exampleResults);

  const history = useHistory();

  const updateMap = (p) => {
    setCenter(p.center);
    setZoom(p.zoom);
    // Update the URL to show the current map settings, but don't push it to history
    history.replace({
      search: stringify({
        lat: p.center[0],
        lon: p.center[1],
        zoom: p.zoom,
      }),
    });
  };

  // TODO: Fix sizing
  return (
    <div className="result-map">
      <Map
        width={800}
        height={300}
        center={center}
        zoom={zoom}
        onBoundsChanged={updateMap}
      >
        {results.map((r) => <ResultMarker anchor={[r.lat, r.lon]} result={r} />)}
      </Map>
    </div>
  );
}

export default ResultMap;
