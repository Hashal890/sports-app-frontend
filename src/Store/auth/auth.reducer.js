import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_ERROR,
  POST_USERS_SUCCESS
} from "./auth.types.js";

const userInitalState = {
  loading: false,
  error: false,
  isAuth : false,
  data: []
};

export const authReducer = (
  state = userInitalState,
  { type, payload }
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
      return {
        ...state,
        loading: false,
        error: false,
        isAuth: true,
        data: payload,
      };
    }
    case AUTH_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case POST_USERS_SUCCESS: {
      console.log("inside reducer")
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    default: {
      return state;
    }
  }
};
