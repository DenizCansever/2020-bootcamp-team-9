import React, { useState, useEffect } from "react";
import SectionHero from "../../components/layout/SectionHero";
import SectionMoreDetails from "../../components/layout/SectionMoreDetails";
import moviedata from "../../data/moviedata.json";
import { Row, Col } from "react-bootstrap";
import {
  fetchMovieDetail,
  fetchMovieVideos,
  fetchCasts,
  fetchSimilarMovie,
} from "../../service";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function MovieDetail({ match }) {
  let params = match.params;
  let genres = [];
  const [isOpen, setIsOpen] = useState(false);
  const [detail, setDetail] = useState([]);
  const [video, setVideo] = useState([]);
  const [casts, setCasts] = useState([]);
  const [similarMovie, setSimilarMovie] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await fetchMovieDetail(params.id));
      setCasts(await fetchCasts(params.id));
    };
    fetchAPI();
  }, [params.id]);

  genres = detail.genres;

  const castList = casts.slice(0, 4).map((c, i) => {
    return (
      <div className="col-md-3 text-center" key={i}>
        <img
          className="img-fluid rounded-circle mx-auto d-block"
          src={c.img}
          alt={c.name}
        ></img>
        <p className="font-weight-bold text-center">{c.name}</p>
        <p
          className="font-weight-light text-center"
          style={{ color: "#5a606b" }}
        >
          {c.character}
        </p>
      </div>
    );
  });

  let genresList;
  if (genres) {
    genresList = genres.map((g, i) => {
      return (
        <li className="list-inline-item" key={i}>
          <button type="button" className="btn btn-outline-info">
            {g.name}
          </button>
        </li>
      );
    });
  }

  return (

        <Row>
          <Col className="movie-content">
            <SectionHero
              title={detail.original_title}
              year={detail.release_date}
              runTime={detail.runtime}
              genres={genresList}
              overview={detail.overview}
            />
            <SectionMoreDetails
              genres={genresList}
              overview={detail.overview}
              director={"director"}
              tagline={"tagline"}
              released={detail.release_date}
              rating={detail.vote_average}
              released={detail.release_date}
              country={"country"}
              votes={detail.vote_count}
            />
          </Col>
        </Row>

  );
}

export default MovieDetail;
