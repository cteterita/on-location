import React, { useState } from 'react';
import { Map } from 'pigeon-maps';

import ResultMarker from '../ResultMarker/ResultMarker';

import './ResultMap.css';

const sanFrancisco = [37.7790262, -122.4199061];
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
  const [center, setCenter] = useState(sanFrancisco);
  const [zoom, setZoom] = useState(11);
  const [results] = useState(exampleResults);

  // TODO: Fix sizing
  return (
    <div className="result-map">
      <Map
        width={800}
        height={300}
        center={center}
        zoom={zoom}
        onBoundsChanged={({ newCenter, newZoom }) => { setCenter(newCenter); setZoom(newZoom); }}
      >
        {results.map((r) => <ResultMarker anchor={[r.lat, r.lon]} result={r} />)}
      </Map>
    </div>
  );
}

export default ResultMap;
