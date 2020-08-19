import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import {GlobalContext} from "../layout/GlobalState";

const SectionHero = ({
  title,
  year,
  runtime,
  genres,
  overview,
  backgroundImage,
  cast,
  tagline,
  rating,
  votes,
}) => {
  const { addMovieToWatchlist } = useContext(GlobalContext);
  //let image=backgroundImage == null? "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2012/11/movie_theater_interior_a_l.jpg" : backgroundImage;
  

  return (
    <section className="section-hero">
      <div
        className="container-hero"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="image-hero">
          <div className="content-info">
            <h1 style={{ fontSize: "30px", color: "#FFF" }}>{title}</h1>
            <span style={{ fontSize: "14px", color: "#a3a3a3" }}>
              {year + "  |  "}
            </span>
            <span style={{ fontSize: "14px", color: "#a3a3a3" }}>
              {runtime + " minute" + "  |  "}
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
              {tagline}
            </p>
            <p> </p>
            <p
              style={{
                fontSize: "15px",
                color: "#FFF",
              }}
            >
              {overview}
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
                {"  " + rating}
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
                {"  " + votes}
              </span>
            </div>
            <p></p>
            <Button
              className="btn-addlist"
              variant="primary"
              size="lg"
              onClick={() => addMovieToWatchlist()}
            >
              ADD LIST
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
