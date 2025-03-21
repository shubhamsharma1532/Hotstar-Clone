import React, { useEffect, useState, useRef } from "react";
import GlobalAPI from "../Services/GlobalAPI";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const MovieList = ({ genreId }) => {
  useEffect(() => {
    getData();
  }, []);

  const eleRef = useRef(null);
  const [movies, setMovies] = useState([]);

  const getData = () => {
    GlobalAPI.getMovieByGenreId(genreId).then((res) =>
      setMovies(res.data.results)
    );
  };

  const slideLeft = (ele) => {
    if (ele) {
      ele.scrollLeft -= 220;
    }
  };

  const slideRight = (ele) => {
    if (ele) {
      ele.scrollLeft += 220;
    }
  };

  return (
    <div className="relative">
      <HiChevronLeft
        className="absolute text-[60px] text-white p-2 z-10 cursor-pointer hidden md:block mt-[150px] left-5"
        onClick={() => slideLeft(eleRef.current)} 
      />

      <div
        ref={eleRef}
        className="flex gap-5 overflow-x-auto scroll-smooth pt-5 px-5 pb-6 hide-scrollbar"
      >
        {movies.map((item, index) => (
          <MovieCard key={index} movie={item} />
        ))}
      </div>

      <HiChevronRight
        className="absolute text-[60px] text-white p-2 z-10 cursor-pointer hidden md:block top-0 mt-[150px] right-5"
        onClick={() => slideRight(eleRef.current)} 
      />
    </div>
  );
};

export default MovieList;
