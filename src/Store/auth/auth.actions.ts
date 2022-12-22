import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_LOGOUT,
} from "./auth.types";
import axios from "axios";
import { UserDetails } from "../../Interfaces/Store.interfaces.js";

export const getUser = (id: any) => async (dispatch: any) => {
  dispatch({ type: AUTH_LOADING });
  try {
    let res = await axios.get(
      `https://sports-app-backend.onrender.com/user/${id}`
    );
    // console.log(res.data);
    dispatch({ type: AUTH_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

export const postUser = (data: UserDetails) => async (dispatch: any) => {
  // console.log("inside dispatch")
  dispatch({ type: AUTH_LOADING });
  try {
    let res = await axios.post(
      `https://sports-app-backend.onrender.com/user/`,
      data
    );
    // console.log(res.data);
    dispatch({ type: AUTH_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

export const loginUser = (data: UserDetails) => async (dispatch: any) => {
  // console.log("inside loginUser");
  dispatch({ type: AUTH_LOADING });
  try {
    let res = await axios.post(
      `https://sports-app-backend.onrender.com/user/getuser`,
      data
    );
    // console.log(res.data);
    dispatch({ type: AUTH_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

export const logoutUser = () => async (dispatch: any) => {
  dispatch({ type: AUTH_LOADING });
  try {
    dispatch({ type: AUTH_LOGOUT });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};
