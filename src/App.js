import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing/Landing';
import Results from './Results/Results';

function App() {
  return (
    <main className="app">
      <header>
        <h1>On Location</h1>
      </header>
      <section className="main">
        <Switch>
          <Route path="/results" component={Results} />
          <Route path="/" component={Landing} />
        </Switch>
      </section>
      <footer>
        (c) 2020 Claire Teter Lesh - About - Send Feedback
      </footer>
    </main>
  );
}

export default App;
