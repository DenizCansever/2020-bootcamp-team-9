import React, { Component } from "react";
import profile from "../../images/profile_background.jpg";
import icon from "../../images/profile_icon.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


const SectionProfile = (props) => {
  const { profile2 } = props;


  return (
    <div
      class="section-profile"
      style={{
        backgroundImage: `url(${profile})`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "40vh",
        position: "relative",
      }}
    >
      <img
        src={icon}
        style={{
          position: "absolute",
          borderRadius: "50%",
          width: "300",
          height: "300",
          bottom: -90,
          right: "25%",
          left: "50%",
          marginLeft: -150,
        }}
      />
      <div
        style={{
          color: "white",
          position: "absolute",

          bottom: -190,
          // right: "30%",
          left: "50%",
          marginLeft: -150,
          left: "47.5%",
          textAlign: "center",
        }}
      >
        <h2>
          {profile2.userFirstName} {profile2.userLastName}
        </h2>
        <h4>Age: {profile2.userAge}</h4>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {

  return {
    auth: state.firebase.auth,
    profile2: state.firebase.profile
  };
};

export default connect(mapStateToProps)(SectionProfile);

