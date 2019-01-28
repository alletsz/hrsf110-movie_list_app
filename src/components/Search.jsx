import React from 'react';

let Search =({handleSubmit, handleSearchChange}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Search...' onChange={handleSearchChange}/>
      <input type='submit' value='Submit'/>
    </form>
  </div>
)

export default Search

