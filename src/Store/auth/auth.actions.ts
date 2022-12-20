import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_ERROR,
  POST_USERS_SUCCESS,
} from "./auth.types.js";
import axios from "axios";
import { UserDetails } from "../../Interfaces/Store.interfaces.js";

export const getUser = () => async (dispatch: any) => {
  dispatch({ type: AUTH_LOADING });
  try {
    let res = await axios.get(`https://sample-production.up.railway.app/user`);
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
      `https://sample-production.up.railway.app/user`,
      data
    );
    // console.log(res.data);
    dispatch({ type: POST_USERS_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};
