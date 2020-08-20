import React, { useState, useEffect } from "react";
import { fetchPopularMovies, fetchTrendingMovies } from "../../service/index";

import StickyBox from "react-sticky-box";
import RBCarousel from "react-bootstrap-carousel";

import Card from "../../components/layout/Card";
import Pagination from "../../components/layout/Pagination";

import "../../theme/_cards.scss";
import "../../theme/_sidebar.scss";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from "react-router-dom";
import Spinner from "../../components/layout/Spinner";
import "../../theme/_footer.scss";


const Movies = () => {
  const [state, setState] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);

  // Sonradan Eklenenler
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      //Sonradan Eklenenler
      setIsLoading(true);
      setPopularMovies(await fetchPopularMovies());
      setTrendingMovies(await fetchTrendingMovies());
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
    <Spinner/>
  ) : (
    <>
      <div className="container-fluid wrapper-content">
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
              {movieList.slice(0, 20).map((item, index) => (
                <Card item={item} key={index}></Card>
              ))}
            </section>
          </div>
        </div>
        <div className="row" id="pagination">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={popularMovies.length}
          paginate={paginate}
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
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
};

export default Movies;
