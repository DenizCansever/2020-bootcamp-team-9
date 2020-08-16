import React from "react";
import { Nav } from "react-bootstrap";

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <React.Fragment>
      <Nav
        className="m-auto justify-content-center paginate"
        variant="pills"
        as="ul"
      >
        <Nav.Item as="li">
          <Nav.Link
            onClick={() => prevPage(currentPage)}
            disabled={currentPage === 1}
          >
            Previous
          </Nav.Link>
        </Nav.Item>

        {pageNumbers.map((num) => (
          <Nav.Item as="li" key={num}>
            <Nav.Link
              active={num === currentPage}
              onClick={() => paginate(num)}
            >
              {num}
            </Nav.Link>
          </Nav.Item>
        ))}

        <Nav.Item as="li">
          <Nav.Link
            onClick={() => nextPage(currentPage)}
            disabled={currentPage === pageNumbers.length}
          >
            Next
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </React.Fragment>
  );
};

export default Pagination;
