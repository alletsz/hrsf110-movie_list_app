import React from 'react';
import MovieListEntry from './MovieListEntry'

let MovieList = ({movies, toggle, stateToggle}) => (
  <div>
    {movies.map((movie, key) =>  
    <MovieListEntry movie ={movie} key={key} toggle={toggle} stateToggle={stateToggle}/>)}
  </div>
)

export default MovieList


