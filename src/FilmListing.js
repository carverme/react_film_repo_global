import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: 'all'
    }
  this.handleFilterClick = this.handleFilterClick.bind(this)
  }

  handleFilterClick(filter) {
    console.log("Setting filter to ", filter)
    this.setState({
      filter
    })
}

  render() {
    const safeArray = (this.state.filter === 'all') ? Array.from(this.props.films) : Array.from(this.props.faves);
    const allFilms = safeArray.map( (film) => <FilmRow film={film}
                                                       key={film.id}
                                                       onDetailsClick={() => this.props.onDetailsClick(film)}
                                                       onFaveToggle={() => this.props.onFaveToggle(film)}
                                                       isFave={(this.props.faves.indexOf(film) > -1) ? true : false}
                                              />)
    const allClass = (this.state.filter === 'all') ? "film-list-filter is-active" : "film-list-filter"
    const favesClass = (this.state.filter === 'faves') ? "film-list-filter is-active" : "film-list-filter"

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
          <div className="film-list-filters">
            <div onClick={() => this.handleFilterClick('all')} className={allClass}>
              ALL
              <span className="section-count">{this.props.films.length}</span>
            </div>
            <div onClick={() => this.handleFilterClick('faves')} className={favesClass}>
              FAVES
              <span className="section-count">{this.props.faves.length}</span>
            </div>
          </div>
        {allFilms}
      </div>
    )
  }
}

export default FilmListing
