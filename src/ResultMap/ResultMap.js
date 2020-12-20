import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { Map } from 'pigeon-maps';
import { parse, stringify } from 'query-string';

import Pin from '../Pin/Pin';
import mapTilerProvider from '../utils/mapTilerProvider';

import './ResultMap.css';

import config from '../config';

const sanFrancisco = [37.7790262, -122.4199061];
const exampleResults = [
  {
    title: 'The Joy Luck Club',
    type: 'book',
    lat: 37.7790262,
    lon: -122.4199061,
    link: 'https://www.goodreads.com/book/show/7763.The_Joy_Luck_Club',
    id: 1,
  },
  {
    title: 'The Wild Parrots of Telegraph Hill',
    type: 'book',
    lat: 37.800785,
    lon: -122.4040908,
    link: 'https://www.goodreads.com/book/show/221682.The_Wild_Parrots_of_Telegraph_Hill?ac=1&from_search=true&qid=ygucMo2g7U&rank=1',
    id: 2,
  },
  {
    title: 'The Rock',
    type: 'movie',
    lat: 37.82672135,
    lon: -122.42275899441964,
    link: 'https://www.imdb.com/title/tt0117500/',
    id: 3,
  },
];

function ResultMap() {
  // Set up location/history hooks
  const location = useLocation();
  const history = useHistory();

  // Set up state hooks
  const [center, setCenter] = useState(sanFrancisco);
  const [zoom, setZoom] = useState(11);
  const [results, setResults] = useState(exampleResults); // TODO: Remove this default

  // Update the map center/zoom when the location changes
  useEffect(() => {
    const params = parse(location.search);
    const lon = parseFloat(params.lon);
    const lat = parseFloat(params.lat);
    // Move only if the coordinates make sense
    if (Math.abs(lat) < 90 && Math.abs(lon) < 180) {
      setCenter([lat, lon]);
    }
    const initialZoom = parseFloat(params.zoom);
    if (initialZoom >= 1 && initialZoom <= 18) setZoom(initialZoom);
  }, [location.search]);

  function updatePins(ne, sw) {
    fetch(`${config.SERVER_URL}/pins?ne=${ne}&sw=${sw}`)
      .then((res) => res.json())
      .then((pins) => setResults(pins))
      .catch(); // TODO: Error handling
  }

  // Update the map & URL when the user moves it
  const updateMap = (p) => {
    setCenter(p.center);
    setZoom(p.zoom);
    // Fetch pins in the bounds of the map
    updatePins(p.bounds.ne, p.bounds.sw);
    // Update the URL to show the current map settings, but don't push it to history
    history.replace({
      search: stringify({
        lat: p.center[0],
        lon: p.center[1],
        zoom: p.zoom,
      }),
    });
  };

  return (
    <div className="result-map">
      <Map
        center={center}
        zoom={zoom}
        onBoundsChanged={updateMap}
        provider={mapTilerProvider}
      >
        {results.map((r) => <Pin anchor={[r.lat, r.lon]} result={r} key={r.id} />)}
      </Map>
    </div>
  );
}

export default ResultMap;
