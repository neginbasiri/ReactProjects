import React from 'react';

const MovieCard = (props) => {
  return (
    <a className="db center mw5 dark-gray link dim"
      href="#">

    <img className="db br2"
      alt="{props.movie.title} Poster"
      src={props.movie.poster_url}
    />

    <dl className="mt2 f6 lh-copy">
      <dt className="clip">Title</dt>
      <dd className="ml0 fw5">{props.movie.title}</dd>
    </dl>
    </a>
  );
};

export default MovieCard;
