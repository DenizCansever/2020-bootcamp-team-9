import React, { Component } from "react";
import { Button } from "react-bootstrap";

export class SectionHero extends Component {
  render() {
    var {
      title,
      year,
      runTime,
      genres,
      overview,
      backgroundImage,
      cast,
      tagline,
      rating,
      votes,
    } = this.props;
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
              <span style={{ fontSize: "15px", color: "#a3a3a3" }}>
                {year + "  |  "}
              </span>
              <span style={{ fontSize: "15px", color: "#a3a3a3" }}>
                {runTime + "  |  "}
              </span>
              <span
                style={{
                  fontSize: "15px",
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
                  fontSize: "16px",
                  color: "#FFF",
                }}
              >
                {overview}
              </p>
              <div>
                <span style={{ fontSize: "17px", color: "#a3a3a3" }}>
                  Starring:
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    color: "#FFF",
                    textTransform: "capitalize",
                  }}
                >
                  {"  " + cast}
                </span>
              </div>
              <p></p>
              <div>
                <span style={{ fontSize: "17px", color: "#a3a3a3" }}>
                  Rating:
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    color: "#FFF",
                  }}
                >
                  {"  " + rating}
                </span>
                <span
                  style={{
                    fontSize: "17px",
                    color: "#a3a3a3",
                    paddingLeft: "15px",
                  }}
                >
                  Votes:
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    color: "#FFF",
                  }}
                >
                  {"  " + votes}
                </span>
              </div>
              <p></p>
              <Button className="btn-addlist" variant="primary" size="lg">
                ADD LIST
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionHero;
