import React from 'react';
import ReactDOM from 'react-dom'

class MovieListEntry extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      watchStatus: 'Watch',
    }
    this.watched = this.watched.bind(this)
  }
  watched(e){
    if(this.state.watchStatus === 'Watch'){
      this.setState({watchStatus: 'Watched'})
    }
    if(this.state.watchStatus === 'Watched'){
      this.setState({watchStatus: 'Watch'})
    }
  }
  render(){
    return(
      <div onClick={this.watched}>
      <div className='movie' onClick = {() => {this.props.watchedMovieAdder({title:this.props.movie.title})}}>
        {this.props.movie.title}
      <button className='watchToggle'>{this.state.watchStatus}</button>
     </div>
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