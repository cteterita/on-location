import React from 'react';
import {
  Route, Switch, Link, useHistory,
} from 'react-router-dom';

import { stringify } from 'query-string';

import Search from './Search/Search';
import ResultMap from './ResultMap/ResultMap';
import AddPin from './AddPin/AddPin';

function App() {
  const history = useHistory();

  const defaultSearch = 'Search by location to view books, movies, and TV shows on the map';

  const onSearchSelect = (selection) => {
    const { lat, lon } = selection;
    history.push({
      search: stringify({ lat, lon, zoom: 11 }),
    });
  };

  function searchWithMap() {
    return (
      <>
        <Search defaultSearch={defaultSearch} onSearchSelect={onSearchSelect} />
        <ResultMap />
        <Link to="/add">
          <button type="button" className="add-pin">+ Add Pin</button>
        </Link>
      </>
    );
  }

  return (
    <main className="app">
      <header>
        <h1>On Location</h1>
        <h3>Find books, movies, and TV shows to take you away to your favorite destinations.</h3>
      </header>
      <section className="main">
        <Switch>
          <Route path="/add" component={AddPin} />
          <Route path="/" component={searchWithMap} />
        </Switch>
      </section>
      <footer>
        (c) 2020 Claire Teter Lesh
      </footer>
    </main>
  );
}

export default App;
