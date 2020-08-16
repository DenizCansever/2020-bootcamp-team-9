import React, { useState, useEffect } from "react";
import { fetchMovies, fetchGenre, fetchMovieByGenre } from "../../service/index";

import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import StickyBox from "react-sticky-box";

import Card from '../../components/layout/Card';
import Footer from '../../components/layout/Footer';
import Pagination from '../../components/layout/Pagination';

import '../../theme/_cards.scss';
import '../../theme/_sidebar.scss';

function Movies() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies());
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre(28));
    };

    fetchAPI();
  }, []);

  const movies = nowPlaying.slice(0, 5).map((item, index) => {
    return (
      <div style={{ height: 500, width: "100%" }} key={index}>
        <div className="carousel-center">
          <img style={{ height: 600 }} src={item.backPoster} alt={item.title} />
        </div>
        <div className="carousel-center">
          <i
            className="far fa-play-circle"
            style={{ fontSize: 95, color: "#f4c10f" }}
          ></i>
        </div>
        <div
          className="carousel-caption"
          style={{ textAlign: "center", fontSize: 35 }}
        >
          {item.title}
        </div>
      </div>
    );
  });

  // Get current posts
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const movieList = movieByGenre.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = (currentPage) => setCurrentPage(currentPage + 1);
  const prevPage = (currentPage) => setCurrentPage(currentPage - 1);

  return (
      <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9">
          <RBCarousel
            autoplay={true}
            pauseOnVisibility={true}
            slidesshowSpeed={5000}
            version={4}
            indicators={false}
          >
            {movies}
          </RBCarousel>
        </div>
      </div>

      <div className="row">
        <div className="col-md-9" id="sidebar-wrapper">
          <section className="cards">
            {movieList.map((item, index) => (
              <Card item={item}></Card>
            ))}
          </section>
        </div>
      </div>

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={movieByGenre.length}
        paginate={paginate}
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />

      <StickyBox>
        <div className="sidenav">
          <a href="#">Trending</a>
          <a href="#">Popular</a>
        </div>
      </StickyBox>
    </div>

    <Footer/>
    </>
  );
}

export default Movies;
