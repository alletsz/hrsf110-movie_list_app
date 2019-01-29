import React from 'react';
import MovieList from './MovieList';
import Search from './Search';
import AddMovies from './AddMovies'
import UserMovies from '../data/UserMovies';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movies: props.movies,
      userAddedMovies: UserMovies,
      search: '',
      newMovie:'',
      movieStatus: 'Watch',
      watchedMovies: []
    }
  }
  handleSubmit(event){
    event.preventDefault();
    var searchMovie = this.state.search;
    var allMovies = this.state.movies;
    allMovies.forEach(movie => {
      let lowerCaseMovie = movie.title.toLowerCase()
      let lowerCaseSearch = searchMovie.toLowerCase()
      if(lowerCaseMovie === lowerCaseSearch){
        console.log('yay')
        this.setState({movies:[movie]})
      } 
      // else {
      //   alert('Movie not here!')
      // }
    });
    
  }
  handleSearchChange(e){
    this.setState({search: e.target.value})
  }
  
  handleAddMoviesSubmit(event){
    event.preventDefault();
    UserMovies.push({title:this.state.newMovie});
    this.setState({movies: UserMovies})
  }

  handleAddMovies(e){
    this.setState({newMovie: e.target.value})
  }

  watchedMovieAdder(movie){
    
    this.state.watchedMovies.push(movie)
  }
  render() {
    return (
      <div>
        <h1>Movie List App</h1> 
          <AddMovies handleAddMoviesSubmit={this.handleAddMoviesSubmit.bind(this)} handleAddMovies={this.handleAddMovies.bind(this)} />
          <Search handleSubmit={this.handleSubmit.bind(this)} handleSearchChange={this.handleSearchChange.bind(this)}/>
          <MovieList movies={this.state.movies} watchedMovieAdder={this.watchedMovieAdder.bind(this)}/>
      </div>
    )
  }
}

export default App