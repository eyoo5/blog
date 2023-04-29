import axios from "axios";
import getCookie from "../cookies";

//action types
const GET_ALL_POSTS = "GET_ALL_POSTS";
const EDIT_POST = "EDIT_POST";

//action creators
const getAllPosts = (posts) => {
  return {
    type: GET_ALL_POSTS,
    posts,
  };
};

const editPost = (post) => {
  return {
    type: EDIT_POST,
    post,
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

export const editngPost = (postId, edits) => {
  return async (dispatch) => {
    try {
      const { data: post } = await axios.get(
        `/api/posts/${postId}/update`,
        edits
      );
      dispatch(editPost(post));
    } catch (error) {
      console.error(error);
    }
  };
};

//reducer
const initialState = { allPosts: [], singlePost: {} };

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        allPosts: action.posts,
      };
    case EDIT_POST: {
      const updatedPostArray = state.allPosts.map((post) =>
        post.id === action.post.id ? action.post : post
      );

      return { ...state, allPosts: [...updatedPostArray] };
    }
    default:
      return state;
  }
};

export default postsReducer;
