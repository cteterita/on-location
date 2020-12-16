import React from 'react';
import { useHistory } from 'react-router-dom';

import { stringify } from 'query-string';
import Popup from 'reactjs-popup';

import Search from './Search/Search';
import ResultMap from './ResultMap/ResultMap';
import AddMarker from './AddMarker/AddMarker';

const addMarkerButton = (
  <button type="button" className="add-marker">+ Add Marker</button>
);

function App() {
  const history = useHistory();

  const defaultSearch = 'Search for books, movies, and TV shows to take you away to your favorite destinations.';

  const onSearchSelect = (selection) => {
    const { lat, lon } = selection;
    history.push({
      search: stringify({ lat, lon, zoom: 11 }),
    });
  };

  return (
    <main className="app">
      <header>
        <h1>On Location</h1>
      </header>
      <section className="main">
        <Search defaultSearch={defaultSearch} onSearchSelect={onSearchSelect} />
        <ResultMap />
        <Popup trigger={addMarkerButton} position="right center" modal>
          <AddMarker />
        </Popup>
      </section>
      <footer>
        (c) 2020 Claire Teter Lesh - About - Send Feedback
      </footer>
    </main>
  );
}

export default App;
