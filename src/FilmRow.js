import React from 'react';

// import React, {Component} from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

// class FilmRow extends Component {
//
//   render() {
//     //const posterUrl = "https://image.tmdb.org/t/p/w780" + this.props.film.poster_path;
//     let year = new Date(this.props.film.release_date).getFullYear();
//     return (
//         <div onClick={this.props.onDetailsClick} className="film-row">
//           <FilmPoster film={this.props.film} />
//
//           <div className="film-summary">
//             <h2>{this.props.film.title}</h2>
//             <p>{year}</p>
//           </div>
//           <Fave isFave={this.props.isFave} onFaveToggle={this.props.onFaveToggle}/>
//         </div>
//
//     )
//   }
// }


function FilmRow(props) {

// const FilmRow = props => {
   let year = new Date(props.film.release_date).getFullYear();
   return (
   <div onClick={props.onDetailsClick} className="film-row">
     <FilmPoster film={props.film} />

     <div className="film-summary">
       <h2>{props.film.title}</h2>
       <p>{year}</p>
     </div>
     <Fave isFave={props.isFave} onFaveToggle={props.onFaveToggle}/>
   </div>
 )
}

export default FilmRow
