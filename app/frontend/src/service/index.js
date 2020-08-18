import axios from "axios";

const api_url = "https://eterationmovies.azurewebsites.net/api";
const popularMoviesUrl = `${api_url}/movies/popular`;
const movieDetailUrl = `${api_url}/movie`;

const url = "https://api.themoviedb.org/3";
const apiKey = "b8ef934e87ae47062fab2851217feb67";
const nowPlayingUrl = `${url}/movie/now_playing`;
const topratedUrl = `${url}/movie/top_rated`;
const movieUrl = `${url}/movie`;
const genreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;
const searchMovieUrl = `${url}/search/movie`;

export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(popularMoviesUrl, {
      params: {
        page: "1",
        limit: "15",
      },
    });

    const modifiedData = response["data"].map((m) => ({
      id: m.ids.trakt,
      title: m["title"],
      year: m["year"],
      movieClearArtImage: m["movieClearArtImage"],
      moviePosterImage: m["moviePosterImage"],
    }));

    return modifiedData;
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
  







export const fetchGenre = async () => {
  try {
    const { data } = await axios.get(genreUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
      },
    });
    const modifiedData = data["genres"].map((g) => ({
      id: g["id"],
      name: g["name"],
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchMovieByGenre = async (genre_id) => {
  try {
    const { data } = await axios.get(moviesUrl, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        with_genres: genre_id,
      },
    });
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularith"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchPersons = async () => {
  try {
    const { data } = await axios.get(personUrl, {
      params: {
        api_key: apiKey,
      },
    });
    const modifiedData = data["results"].map((p) => ({
      id: p["id"],
      popularity: p["popularity"],
      name: p["name"],
      profileImg: "https://image.tmdb.org/t/p/w200" + p["profile_path"],
      known: p["known_for_department"],
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchMovieVideos = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/videos`, {
      params: {
        api_key: apiKey,
      },
    });
    return data["results"][0];
  } catch (error) {}
};

export const fetchCasts = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/credits`, {
      params: {
        api_key: apiKey,
      },
    });
    const modifiedData = data["cast"].map((c) => ({
      id: c["cast_id"],
      character: c["character"],
      name: c["name"],
      img: "https://image.tmdb.org/t/p/w200" + c["profile_path"],
    }));

    return modifiedData;
  } catch (error) {}
};

export const searchMovie = async (value) => {
  try {
    const { data } = await axios.get(`${searchMovieUrl}`, {
      params: {
        api_key: apiKey,
        language: "en_US",
        page: 1,
        query: value,
      },
    });
    return data["results"][0];
  } catch (error) {}
};
