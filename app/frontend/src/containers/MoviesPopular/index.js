import React, { useState, useEffect } from "react";
import { fetchPopularMovies } from "../../service/index";
import Spinner from "../../components/layout/Spinner";
import Movies from "../Movies";

const MoviesPopular = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setIsLoading(true);
      setPopularMovies(await fetchPopularMovies());
      setIsLoading(false);
    };
    fetchAPI();
  }, []);

  return isLoading ? <Spinner /> : <Movies movies={popularMovies} />;
};

export default MoviesPopular;
