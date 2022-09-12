import { QueryClient } from "react-query";
import { combineReducers, createStore } from "redux";
import { RunTimeReducers } from "./RunTimeStates";
import { UserReducers } from "./UserReducers";

const allReducers = combineReducers({
  user: UserReducers,
  runTime: RunTimeReducers,
});

export const dataStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});
