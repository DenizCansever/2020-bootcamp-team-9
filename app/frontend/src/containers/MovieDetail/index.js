import React, { useState, useEffect } from "react";

import { fetchMovieDetail } from "../../service";
import SectionHero from "../../components/layout/SectionHero";
//import SectionMoreDetails from "../../components/layout/SectionMoreDetails";

import { Row, Col } from "react-bootstrap";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

function MovieDetail({ match }) {
  let params = match.params;
  let genres = [];
  let cast = [];
  const [detail, setMovieDetail] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setMovieDetail(await fetchMovieDetail(params.id));
    };
    fetchAPI();
  }, [params.id]);

  genres = detail.genres;
  cast = detail.people;

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
          {/* {c.person.name + " as " + c.character} */}
          {/* {c.person.name + " (" + c.character + ")" + ","} */}
          {c.person.name + ","}
        </li>
      );
    });
  }

  return (
    <Row>
      <Col className="movie-content">
        <SectionHero
          title={detail.title}
          year={detail.year}
          runtime={detail.runtime}
          genres={genresList}
          tagline={detail.tagline}
          overview={detail.overview}
          backgroundImage={detail.movieClearArtImage}
          rating={detail.rating}
          votes={detail.votes}
          cast={castList}
        />
        {/* <SectionMoreDetails
          genres={genresList}
          overview={detail.overview}
          tagline={detail.tagline}
          released={detail.released}
          rating={detail.rating}
          votes={detail.votes}
          cast={castList}
        /> */}
      </Col>
    </Row>
  );
}

export default MovieDetail;
