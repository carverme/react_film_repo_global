import React, {Component} from 'react';

class Fave extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isFave: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.stopPropagation()
    console.log('handling Fave click!')
    this.setState({
      isFave: !this.state.isFave
    })
  }

  render() {
    const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
    const classList = `film-row-fave ${isFave}`
    return (
      <div className={classList}>
        <p onClick={(e) => this.handleClick(e)} className="material-icons">{isFave}</p>
      </div>
    )
  }
}

export default Fave
