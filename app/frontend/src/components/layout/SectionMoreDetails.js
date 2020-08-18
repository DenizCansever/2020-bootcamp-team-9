import React, { Component } from "react";

export class SectionMoreDetails extends Component {
  render() {
    var {
      genres,
      overview,
      tagline,
      released,
      rating,
      votes,
      cast
    } = this.props;
    return (
      <section className="section-moredetails">
        <div className="container-details">
          <table className="table-details">
            <tbody>
              <tr>
                <th>Genres</th>
                <th>Overview</th>
              </tr>
              <tr>
                <td>{genres}</td>
                <td>{overview}</td>
              </tr>
              <tr>
                <th>Tagline</th>
                <th>Votes</th>
              </tr>
              <tr>
                <td>{tagline}</td>
                <td>{votes}</td>
              </tr>
              <tr>
                <th>Released</th>
                <th>Rating</th>
              </tr>
              <tr>
                <td>{released}</td>
                <td>{rating}</td>
              </tr>
              <tr>
                <td>Cast</td>
              </tr>
              <tr>
                <td>{cast}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default SectionMoreDetails;
