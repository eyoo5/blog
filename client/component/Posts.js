import React from "react";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllPosts } from "../redux/posts";

const Posts = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  return (
    <>
      <p>Posts will go here....</p>
    </>
  );
};

const mapState = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapState)(Posts);
