import React from "react";

function MovieCard(movie: any) {
  const ImageBaseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="inline-block m-2 md:3 cursor-pointer group hover:opacity-80">
      <img
        src={ImageBaseUrl + movie.movie.backdrop_path}
        alt={movie.movie.original_title}
        className="w-[230px] md:w-[370px] object-cover rounded-3xl group-hover:border-[5px] border-gray-400 p-2 transition-all duration-300 ease-in-out 
        
        "
      />
      <h2 className="text-gray-400 mt-2 text-[12px] md:text-[15px] font-bold">
        {movie.movie.id % 2 == 0 ? "Watch Movie" : "Start Watching"}
      </h2>
      <h2 className="text-white mt-1 transition-all md:text-[18px] group-hover:font-bold">
        {movie.movie.original_title}
      </h2>
    </div>
  );
}

export default MovieCard;
