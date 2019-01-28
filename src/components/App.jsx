import React from 'react';
import movies from '../Movies'
import MovieList from './MovieList';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movies: movies,
    }
  }
  render() {
    return (
      <div>
        <h1>Movie List App</h1> 
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}

export default App