import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllPosts } from "../redux/posts";
import { Card, Stack, Container } from "react-bootstrap";
import { editngPost } from "../redux/posts";

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

const editPost = (event) => {
  const dispatch = useDispatch();
  event.preventDefault();
};

const handleShow = () => {
  setShow(true);
};

const EditablePost = (props) => {
  const { auth } = props;
  const { posts } = props || [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [posts]);

  const [tilte, setTitle] = useState(props.posts.title);
  const [descripton, setDescription] = useState(props.posts.description);
  const [show, setShow] = useState(false);

  return (
    <>
      <br />
      <h3> My_Stories </h3>
      <br />
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
                  <Button variant="primary" onClick={handleShow}>
                    Edit
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </Container>
      </div>
    </>
  );
};

const mapState = (state) => {
  return {
    posts: state.posts.allPosts,
    auth: state.auth,
  };
};

export default connect(mapState)(EditablePost);
