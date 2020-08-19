import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import StickyBox from "react-sticky-box";

import Card from "../../components/layout/Card";

import "../../theme/_cards.scss";
import "../../theme/_sidebar.scss";
import "../../theme/_footer.scss";

import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

function Results(props) {
  const movies = props.location.state.results;
  return (
    <>
      <div className="container-fluid wrapper-content">
        <div className="row">
          <div className="col-md-9" id="sidebar-wrapper">
            <section className="cards">
              {movies.slice(0, 20).map((item, index) => (
                <Card item={item} index={index}></Card>
              ))}
            </section>
          </div>
        </div>
        <StickyBox>
          <div className="sidenav">
            <Link to="/movies/trending">Trending</Link>
            <Link to="/movies/popular">Popular</Link>
          </div>
        </StickyBox>
        <div className="push"></div>
      </div>
    </>
  );
}

export default Results;
