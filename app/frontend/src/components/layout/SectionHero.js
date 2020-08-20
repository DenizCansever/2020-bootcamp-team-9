import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { addWatchedMovies, addWatchMovies } from "../../service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SectionHero = ({ movie, genres, cast }) => {
  const addWatchedMoviesList = (movie) => {
    addWatchedMovies(movie);

    toast("Movie Added to Watched List", {
      appearance: 'success',
      autoDismiss: true,
      position: "top-center",
      closeButton: false,
    })
  };

  const addMoviesList = (movie) => {

    addWatchMovies(movie);

    toast("Movie Added to Watchlist", {
      appearance: 'success',
      autoDismiss: true,
      position: "top-center",
      closeButton: false,

    })
  };

  function openInNewTab(url) {
    window.open(url, "_blank");
  }

  return (

    <section className="section-hero">
      <div
        className="container-hero"
        style={{
          backgroundImage: `url(${movie.movieClearArtImage})`,
        }}
      >
        <ToastContainer />
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

              <span
                style={{
                  fontSize: "15px",
                  color: "#a3a3a3",
                  paddingLeft: "15px",
                }}
              >
                {/* <a
                  href=""
                  onClick={() => openInNewTab(movie.homepage)}
                  style={{ color: "#a3a3a3" }}
                >
                  Find Where To Watch
                </a> */}
              </span>
            </div>
            <p></p>
            <div>
              <span>
                <Button
                  className="btn-addlist"
                  variant="primary"
                  onClick={() => addWatchedMoviesList(movie)}
                >
                  ADD WATCHED LIST
                </Button>
              </span>
              <span
                style={{
                  paddingLeft: "15px",
                }}
              >
                <Button
                  className="btn-addlist"
                  variant="primary"
                  onClick={() => addMoviesList(movie)}
                >
                  ADD LIST
                </Button>
              </span>
            </div>
            <p></p>
            <div>
              <span>
                <Button
                  className="btn-addlist"
                  variant="primary"
                  onClick={() => openInNewTab(movie.homepage)}
                >
                  WATCH NOW
                </Button>
              </span>
              <span
                style={{
                  paddingLeft: "15px",
                }}
              >
                <Button
                  className="btn-addlist"
                  variant="primary"
                  onClick={() => openInNewTab(movie.trailer)}
                >
                  TRAILER
                </Button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
