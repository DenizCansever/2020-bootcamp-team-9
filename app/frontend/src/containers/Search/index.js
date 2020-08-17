import React, {useState, useEffect} from "react";
import {searchMovie} from "../../service/index";

export const Search = ({ match }) => {
  let params = match.params;
  const [query, setQuery] = useState([]);
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
        setMovies(await searchMovie(params.id));
    };
    fetchAPI();
  }, [params.id]);

  const onChange = (e) => {
      e.preventDefault();
      console.log(movie)
      setQuery(e.target.value);
  }

  return (
    <div>
      <input type="text" placeholder="Search for a movie" value={query} onChange={onChange}/>
    </div>
  );
};
