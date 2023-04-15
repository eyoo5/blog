import axios from "axios";
import getCookie from "../cookies";

//action types
const GET_ALL_POSTS = "GET_ALL_POSTS";

//action creators
const getAllPosts = (posts) => {
  return {
    type: GET_ALL_POSTS,
    posts,
  };
};

//thunk creator
export const fetchAllPosts = () => {
  return async (dispatch) => {
    try {
      const { data: posts } = await axios.get(
        `/api/posts/userId?limit=5&sort=desc`
      );
      dispatch(getAllPosts(posts));
    } catch (error) {
      console.error(error);
    }
  };
};

//reducer
const postsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return action.posts;
    default:
      return state;
  }
};

export default postsReducer;
