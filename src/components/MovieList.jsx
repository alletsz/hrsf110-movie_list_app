import React from 'react';
import MovieListEntry from './MovieListEntry'

let MovieList = ({movies, watchedMovieAdder}) => (
  <div>
    {movies.map((movie, key) =>  
    <MovieListEntry movie ={movie} key={key} watchedMovieAdder={watchedMovieAdder}/>)}
  </div>
)

export default MovieList


