import axios from "axios";

const MovieBaseUrl="https://api.themoviedb.org/3/movie";
const movieByGenreBaseURL ="https://api.themoviedb.org/3/discover/movie?api_key=1463ba41037f780fe66a35aace4be733";

const api_key = "1463ba41037f780fe66a35aace4be733";

const getPopularMovies = axios.get(MovieBaseUrl + "/popular?api_key="+api_key);

const getMovieByGenreId = (id:number) => axios.get(movieByGenreBaseURL + "&with_genres="+id);

export default{
    getPopularMovies,
    getMovieByGenreId
}