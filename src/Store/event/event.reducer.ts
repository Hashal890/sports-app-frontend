import {
  EVENT_LOADING,
  EVENT_ERROR,
  POST_EVENT_SUCCESS,
  GET_EVENT_SUCCESS,
} from "./event.types";
import { ReducerInput } from "../../Interfaces/Store.interfaces.js";

const eventInitalState = {
  loading: false,
  error: false,
  data: [],
  totalPages: 0,
};

export const eventReducer = (
  state = eventInitalState,
  { type, payload }: ReducerInput
) => {
  switch (type) {
    case EVENT_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case EVENT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_EVENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload.event.docs,
        totalPages: payload.event.totalPages,
      };
    }
    case POST_EVENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    default: {
      return state;
    }
  }
};
