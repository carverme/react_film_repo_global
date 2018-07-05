import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <h1>This is content</h1>
          </div>

          <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
            <h1>These are details.</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
