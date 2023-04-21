import axios from "axios";
// import getCookie from "../cookies";

//action types
const SET_USER = "SET_USER";

//action creators
const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

//thunks

const fetchUser = () => {
  return async (dispatch) => {
    try {
      // const id = getCookie("userId");
      // const token = getCookie("token");
      const { data: user } = await axios.get(`/api/users/${id}`);
      dispatch(setUser(user));
    } catch (error) {
      console.error(error);
    }
  };
};

//reducer
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
};

export default userReducer;
