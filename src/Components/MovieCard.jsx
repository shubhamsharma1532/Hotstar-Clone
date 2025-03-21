import React from 'react';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  return (
    <div className="flex-shrink-0 hover:scale-110 hover:border-[3px] border-gray-500 transition-all duration-200 ease-in-out">
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        alt={movie.title || "Movie Poster"}
        className="w-[100px] h-auto md:w-[200px] rounded-md"
      />
    </div>
  );
};

export default MovieCard;
