import { createStore } from "redux";
import reducers from "./reducers/index.js";

const store = createStore(reducers);
console.log(store.getState());

store.dispatch({
  type: "TODO",
  text: "Use Redux",
});

console.log(store.getState());
