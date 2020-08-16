import React from "react";
import SectionHero from "../../components/layout/SectionHero";
import SectionMoreDetails from "../../components/layout/SectionMoreDetails";
import moviedata from "../../data/moviedata.json";
import { Row, Col } from "react-bootstrap";

function MovieContent(props) {
  return (
    <div>
      <Row>
        <Col className="movie-content">
          {moviedata.map((moviedata, i) => (
            <SectionHero
              title={moviedata.title}
              year={moviedata.year}
              runTime={moviedata.runTime}
              genres={moviedata.genres}
              overview={moviedata.overview}
            />
          ))}
          {moviedata.map((moviedata, i) => (
            <SectionMoreDetails
              genres={moviedata.genres}
              overview={moviedata.overview}
              director={moviedata.director}
              tagline={moviedata.tagline}
              released={moviedata.released}
              rating={moviedata.rating}
              released={moviedata.released}
              country={moviedata.country}
              votes={moviedata.votes}
            />
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default MovieContent;
