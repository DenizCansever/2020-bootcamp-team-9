import React, { useState, useEffect } from "react";

import { fetchMovieDetail, fetchPopularMovies } from "../../service";
import SectionHero from "../../components/layout/SectionHero";
import Spinner from "../../components/layout/Spinner";

import { Row, Col } from "react-bootstrap";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

function MovieDetail({ match }) {
  let params = match.params;
  let genres = [];
  let cast = [];
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetail, setMovieDetail] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setIsLoading(true);
      setMovieDetail(await fetchMovieDetail(params.id));
      setPopularMovies(await fetchPopularMovies());
      setIsLoading(false);
    };
    fetchAPI();
  }, [params.id]);

  genres = movieDetail.genres;
  cast = movieDetail.people;

  // Get genres
  let genresList;
  if (genres) {
    genresList = genres.map((genre, i) => {
      return (
        <li className="list-inline-item" key={i}>
          {genre}
        </li>
      );
    });
  }

  // Get casts
  let castList;
  if (cast) {
    castList = cast.slice(0, 5).map((c, i) => {
      return (
        <li className="list-inline-item" key={i}>
          {c.person.name + ","}
        </li>
      );
    });
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <Row>
      <Col className="movie-content">
        <SectionHero movie={movieDetail} genres={genresList} cast={castList} />
      </Col>
    </Row>
  );
}

export default MovieDetail;
