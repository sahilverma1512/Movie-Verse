import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
function MovieList({ genreId }: { genreId: any }) {
  // Updated props type
  const elementRef = useRef(null);
  const [movieList, setMovieList] = useState<any>([]);

  useEffect(() => {
    getMovieListByGenreId();
  }, []);


  const slideRight = (element:any)=>{
    element.scrollLeft += 500;
  }

  const slideLeft = (element:any)=>{
    element.scrollLeft -= 500;
  }

  const getMovieListByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp: any) => {
      console.log(resp.data.results);
      // Filter movies that have original_language === 'en'
      const filteredMovies = resp.data.results.filter(
        (movie: any) => movie.original_language === "en"
      );
      setMovieList(filteredMovies);
    });
  };

  return (
    <div className="flex items-center">
        <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} className="text-[40px] text-white bg-black p-2 cursor-pointer mb-[100px] rounded-full z-10" />
      <div className="w-full overflow-scroll scroll-smooth overflow-x-auto whitespace-nowrap scrollbar-hide mb-14 ml-[-30px] mr-[-20px] " ref={elementRef}>
        {movieList.map(
          (item: any, index) =>
            index < 7 && ( // Ensure you show only 8 items
              <MovieCard movie={item} />
            )
        )}
      </div>
      <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)} className="text-[40px] text-white bg-black mb-[100px] p-2 cursor-pointer rounded-full z-10"/>
    </div>
  );
}

export default MovieList;
