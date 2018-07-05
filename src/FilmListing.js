import React, { Component } from 'react';



class FilmListing extends Component {
  render() {
    var allFilms = this.props.films.map( (film, i) => <h3>{film.title}</h3>)
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {allFilms}
      </div>
    )
  }
}


export default FilmListing
