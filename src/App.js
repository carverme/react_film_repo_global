import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';
import Fave from './Fave';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
  }

handleFaveToggle(film) {
  console.log("toggling fave")
  const faves = Array.from(this.state.faves)
  const filmIndex = faves.indexOf(film)
  if (filmIndex > -1) {
    //it has been found in faves, remove it!
    faves.splice(filmIndex, 1)
  } else {
    //if not found it is not in faves yet.
    faves.push(film)
  }
  this.setState({
    faves
  })
}

handleDetailsClick(film) {
  console.log("Fetching details for ", film)
  this.setState({
    current: film
  })
}

  render() {
    return (
        <div className="film-library">
          <FilmListing onFaveToggle={this.handleFaveToggle} films={this.state.films} faves={this.state.faves}/>
          <FilmDetails film={this.state.current}/>
        </div>
    );
  }
}

export default App;
