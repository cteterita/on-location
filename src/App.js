import React from 'react';

import Search from './Search/Search';
import ResultMap from './ResultMap/ResultMap';

function App() {
  const defaultSearch = 'Search for books, movies, and TV shows to take you away to your favorite destinations.';
  return (
    <main className="app">
      <header>
        <h1>On Location</h1>
      </header>
      <section className="main">
        <Search defaultSearch={defaultSearch} />
        <ResultMap />
      </section>
      <footer>
        (c) 2020 Claire Teter Lesh - About - Send Feedback
      </footer>
    </main>
  );
}

export default App;
