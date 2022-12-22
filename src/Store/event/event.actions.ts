import axios from "axios";
import { EVENT_LOADING, EVENT_ERROR, POST_EVENT_SUCCESS } from "./event.types";

export const postNewPost =
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
