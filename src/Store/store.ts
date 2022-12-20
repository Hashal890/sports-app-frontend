import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { authReducer } from "./auth/auth.reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
