import React from 'react';

let AddMovies = ({handleAddMoviesSubmit, handleAddMovies}) => (
  <div>
    <form onSubmit={handleAddMoviesSubmit}>
      <input type='text' placeholder='Add movie title here' onChange={handleAddMovies}/>
      <input type='submit' value='Add'/>
    </form>
  </div>
)

export default AddMovies