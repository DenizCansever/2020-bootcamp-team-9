import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import Movies from "../../containers/Movies";
import { addWatchedMoviesByUser, getWatchedMoviesByUser } from "../../service";

const SectionHero = ({ movie, genres, cast }) => {
  const addMovieToWatchlist = (movie) => {
    //console.log(movie)

    addWatchedMoviesByUser(movie);
  };

  function openInNewTab(url) {
    var win = window.open(url, "_blank");
  }

  return (
    <section className="section-hero">
      <div
        className="container-hero"
        style={{
          backgroundImage: `url(${movie.movieClearArtImage})`,
        }}
      >
        <div className="image-hero">
          <div className="content-info">
            <h1 style={{ fontSize: "30px", color: "#FFF" }}>{movie.title}</h1>
            <span style={{ fontSize: "14px", color: "#a3a3a3" }}>
              {movie.year + "  |  "}
            </span>
            <span style={{ fontSize: "14px", color: "#a3a3a3" }}>
              {movie.runtime + " minute" + "  |  "}
            </span>
            <span
              style={{
                fontSize: "14px",
                color: "#a3a3a3",
                textTransform: "capitalize",
              }}
            >
              {genres}
            </span>
            <p> </p>
            <p
              style={{
                fontSize: "17px",
                color: "#FFF",
                fontStyle: "italic",
                fontFamily: "Georgia,times new roman,Times,serif",
              }}
            >
              {movie.tagline}
            </p>
            <p> </p>
            <p
              style={{
                fontSize: "15px",
                color: "#FFF",
              }}
            >
              {movie.overview}
            </p>
            <div>
              <span style={{ fontSize: "15px", color: "#a3a3a3" }}>
                Starring:
              </span>
              <span
                style={{
                  fontSize: "15px",
                  color: "#FFF",
                  // textTransform: "capitalize",
                }}
              >
                {cast}
              </span>
            </div>
            <p></p>
            <div>
              <span style={{ fontSize: "15px", color: "#a3a3a3" }}>
                Rating:
              </span>
              <span
                style={{
                  fontSize: "15px",
                  color: "#FFF",
                }}
              >
                {"  " + movie.rating}
              </span>
              <span
                style={{
                  fontSize: "15px",
                  color: "#a3a3a3",
                  paddingLeft: "15px",
                }}
              >
                Votes:
              </span>
              <span
                style={{
                  fontSize: "15px",
                  color: "#FFF",
                }}
              >
                {"  " + movie.votes}
              </span>
            </div>
            <p></p>
            <a href="" onClick={() => openInNewTab(movie.homepage)}>
              İzleyebileceğiniz Yerler
            </a>
            <p></p>
            <Button
              className="btn-addlist"
              variant="primary"
              size="lg"
              onClick={() => addMovieToWatchlist(movie)}
            >
              ADD LIST
            </Button>
            {movie.trailer}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
