import React from 'react';
import MovieList from './MovieList';
import Search from './Search';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movies: props.movies,
      currentMovie: '',
      search: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  handleSubmit(e){
    var searchMovie = this.state.search;
    var allMovies = this.state.movies;
    allMovies.forEach(movie => {
      let lowerCase = movie.title.toLowerCase()
      console.log(lowerCase)
      if(movie.title === searchMovie){
        console.log('yay')
        this.setState({movies:[movie]})
      }
    });
    event.preventDefault();
    
  }
  handleSearchChange(e){
    this.setState({search: e.target.value})
  }
  render() {
    return (
      <div>
        <h1>Movie List App</h1> 
        <Search movies={this.state.movies} handleSubmit={this.handleSubmit} handleSearchChange={this.handleSearchChange}/>
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}

export default App