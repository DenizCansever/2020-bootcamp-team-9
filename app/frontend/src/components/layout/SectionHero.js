import React, { Component } from "react";
import { Button } from "react-bootstrap";

export class SectionHero extends Component {
  
  render() {
    var { title, year, runTime, genres, overview, backgroundImage } = this.props;
    return (
      <section className="section-hero">
        <div
          className="container-hero"
          style={{ backgroundImage: `url(${(backgroundImage)})` }}
        >
          <div className="image-hero">
            <div className="content-info">
              <h1>{title}</h1>
              <span>{year + "  | "} </span>
              {/* <span>{runTime + "  |  "}</span> */}
              <span>{genres}</span>
              <p>{overview}</p>
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
