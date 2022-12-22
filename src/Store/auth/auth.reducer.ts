import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_LOGOUT,
} from "./auth.types";
import { ReducerInput } from "../../Interfaces/Store.interfaces.js";

const token = localStorage.getItem("token") || "";

const userInitalState = {
  loading: false,
  error: false,
  isAuth: token ? true : false,
  data: null,
  token,
};

export const authReducer = (
  state = userInitalState,
  { type, payload }: ReducerInput
) => {
  switch (type) {
    case AUTH_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case AUTH_SUCCESS: {
      // console.log(payload, payload.user, payload.user.token);
      localStorage.setItem("token", payload.user.token);
      return {
        ...state,
        loading: false,
        error: false,
        isAuth: true,
        data: payload.user,
        token: payload.user.token,
      };
    }
    case AUTH_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case AUTH_LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        error: false,
        isAuth: false,
        data: null,
        token: "",
      };
    }
    default: {
      return state;
    }
  }
};
