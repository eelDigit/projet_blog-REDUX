import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";

//get posts ____________________________________

export const getPosts = () => {
  return dispatch => {
    return axios.get("http://localhost:3000/posts").then(res => {
      dispatch({ type: GET_POSTS, payload: res.data });
    });
  };
};

//add post _________________________________

export const addPost = data => {
  return dispatch => {
    return axios.post("http://localhost:3000/posts", data).then(res => {
      dispatch({ type: ADD_POST, payload: data });
    });
  };
};
//modifie post _________________________________

export const editPost = data => {
  return dispatch => {
    return axios
      .put(` http://localhost:3000/posts/${data.id}`, data)
      .then(res => {
        dispatch({ type: EDIT_POST, payload: data });
      });
  };
};
