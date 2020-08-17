import React, { Component } from "react";
import { Card, Row, Container } from "react-bootstrap";
import axios from 'axios';

class Watched extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      isLoading: true,
      currentPage: 1,
      postsPerPage: 5,
    };
  }

  async componentDidMount() {
    const response = await axios.get("https://eterationmovies.azurewebsites.net/api/movies/popular");
    console.log("hi", response.data);
  }

  render() {
    const { movies, isLoading, currentPage, postsPerPage } = this.state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <React.Fragment>
        <Container>
          <Row>
            {movies.map((movie) => (
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            ))}           
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Watched;

