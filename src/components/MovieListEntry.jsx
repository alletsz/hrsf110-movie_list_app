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
    // console.log(this.state.watchStatus)
    if(this.state.watchStatus === 'Watch'){
      this.setState({watchStatus: 'Watched'})
    }
    if(this.state.watchStatus === 'Watched'){
      this.setState({watchStatus: 'Watch'})
    }

    console.log('hi')
  }
  render(){
    return(
      <div onClick={this.watched}>
      <div className='movie'>
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