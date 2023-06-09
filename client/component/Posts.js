import React from "react";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllPosts } from "../redux/posts";
import { Card, Stack, Container } from "react-bootstrap";
import EditablePost from "./EditablePost";

//Time Display:
function timeDisplayConverter(time) {
  const formattedTime = new Date(time).toLocaleTimeString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return formattedTime;
}

const Posts = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  const { auth } = props;
  const { posts } = props || [];
  console.log(posts);
  return (
    <>
      {auth.id ? (
        <>
          <EditablePost />
        </>
      ) : (
        <>
          <br />
          <h3> My_Stories </h3>
          <br />
          <div className="box">
            <p className="about">
              Here you will find blog posts on things I have been learning,
              challenges I have been facing, and just regular funny stories that
              have happened to me. Feel free to read, laugh, and explore!
            </p>
          </div>
          <br></br>
          <div className="blog">
            <Container>
              {posts.map((singlePost) => {
                return (
                  <Card
                    className="mb-4"
                    style={{
                      width: "auto",
                      height: "auto",
                      fontFamily: "optima",
                      color: "#8B4513",
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}
                    key={singlePost.id}
                  >
                    <Card.Header as="h6" style={{ textAlign: "right" }}>
                      {timeDisplayConverter(singlePost.createdAt)}
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>{singlePost.title}</Card.Title>
                      <Card.Text>{singlePost.content}</Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
            </Container>
          </div>
        </>
      )}
    </>
  );
};

const mapState = (state) => {
  return {
    posts: state.posts.allPosts,
    auth: state.auth,
  };
};

export default connect(mapState)(Posts);
