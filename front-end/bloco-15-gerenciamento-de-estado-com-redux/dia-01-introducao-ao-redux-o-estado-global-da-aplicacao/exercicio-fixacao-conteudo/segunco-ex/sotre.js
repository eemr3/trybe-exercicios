import { createStore } from "redux";
import reducerCombinados from "./index.js";

const store = createStore(reducerCombinados);

store.dispatch({
  type: "LOGIN",
  email: "eemr3@yahoo.com.br",
});

store.dispatch({
  type: "SAQUE",
  valor: 100,
});

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});
