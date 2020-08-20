import React, { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../service/index";
import Movies from "../Movies";

const MoviesTrending = () => {

  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
        setTrendingMovies(await fetchTrendingMovies());
    };
    fetchAPI();
  }, []);

  return (
     <Movies movies={trendingMovies}/>
  )
}

export default MoviesTrending;
