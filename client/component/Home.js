import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Image } from "react-bootstrap";
import Typed from "typed.js";

const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "former <i>teacher</i>",
        "now <i>coder</i>",
        "and <i>forever learner</i>",
      ],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="home-container">
        <Image
          roundedCircle="true"
          src="ProfilePic.jpeg"
          width="250"
          style={{
            display: "-webkit-inline-flex",
            marginRight: "auto",
            marginLeft: "20rem",
          }}
        ></Image>
        <span ref={el}></span>
      </div>
    </>
  );
};

export default connect(null)(Home);
