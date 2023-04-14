import React from "react";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllPosts } from "../redux/posts";
import { Card, Container } from "react-bootstrap";

const Posts = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  const { posts } = props;

  return (
    <>
      <br></br>
      <h3> My Journey </h3>
      <br></br>

      {posts.map((singlePost) => {
        return (
          <Container key={singlePost.id}>
            <Card
              className="mb-4"
              style={{ width: "18rem", height: "30rem" }}
              key={singlePost.id}
            >
              <Card.Header as="h6">{singlePost.createdAt}</Card.Header>
              <Card.Body>
                <Card.Title>{singlePost.title}</Card.Title>
                <Card.Text>{singlePost.content}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Container>
        );
      })}
    </>
  );
};

const mapState = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapState)(Posts);
