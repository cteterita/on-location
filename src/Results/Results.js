import React from 'react';

import Search from '../Search/Search';
import ResultMap from '../ResultMap/ResultMap';

import './Results.css';

function Results() {
  return (
    <>
      <Search />
      <section className="map-result-holder">
        <ResultMap />
        <div className="result-holder">
          <h3>Home Alone 3: Lost in New York</h3>
          <p>&#9733;&#9733;&#9733;&#9733;&#9734;</p>
          <div>
            <p>
              This is a description of the movie Home Alone 3: Lost in New York.
            </p>
            <p>
              Its about terrible parenting. Full disclosure, I havent actually
              seen it.
            </p>
          </div>
          <p>Tags: Good for Kids, Christmas</p>
          <a href="http://www.google.com" target="_blank" rel="noreferrer">Watch it on Netflix</a>
        </div>
      </section>
    </>

  );
}

export default Results;
