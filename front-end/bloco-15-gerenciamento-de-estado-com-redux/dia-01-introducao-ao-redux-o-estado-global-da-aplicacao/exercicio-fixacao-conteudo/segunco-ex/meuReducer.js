// const Redux =require('redux');
import Redux from "redux";

// const fazerLogin = (email) => ({
//   type: "LOGIN",
//   email,
// });

const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const meuReducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

// const store = Redux.createStore(meuReducer);

// store.dispatch(fazerLogin("alguem@email.com"));

// console.log(store.getState());

// { login: true, email: 'alguem@email.com' }
export default meuReducer;
