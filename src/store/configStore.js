import { createStore, combineReducers } from "redux";
import usersReducer from "../reducers/usersReducer";
const configStore = () => {
  const store = createStore(
    combineReducers({
      users: usersReducer,
    })
  );

  return store;
};

export default configStore;
