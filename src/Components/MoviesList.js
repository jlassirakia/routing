
import React from 'react';
import MovieCard from './MovieCard';

const MoviesList = ({ moviesData, nameSearch }) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        {moviesData
          .filter(
            (el) =>
          
              el.name.toLowerCase().includes(nameSearch.toLowerCase().trim())
          )
          .map((el, i) => (
            <MovieCard key={i} movie={el} />
          ))}
      </div>
    );
  };
  
  export default MoviesList;
  