import React from 'react';

let MovieListEntry = ({movie, toggle, stateToggle}) => (
  <div className='movie'>
    {movie.title}
  <button className='watchToggle' onClick={toggle}>{stateToggle ? 'Watch':'Watched'}</button>
  </div>
)

export default MovieListEntry