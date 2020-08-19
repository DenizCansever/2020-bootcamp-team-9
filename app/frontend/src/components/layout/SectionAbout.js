import React, { Component } from "react";
import aboutpage_about from "../../images/aboutpage_about.png";

export class SectionAbout extends Component {
  render() {
    return (
      <div
        className="section-about"
        style={{
          backgroundPosition: "right center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${aboutpage_about})`,
        }}
      >
        <div className="content-about">
          <h1
            style={{
              textShadow: "2px 3px 10px red",
              fontFamily: "Arial Black, Gadget, sans-serif",
              fontSize: "43px",
              margin: "0px",
            }}
          >
            Let's talk about DistrictX
          </h1>
          <p></p>
          <p></p>
          <p
            style={{
              fontFamily: "Arial Black, Gadget, sans-serif",
              fontSize: "16px",
              marginTop: "45px",
            }}
          >
            DistrictX is a platform that primarily keeps track of TV shows and
            movies you watched or plan to watch in the future. There are also
            some features enable users to add TV shows and movies to their
            personal lists.
          </p>
          <p
            style={{
              fontFamily: "Arial Black, Gadget, sans-serif",
              fontSize: "16px",
            }}
          >
            DistrictX also makes it easy to reach the information related to
            movies and TV shows – including a short overview, genres, cast,
            released dates, runtime, votes and ratings.
          </p>
          <p
            style={{
              fontSize: "18px",
              fontFamily: "Georgia,times new roman,Times,serif",
              fontStyle: "italic",
              // color: "#069c9e",
              color: "red",
            }}
          >
            DistrictX is free to use!
          </p>
          <p
            style={{
              fontFamily: "Arial Black, Gadget, sans-serif",
              fontSize: "16px",
            }}
          >
            Sign up now, start managing your personal TV & movie lists, see
            what's trending and popular.
          </p>
        </div>
      </div>
    );
  }
}

export default SectionAbout;
