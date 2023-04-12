import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Posts } from "./Posts";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
};

const mapState = (state) => {
  return {};
};
export default connect(mapState)(Root);
