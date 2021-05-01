import React from 'react';
import './Search.css';
const Search = ({ setNameSearch  }) => {
    return (
      <div>
        <div className='search-container'>
          <label> <b>Search:</b> </label>
          <input
            type='text'
            placeholder='search movie'
            onChange={(e) => setNameSearch(e.target.value)}
          />
         
        </div>
      </div>
    );
  };
  
  export default Search;
  