import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function Hero() {
  const ImageBaseUrl = "https://image.tmdb.org/t/p/original";
  const [movieList, setMovieList] = useState<any>([]);
  useEffect(() => {
    getPopularMovie();
  }, []);

  const getPopularMovie = () => {
    GlobalApi.getPopularMovies.then((resp: any) => {
      const result = resp.data.results;
      const randomNum = Math.floor(Math.random() * 10);
      setMovieList(result[randomNum]);
    });
  };

  return (
    <div>
      <div className="absolute h-[85vh] bg-gradient-to-t from-[#1e2126] via-transparent to-transparent w-full"></div>
      <div className="absolute mt-[400px] md:mt-[350px] px-10 md:px-24 ">
        <h2 className="text-white text-[19px] lg:text-[27px]">
          Watch Only On Hulu
        </h2>
        <h2 className="text-white text-[36px] lg:text-[47px] font-bold">
          {movieList.original_title}
        </h2>
        <div className="flex gap-5 mt-5">
          <button className="text-black bg-white">Play</button>
          <button className="text-white bg-transparent border-2 border-white cursor-pointer hover:border-gray-500">
            Details
          </button>
        </div>
      </div>
      <img
        src={ImageBaseUrl + movieList.backdrop_path}
        width={1920}
        height={1080}
        className="h-[85vh] object-cover"
      />
    </div>
  );
}

export default Hero;
