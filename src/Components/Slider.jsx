import React, { useEffect, useRef, useState } from "react";
import GlobalAPI from "../Services/GlobalAPI";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalAPI.getTrending()
      .then((resp) => {
        // console.log(resp.data.results);
        setMovieList(resp.data.results);
      })
      .catch((err) => {
        console.error("Error fetching trending movies:", err);
      });
  };

  const sliderRight = (element) => {
    element.scrollLeft += 1428;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= 1428;
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[270px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[270px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 hide-scrollbar shadow-2xl shadow-black scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full md:h-[540px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 shadow-2xl transition-all duration-100 ease-in"
            alt={item.title || "Movie"}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
