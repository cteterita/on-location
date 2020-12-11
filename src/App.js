import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <main className="app">
      <header>
        <h1>On Location</h1>
      </header>
      <section className="main">
        <Switch>
          <Route path="/" />
        </Switch>
      </section>
      <footer>
        (c) 2020 Claire Teter Lesh - About - Send Feedback
      </footer>
    </main>
  );
}

export default App;
