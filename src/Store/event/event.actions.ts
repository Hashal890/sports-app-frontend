import axios from "axios";
import {
  EVENT_LOADING,
  EVENT_ERROR,
  POST_EVENT_SUCCESS,
  GET_EVENT_SUCCESS,
} from "./event.types";

export const getEvents =
  (page: number, limit: number) => async (dispatch: any) => {
    dispatch({ type: EVENT_LOADING });
    try {
      const res = await axios.get(
        `https://sports-app-backend.onrender.com/event?page=${page}&limit=${limit}`
      );
      dispatch({ type: GET_EVENT_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: EVENT_ERROR });
    }
  };

export const getSingleEvent = (id: any) => async (dispatch: any) => {
  dispatch({ type: EVENT_LOADING });
  try {
    let res = await axios.get(
      `https://sports-app-backend.onrender.com/event/${id}`
    );
    dispatch({ type: POST_EVENT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: EVENT_ERROR });
  }
};

export const postNewEvent =
  ({ id, data }: any) =>
  async (dispatch: any) => {
    dispatch({ type: EVENT_LOADING });
    try {
      let res = await axios.patch(
        `https://sports-app-backend.onrender.com/user/${id}`,
        data
      );
      dispatch({ type: POST_EVENT_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: EVENT_ERROR });
    }
  };
