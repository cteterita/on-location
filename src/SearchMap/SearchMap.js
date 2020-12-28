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

const defaultSearch = 'Search by location to view media on the map';

function SearchMap() {
  // Set up location/history hooks
  const location = useLocation();
  const history = useHistory();

  // Set up state hooks
  const [center, setCenter] = useState(sanFrancisco);
  const [zoom, setZoom] = useState(11);
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [mediaFilter, setMediaFilter] = useState({
    movie: true,
    book: true,
    tv_show: true,
  });

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

  const onSearchSelect = (selection) => {
    const { lat, lon } = selection;
    history.push({
      search: stringify({ lat, lon, zoom: 11 }),
    });
  };

  const updateFilters = (e) => {
    const newFilter = { ...mediaFilter };
    newFilter[e.target.id] = e.target.checked;
    setMediaFilter(newFilter);
  };

  useEffect(() => {
    setFilteredResults(results.filter((pin) => mediaFilter[pin.media]));
  }, [results, mediaFilter]);

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
          {filteredResults.map((r) => (
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
      <div className="map-legend">
        <label htmlFor="movie" className="legend-label movie">
          <input
            type="checkbox"
            id="movie"
            defaultChecked={mediaFilter.movie}
            onChange={updateFilters}
          />
          Movies
        </label>
        <label htmlFor="book" className="legend-label book">
          <input
            type="checkbox"
            id="book"
            defaultChecked={mediaFilter.book}
            onChange={updateFilters}
          />
          Books
        </label>
        <label htmlFor="tv_show" className="legend-label tv_show">
          <input
            type="checkbox"
            id="tv_show"
            defaultChecked={mediaFilter.tv_show}
            onChange={updateFilters}
          />
          TV Shows
        </label>
      </div>
    </>
  );
}

export default SearchMap;
