import React, { useState, useEffect } from "react";

import { fetchMovieDetail, fetchCasts } from "../../service";
import SectionHero from "../../components/layout/SectionHero";
//import SectionMoreDetails from "../../components/layout/SectionMoreDetails";

import { Row, Col } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

function MovieDetail({ match }) {
  let params = match.params;
  let genres = [];
  let cast = [];
  const [casts, setCasts] = useState([]);
  const [detail, setMovieDetail] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCasts(await fetchCasts(params.id));
      setMovieDetail(await fetchMovieDetail(params.id));
    };
    fetchAPI();
  }, [params.id]);

  console.log("moviiee", detail);

  genres = detail.genres;
  cast = detail.people;
  console.log(cast);

  //  const castList = cast.slice(0, 4).map((c, i) => {
  //    return (
  //      <div className="col-md-3 text-center" key={i}>
  //        <div>{c.character}</div>
  //      </div>
  //    );
  //  });

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

  return (
    <Row>
      <Col className="movie-content">
        <SectionHero
          title={detail.title}
          year={detail.year}
          genres={genresList}
          tagline={detail.tagline}
          overview={detail.overview}
          backgroundImage={detail.movieClearArtImage}
          rating={detail.rating}
          votes={detail.votes}
          cast={"cast"}
        />
        {/* <SectionMoreDetails
          genres={genresList}
          overview={detail.overview}
          tagline={detail.tagline}
          released={detail.released}
          rating={detail.rating}
          votes={detail.votes}
          cast={"cast"}
        /> */}
      </Col>
      {/* {castList} */}
    </Row>
  );
}

export default MovieDetail;
