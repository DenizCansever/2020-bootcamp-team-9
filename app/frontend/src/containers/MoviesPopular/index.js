import React, { useState, useEffect } from "react";
import { fetchPopularMovies } from "../../service/index";
import Movies from "../Movies";

const MoviesPopular = () => {

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setPopularMovies(await fetchPopularMovies());
    };
    fetchAPI();
  }, []);

  return (
     <Movies movies={popularMovies}/>
  )
}

export default MoviesPopular;
