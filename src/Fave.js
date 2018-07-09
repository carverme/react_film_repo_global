import React, {Component} from 'react';

class Fave extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.stopPropagation()
    console.log('handling Fave click!')
    this.props.onFaveToggle()
  }

  render() {
    const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'
    const classList = `film-row-fave ${isFave}`
    return (
      <div className={classList}>
        <p onClick={(e) => this.handleClick(e)} className="material-icons">{isFave}</p>
      </div>
    )
  }
}
//Refactor option....
//import React from 'react';
// const Fave = props => {
//   function handleClick(e) {
//     e.stopPropagation()
//     console.log("Handling these clicks!")
//     props.onFaveToggle()
//   }
//   const isFave = (props.isFave) ? 'remove_from_queue' : 'add_to_queue'
//   const classList = `film-row-fave ${isFave}`
//   return (
//     <div className={classList}>
//       <p onClick={handleClick} className="material-icons">{isFave}</p>
//     </div>
//   )
//   }



//}





export default Fave
