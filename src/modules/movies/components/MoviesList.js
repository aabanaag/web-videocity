import React from 'react';
import Tile from '../../../components/Tile';

const MoviesList = ({movies}) => {
  const renderMovies = () => {
    return movies.map(movie => (
      <Tile
        key={movie._id}
        title={movie.title}
        year={movie.year}
        status={movie.status}
        img={movie.img}
        id={movie._id} />
    ));
  }

  return (
    <div className="movies-list-component">
      { renderMovies() }
    </div>
  )
}

export default MoviesList;