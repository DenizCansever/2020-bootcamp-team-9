import axios from "axios";

const api_url = "https://eterationmovies.azurewebsites.net/api";
const popularMoviesUrl = `${api_url}/movies/popular`;
const searchUrl = `${api_url}/movie/search`;

export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(popularMoviesUrl, {
      params: {
        page: "1",
        limit: "15",
      },
    });
    
    return response.data;
  } catch (error) {}
};

export const fetchMovieDetail = async (id) => {
    try {
      const response = await axios.get(
        `https://eterationmovies.azurewebsites.net/api/movie/${id}`
      );
      return response.data;
    } catch (error) {}
  };


  export const searchMovieByName = async (movie_name) => {
    try {
      const response = await axios.get(
        `https://eterationmovies.azurewebsites.net/api/movie/search?query=${movie_name}`
      );
      return response.data;
    } catch (error) {}
  };



