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
  
  export const getWatchedMoviesByUser = async () => {
    try {
      let userId=localStorage.getItem('userId');

      console.log(userId)

      const response = await axios.get(
        `${api_url}/user/${userId}/watched`
      );

      console.log(response)
    } catch (error) {

      console.log(error)
    }
  };


  export const addUser = async (id,email) => {
    try {
      const response = await axios.post(
        `${api_url}/user`, {name:email, id:id }
      );

      console.log(response)
    } catch (error) {

      console.log(error)
    }
  };




  export const searchMovieByName = async (movie_name) => {
    try {
      const response = await axios.get(
        `https://eterationmovies.azurewebsites.net/api/movie/search?query=${movie_name}`
      );
      return response.data;
    } catch (error) {}
  };



