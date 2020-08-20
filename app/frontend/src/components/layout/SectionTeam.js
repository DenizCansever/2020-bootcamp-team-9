import React, { Component } from "react";

import kerem from "../../images/keremimage.jpeg";
import deniz from "../../images/denizimage.jpeg";
import zeynep from "../../images/zeynepimage.jpeg";
import burak from "../../images/burakimage.jpeg";
import filiz from "../../images/filizimage.jpeg";
import ali from "../../images/aliimage.jpeg";
import aboutpage_team from "../../images/aboutpage_team.jpg";

export class SectionTeam extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "red",
        }}
      >
        <p
          style={{
            color: "red",
          }}
        >
          .
        </p>

        <div
          style={{
            backgroundImage: `url(${aboutpage_team})`,
            paddingTop: "20px",
            paddingRight: "10%",
            paddingLeft: "10%",
            paddingBottom: "5%",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "36px",
              textShadow: "2px 3px 5px red",
              marginBottom: "25px",
            }}
          >
            Meet Our Team
          </h1>

          <div className="team-row">
            <div className="team-column">
              <div className="team-card">
                <img src={kerem} style={{ width: "100%", padding: "10px" }} />
                <div className="team-container">
                  <h2 className="text-name">Kerem Çubuk</h2>
                  <p
                    className="team-title"
                    style={{
                      fontFamily: "Georgia,times new roman,Times,serif",
                    }}
                  >
                    Mentor
                  </p>
                  <p style={{ color: "blue", textDecoration: "underline" }}>
                    kerem.cubuk@eteration.com.tr
                  </p>
                </div>
              </div>
            </div>
            <div className="team-column">
              <div className="team-card">
                <img src={deniz} style={{ width: "100%", padding: "10px" }} />
                <div className="team-container">
                  <h2>Deniz Cansever</h2>
                  <p
                    className="team-title"
                    style={{
                      fontFamily: "Georgia,times new roman,Times,serif",
                    }}
                  >
                    Frontend Developer
                  </p>
                  <p style={{ color: "blue", textDecoration: "underline" }}>
                    denizevenstar@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="team-column">
              <div className="team-card">
                <img src={zeynep} style={{ width: "100%", padding: "10px" }} />
                <div className="team-container">
                  <h2>Zeynep Bekem</h2>
                  <p
                    className="team-title"
                    style={{
                      fontFamily: "Georgia,times new roman,Times,serif",
                    }}
                  >
                    Frontend Developer
                  </p>
                  <p style={{ color: "blue", textDecoration: "underline" }}>
                    zbekem@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="team-row">
            <div className="team-column">
              <div className="team-card">
                <img src={burak} style={{ width: "100%", padding: "10px" }} />
                <div className="team-container">
                  <h2>Burak Gündoğdu</h2>
                  <p
                    className="team-title"
                    style={{
                      fontFamily: "Georgia,times new roman,Times,serif",
                    }}
                  >
                    Backend Developer
                  </p>
                  <p style={{ color: "blue", textDecoration: "underline" }}>
                    burak.gundogdu0131@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="team-column">
              <div className="team-card">
                <img src={filiz} style={{ width: "100%", padding: "10px" }} />
                <div className="team-container">
                  <h2>Filiz Gözet</h2>
                  <p
                    className="team-title"
                    style={{
                      fontFamily: "Georgia,times new roman,Times,serif",
                    }}
                  >
                    Frontend Developer
                  </p>
                  <p style={{ color: "blue", textDecoration: "underline" }}>
                    filiz.gozet9@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="team-column">
              <div className="team-card">
                <img src={ali} style={{ width: "100%", padding: "10px" }} />
                <div className="team-container">
                  <h2>Ali Ramazan Mert</h2>
                  <p
                    className="team-title"
                    style={{
                      fontFamily: "Georgia,times new roman,Times,serif",
                    }}
                  >
                    Frontend Developer
                  </p>
                  <p style={{ color: "blue", textDecoration: "underline" }}>
                    mertaliramazan98@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionTeam;
