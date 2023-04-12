import React from "react";
import { connect } from "react-redux";

const Posts = () => {
  return (
    <>
      <p>Posts will go here....</p>
    </>
  );
};

const mapState = (state) => {
  return {};
};

export default connect(mapState)(Posts);
