import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Posts from "./Posts";
import NavigationBar from "./NavBar";
import Projects from "./Projects";
import About from "./About";
import Home from "./Home";

const Root = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};

const mapState = (state) => {
  return {};
};
export default connect(mapState)(Root);
