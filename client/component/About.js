import React, { useState } from "react";
import { connect } from "react-redux";
import { Tab, Tabs, OverlayTrigger, Tooltip } from "react-bootstrap";

const About = () => {
  const [key, setKey] = useState("home");
  return (
    <>
      <br />
      <h3>Who am I?</h3>
      <br />
      <div id="about-box">
        <Tabs
          defaultActiveKey="profile"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            <div className="box-about">
              <div className="about">
                <h5>I am a former teacher now turned coder!</h5>
                <figure>
                  <img
                    src="5_Grade_Team.jpeg"
                    width="300"
                    style={{ marginTop: "1rem" }}
                  />
                </figure>
                <figcaption>Former 5th Grade Team</figcaption>
                <p style={{ marginTop: "1rem" }}>
                  I have worked for the NYC Department of Education for 6 years.
                  However, just because I have left the profession does not mean
                  I am no longer a teacher. Teaching is a part of me and I will
                  take it where ever I go. The skills that I have gained like
                  communication, leadership, and organization will be with me
                  forever!
                </p>
                <p>
                  Along being a teacher, I am a life long learner. I studied
                  foundational JavaScript and entered a coding bootcamp in
                  September of 2022. I learned the PERN stack(PostgreSQL,
                  Express, React, Node.js) and graduated in December 2022. This
                  does not mean I have stopped learning! Currently, I am
                  dabbling into Python, MongoDB, and Cloud~
                </p>
                <img src="PERN.png" width="600" />
              </div>
            </div>
          </Tab>
          <Tab eventKey="careers" title="Careers">
            <div className="box-about">
              <OverlayTrigger
                overlay={
                  <Tooltip id="button-tooltip" placement="auto-right">
                    Click to visit website!
                  </Tooltip>
                }
              >
                <div id="ps">
                  <a href="https://www.ps110q.org/">
                    <h5 className="title">P.S.110Q</h5>
                  </a>
                </div>
              </OverlayTrigger>

              <p>Worked as a 5th grade teacher for 3 years.</p>
              <p>
                Led a team of 9, composed of 5th grade teachers and 3
                para-professionals, implementing new curriclums focused on
                literacy and math.
              </p>
              <OverlayTrigger
                overlay={
                  <Tooltip id="button-tooltip" placement="auto-right">
                    Click to visit website!
                  </Tooltip>
                }
              >
                <div id="ps">
                  <a href="https://www.ps229q.org/">
                    <h5 className="title">P.S.229Q</h5>
                  </a>
                </div>
              </OverlayTrigger>
              <p>Worked as a 1st grade teacher for 3 years.</p>
              <p>Flagshipped new science program for the school. </p>
            </div>
          </Tab>

          <Tab eventKey="hobbies" title="Hobbies">
            <div className="box-about">
              <ul className="project">
                <li>Dancing</li>
                <p>
                  I have chorepgraphed pieces for my church and was in a College
                  Christian Dance Group!
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <iframe
                    width="360"
                    height="215"
                    src="https://www.youtube.com/embed/k8YoXNCcae8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <li>Singing</li>
                <p>
                  I am part of my church choir, but I love to also sing American
                  and Korean pop songs!
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <iframe
                    width="360"
                    height="215"
                    src="https://www.youtube.com/embed/videoseries?list=PLp9ZQb8u28IvSJ_zynjPnmY-REgz6G1jy"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <li> Writing </li>
                <p>
                  On my free time, I like to write poetry. I won't say I am
                  good, but it helps me navigate my feelings!
                </p>
              </ul>
            </div>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <div className="box-about">
              <p className="about">
                If you are interested, need advice, or just curious about
                something - do not hesitate to contact me! if you prefer
                LinkedIn, you may press on the link in the footer!
              </p>
              <div className="about">
                <h6>Email:</h6>
                <p> liletchie@gmail.com</p>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default connect(null)(About);
