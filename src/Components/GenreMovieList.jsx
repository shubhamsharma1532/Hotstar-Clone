import React from "react";
import GenreList from "../Constant/GenreList";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <div className="select-none">
      {GenreList.genere.map((item, index) => index<5&& (
        <div key={index} className="p-8 px-8 md:px-16">
          <h1 className="font-bold text-[20px] " key={index}>
            {item.name}
          </h1>
          <MovieList genreId={item.id}/>
        </div>
      ))}
    </div>
  );
};

export default GenreMovieList;
