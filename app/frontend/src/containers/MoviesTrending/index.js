import React, { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../service/index";
import Spinner from "../../components/layout/Spinner";
import Movies from "../Movies";

const MoviesTrending = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setIsLoading(true);
      setTrendingMovies(await fetchTrendingMovies());
      setIsLoading(false);
    };
    fetchAPI();
  }, []);

  return isLoading ? <Spinner /> : <Movies movies={trendingMovies} />;
};

export default MoviesTrending;
