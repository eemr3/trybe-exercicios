import Redux from "redux";

const saque = (valor) => ({
  type: "SAQUE",
  valor,
});

const ESTADO_INICIAL = {
  valor: 0,
};

const meuOutroReducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "SAQUE": {
      return {
        ...state,
        valor: action.valor,
      };
    }

    default:
      // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

const store = Redux.createStore(meuOutroReducer);

store.dispatch(saque(100));

// console.log(store.getState());

// { valor: 100 }
export default meuOutroReducer;
