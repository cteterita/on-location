import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SearchMap from './SearchMap/SearchMap';
import AddPin from './AddPin/AddPin';

function App() {
  return (
    <main className="app">
      <header>
        <h1>On Location</h1>
        <h3>Find books, movies, and TV shows to take you away to your favorite destinations.</h3>
      </header>
      <section className="main">
        <Switch>
          <Route path="/add" component={AddPin} />
          <Route path="/" component={SearchMap} />
        </Switch>
      </section>
      <footer>
        (c) 2020 Claire Teter Lesh
      </footer>
    </main>
  );
}

export default App;
