import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Posts from "./Posts";
import NavigationBar from "./NavBar";
import Projects from "./Projects";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import { verified } from "../redux/auth";

const Root = ({ isLoggedIn, auth }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verified());
  }, []);

  return (
    <BrowserRouter>
      <NavigationBar />
      <div>
        {isLoggedIn ? (
          <>
            <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/posts" element={<Posts />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/" element={<Navigate replace to="/home" />} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/posts" element={<Posts />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/" element={<Navigate replace to="/home" />} />
            </Routes>
          </>
        )}
      </div>
    </BrowserRouter>
  );
};

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    auth: state.auth,
  };
};
export default connect(mapState)(Root);
