import React from 'react';
import MovieList from './MovieList';
import Search from './Search';
import AddMovies from './AddMovies'
import MovieListEntry from './MovieListEntry';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movies: props.movies,
      userAddedMovies:'',
      search: '',
      newMovie:'',
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
      } else {
        alert('Movie not here!')
      }
    });
    
  }
  handleSearchChange(e){
    this.setState({search: e.target.value})
  }
  
  handleAddMoviesSubmit(event){
    event.preventDefault();
    var newMovie = [{title:this.state.newMovie}];
    console.log(newMovie);
  }

  handleAddMovies(e){
    this.setState({newMovie: e.target.value})
  }
  render() {
    return (
      <div>
        <h1>Movie List App</h1> 
          <AddMovies handleAddMoviesSubmit={this.handleAddMoviesSubmit.bind(this)} handleAddMovies={this.handleAddMovies.bind(this)} />
          <Search handleSubmit={this.handleSubmit.bind(this)} handleSearchChange={this.handleSearchChange.bind(this)}/>
          <MovieList movies={this.state.movies} />
      </div>
    )
  }
}

export default App