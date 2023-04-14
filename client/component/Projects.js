import React from "react";
import { connect } from "react-redux";

const Projects = () => {
  return (
    <>
      <br />
      <h3>My_Projects</h3>
      <br />
      <div className="box">
        <p className="about">Scroll through my personal and group projects.</p>
        <p className="about">
          &#128062; To visit my deployed websites, press on the name of the
          project!
        </p>
      </div>
      <br />
      <div className="box">
        <a href="https://trippn.onrender.com/home">
          <h5 className="title">&#127796; trippn</h5>
        </a>
        <p className="project">
          As a student in Full Stack Academy-Grace Hopper, we were asked to
          brainstorm and create a website for our final capstone project. We
          decided to create a website where users are able to plan a trip
          together. They assign tasks and are able to see, not only their
          itinerary for their own trip, but the itinerary of other people on
          their trip as well. It is a great place to gather all necessary trip
          details!
        </p>
        <h6 className="title">My_Responsibilities</h6>
        <ul className="project">
          <li>
            Improved our security by using cookie functions to hold our token
            and userId.
          </li>
          <li>
            Designed the backend user routes and front end user Redux store.
          </li>
          <li>
            Created the task components on the user profile page for easier
            access to tasks that the user needs to update.
          </li>
          <li>
            Spearheaded the use of Bootstrap-React Modal and Alert components to
            make our page look clean and professional.
          </li>
        </ul>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <iframe
            width="430"
            height="215"
            src="https://www.youtube.com/embed/Gsk9KtDXRdQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <br />
      <div className="box">
        <a href="https://chef-hopper-bakery.onrender.com/home">
          <h5 className="title">&#128007; Chef Hopper Bakery</h5>
        </a>
        <p className="project">
          In a group of three, we were asked to create an e-commerce website. We
          were given only a week to finish this project. It is the first ever
          web application we have made while in Fullstack Academy.
        </p>
        <p className="project">
          Our stack: PostgreSQL, Node.js,Express, React - PERN Stack.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <img src="chefHopper.png" width="400" />
        </div>
        <h6 className="title">My_Responsibilities</h6>
        <ul className="project">
          <li>Incorporated middleware to safeguard our routes.</li>
          <li>
            Designed back-end routes and checkout view so that a user can see
            their finalized cart and buy their baked goods.
          </li>
          <li>
            Designed back-end routes and created a single view where a user can
            see their profile and edit their information.
          </li>
          <li>
            Implemented the guest experience by creating a cart for the guest
            user and placing the cart's information on local storage to be
            accessed until checkout.
          </li>
        </ul>
      </div>
      <br />
      <div className="box">
        <h5 className="title">&#128203; ToDo App</h5>
        <p className="project">
          To study desktop apps, I created a simple todo application using
          electron.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        ></div>
        <h6 className="title">What_I_Did</h6>
        <ul className="project">
          <li>Learned the fundamentals of electron framework.</li>
          <li>Implemented an AG Grid to create an editable table.</li>
          <li>
            Improved user experience by allowing users to check off tasks and/or
            delete tasks from list through editable rows in AG Grid.
          </li>
          <li>
            Integrated access to users local desktop to change the name of the
            file.
          </li>
        </ul>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HNk9d7CpPGs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <br />
    </>
  );
};

export default connect(null)(Projects);
