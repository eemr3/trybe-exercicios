import { combineReducers } from "redux";
import meuReducer from "./meuReducer.js";
import meuOutroReducer from "./meuOutroReducer.js";

const reducerCombinados = combineReducers({
  meuReducer,
  meuOutroReducer,
});

export default reducerCombinados;
