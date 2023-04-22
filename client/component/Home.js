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

  //   Background Image:
  const myStyle = {
    backgroundImage: "url('About-Background.jpg')",
    height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div style={myStyle}>
        <br />
        <div className="home-container">
          {/* <Image
            roundedCircle="true"
            src="ProfilePic.jpeg"
            width="250"
            style={{
              display: "-webkit-inline-flex",
              marginRight: "10rem",
              marginLeft: "auto",
            }}
          ></Image> */}
          <span ref={el}></span>
        </div>
      </div>
    </>
  );
};

export default connect(null)(Home);
