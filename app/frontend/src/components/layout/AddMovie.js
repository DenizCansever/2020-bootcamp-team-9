import React, { useState, useEffect } from "react";
import { fetchPopularMovies } from "../../service/index";

import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

function AddMovie() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setPopularMovies(await fetchPopularMovies());
    };

    fetchAPI();
  }, []);

  console.log("hiiii", popularMovies.ids);

  const movies = popularMovies.slice(0, 5).map((item, index) => {
    return (
      <>
        <div>{item.title}</div>
        <div>{item.year}</div>
        <div>{item.movieClearArtImage}</div>
        <div>{item.moviePosterImage}</div>
      </>
    );
  });

  return <>{movies}</>;
}

export default AddMovie;
