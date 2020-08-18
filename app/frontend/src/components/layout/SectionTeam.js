import React, { Component } from "react";
import kerem from "../../images/keremimage.jpeg";
import deniz from "../../images/denizimage.jpeg";
import zeynep from "../../images/zeynepimage.jpeg";
import burak from "../../images/burakimage.jpeg";
import filiz from "../../images/filizimage.jpeg";
import ali from "../../images/aliimage.jpeg";
import darkb4 from "../../images/darkb4.jpg";
import b7 from "../../images/b7.jpg";

export class SectionTeam extends Component {
  render() {
    return (
      <div
        style={{
          padding: "5%",
          backgroundImage: `url(${b7})`,
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "36px",
            textShadow: "2px 2px 10px #069c9e",
          }}
        >
          Meet Our Team
        </h1>
        <div class="team-row">
          <div class="team-column">
            <div class="team-card">
              <img src={kerem} style={{ width: "100%", padding: "10px" }} />
              <div class="team-container">
                <h2 class="text-name">Kerem Çubuk</h2>
                <p class="team-title">Mentor</p>
                <p>jane@example.com</p>
              </div>
            </div>
          </div>
          <div class="team-column">
            <div class="team-card">
              <img src={deniz} style={{ width: "100%", padding: "10px" }} />
              <div class="team-container">
                <h2>Deniz Cansever</h2>
                <p class="team-title">Full Stack Developer</p>
                <p>mike@example.com</p>
              </div>
            </div>
          </div>
          <div class="team-column">
            <div class="team-card">
              <img src={zeynep} style={{ width: "100%", padding: "10px" }} />
              <div class="team-container">
                <h2>Zeynep Bekem</h2>
                <p class="team-title">Full Stack Developer</p>
                <p>zbekem@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div class="team-row">
          <div class="team-column">
            <div class="team-card">
              <img src={burak} style={{ width: "100%", padding: "10px" }} />
              <div class="team-container">
                <h2>Burak Gündoğdu</h2>
                <p class="team-title">Full Stack Developer</p>
                <p>jane@example.com</p>
              </div>
            </div>
          </div>
          <div class="team-column">
            <div class="team-card">
              <img src={filiz} style={{ width: "100%", padding: "10px" }} />
              <div class="team-container">
                <h2>Filiz Gözet</h2>
                <p class="team-title">Full Stack Developer</p>
                <p>mike@example.com</p>
              </div>
            </div>
          </div>
          <div class="team-column">
            <div class="team-card">
              <img src={ali} style={{ width: "100%", padding: "10px" }} />
              <div class="team-container">
                <h2>Ali Ramazan Mert</h2>
                <p class="team-title">Full Stack Developer</p>
                <p>mike@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionTeam;
