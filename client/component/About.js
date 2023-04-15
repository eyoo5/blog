import React from "react";
import { connect } from "react-redux";

const About = () => {
  return (
    <>
      <br />
      <h3>Who am I?</h3>
      <br />
      <div className="box">
        <p className="about"></p>
      </div>
    </>
  );
};

export default connect(null)(About);
