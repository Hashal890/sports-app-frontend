import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./auth/auth.reducer";
import { eventReducer } from "./event/event.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  event: eventReducer,
});

export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
