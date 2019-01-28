import React from 'react';
import ReactDOM from 'react-dom'

class MovieListEntry extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      watchStatus: 'Watch'
    }
  }
  render(){
    return(
      <div className='movie'>
        {this.props.movie.title}
      <button className='watchToggle'>yay</button>
     </div>
    )
  }
}


// let MovieListEntry = ({movie, toggle, stateToggle}) => (
//   <div className='movie'>
//     {movie.title}
//   <button className='watchToggle' onClick={toggle}>{stateToggle ? 'Watch':'Watched'}</button>
//   </div>
// )

export default MovieListEntry