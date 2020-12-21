import React from 'react';
import { useHistory } from 'react-router-dom';

import { stringify } from 'query-string';
import Popup from 'reactjs-popup';

import Search from './Search/Search';
import ResultMap from './ResultMap/ResultMap';
import AddPin from './AddPin/AddPin';

const AddPinButton = (
  <button type="button" className="add-pin">+ Add Pin</button>
);

function App() {
  const history = useHistory();

  const defaultSearch = 'Search by location to view books, movies, and TV shows on the map';

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
        <h3>Find books, movies, and TV shows to take you away to your favorite destinations.</h3>
      </header>
      <section className="main">
        <Search defaultSearch={defaultSearch} onSearchSelect={onSearchSelect} />
        <ResultMap />
        <Popup trigger={AddPinButton} modal>
          {(close) => <AddPin close={close} />}
        </Popup>
      </section>
      <footer>
        (c) 2020 Claire Teter Lesh
      </footer>
    </main>
  );
}

export default App;
