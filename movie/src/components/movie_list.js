import React from 'react';
import Fuse from 'fuse.js';
import MovieCard from './movie_card';
import SearchBar from './search_bar';

const MovieList = (props) => {

  const movieCards = props.movies.map((movie) => {
    return <MovieCard key={movie.id} movie={movie}/>
  });


  function moviesFuzzyFilterByTitle(searchKeyword) {
    let searchOptions = {
      keys: ['title']
    };

    let fuse = new Fuse(props.movies, searchOptions);

    console.log(fuse.search(searchKeyword));
  }

  return (
    <div>
      <SearchBar onSearchKeywordChange={searchKeyword => moviesFuzzyFilterByTitle(searchKeyword)}/>
      <article>{movieCards}</article>
    </div>
  );
};

export default MovieList;
