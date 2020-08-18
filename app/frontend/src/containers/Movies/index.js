import React, { useState, useEffect } from "react";
import { fetchPopularMovies } from "../../service/index";

import StickyBox from "react-sticky-box";
import RBCarousel from "react-bootstrap-carousel";

import Card from "../../components/layout/Card";
import Footer from "../../components/layout/Footer";
import Pagination from "../../components/layout/Pagination";
import { Search } from "../Search";

import "../../theme/_cards.scss";
import "../../theme/_sidebar.scss";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from "react-router-dom";
import Spinner from "../../components/layout/Spinner";
import Loader from 'react-loader-spinner'


const Movies = (e) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [query, setQuery] = useState([]);

  // Sonradan Eklenenler
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      //Sonradan Eklenenler
      setIsLoading(true);
      setPopularMovies(await fetchPopularMovies());
      setIsLoading(false);
    };

    fetchAPI();
  }, []);

  const sliderPopularMovies = popularMovies.slice(0, 5).map((item, index) => {
    return (
      <div style={{ height: 500, width: "100%" }} key={index}>
        <div className="carousel-center">
          <img
            style={{ height: 500 }}
            src={item.movieClearArtImage}
            alt={item.title}
          />
        </div>
        <div className="carousel-center">
          <i
            className="far fa-play-circle"
            style={{ fontSize: 95, color: "#f4c10f" }}
          ></i>
        </div>
        {/* Slider'a yazı ekleyip kaldırabilirsin */}
        {/* <div
          className="carousel-caption"
          style={{ textAlign: "center", fontSize: 35 }}
        >
          {item.title}
        </div> */}
      </div>
    );
  });

  // Get current posts
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const movieList = popularMovies.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = (currentPage) => setCurrentPage(currentPage + 1);
  const prevPage = (currentPage) => setCurrentPage(currentPage - 1);

  return isLoading ? (
    <Loader
    type="Puff"
    color="#00BFFF"
    height={100}
    width={100}
    timeout={3000} //3 secs
 />
  ) : (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9" id="carousel">
            <RBCarousel
              autoplay={true}
              pauseOnVisibility={true}
              slidesshowSpeed={5000}
              version={4}
              indicators={false}
            >
              {sliderPopularMovies}
            </RBCarousel>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9" id="sidebar-wrapper">
            <section className="cards">
              {popularMovies.slice(0, 20).map((item, index) => (
                <Card item={item}></Card>
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
      </div>
      <div className="row">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={popularMovies.length}
          paginate={paginate}
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
      <Footer />
    </>
  );
};

export default Movies;
