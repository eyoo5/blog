import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Posts from "./Posts";
import NavigationBar from "./NavBar";
import Projects from "./Projects";

const Root = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

const mapState = (state) => {
  return {};
};
export default connect(mapState)(Root);
