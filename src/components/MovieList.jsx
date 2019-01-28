import React from 'react';
import MovieListEntry from './MovieListEntry'

let MovieList = ({movies}) => (
  <div>
    {movies.map((movie, key) =>  
    <MovieListEntry movie ={movie} key={key}/>)}
  </div>
)

export default MovieList


