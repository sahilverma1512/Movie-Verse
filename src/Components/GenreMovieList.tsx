import React from "react";
import GenresList from "./../Constant/GenresList";
import { IoChevronForwardSharp } from "react-icons/io5";
import MovieList from "./MovieList";
function GenreMovieList() {
  return (
    <div className="p-5 px-10 md:px-20">
      {GenresList.genere.map(
        (item: any, index) =>
          index <= 4 && (
            <div className="">
              <h2 className="text-white text-[23px] font-bold">
                {item.name}
                <span className="font-medium text-[16px] cursor-pointer text-gray-400 float-right flex ">
                  View All <IoChevronForwardSharp className="text-gray-400 ml-1 mt-[5px] " />
                </span>
              </h2>
              <MovieList genreId={item.id} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
