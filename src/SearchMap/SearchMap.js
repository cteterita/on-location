import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

import { Map } from 'pigeon-maps';
import { parse, stringify } from 'query-string';

import Search from '../Search/Search';
import Pin from '../Pin/Pin';
import mapTilerProvider from '../utils/mapTilerProvider';

import './SearchMap.css';

import config from '../config';

const sanFrancisco = [37.7790262, -122.4199061];

function SearchMap() {
  // Set up location/history hooks
  const location = useLocation();
  const history = useHistory();

  // Set up state hooks
  const [center, setCenter] = useState(sanFrancisco);
  const [zoom, setZoom] = useState(11);
  const [results, setResults] = useState([]);

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

  const defaultSearch = 'Search by location to view books, movies, and TV shows on the map';

  const onSearchSelect = (selection) => {
    const { lat, lon } = selection;
    history.push({
      search: stringify({ lat, lon, zoom: 11 }),
    });
  };

  return (
    <>
      <Search defaultSearch={defaultSearch} onSearchSelect={onSearchSelect} />
      <div className="result-map">
        <Map
          center={center}
          zoom={zoom}
          onBoundsChanged={updateMap}
          provider={mapTilerProvider}
        >
          {results.map((r) => (
            <Pin
              anchor={[r.lat, r.lon]}
              result={r}
              key={r.id}
            />
          ))}
        </Map>
      </div>
      <Link to="/add">
        <button type="button" className="add-pin">+ Add Pin</button>
      </Link>
    </>
  );
}

export default SearchMap;
