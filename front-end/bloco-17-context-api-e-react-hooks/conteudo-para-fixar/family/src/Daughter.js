import React from "react";
import {MyContext} from './MyContext'

function Daughter(props) {
  return (
    <MyContext.Consumer>
     { (value) => (
    <div>
      <h1>Eu sou a filha</h1>
      <span>
        {`Tenho uma herança de R$ ${value.inheritance} que recebi do meu bisavô`}
      </span>
      <button onClick={value.spendMoney}>Gastar</button>
    </div>

      )}

    </MyContext.Consumer>
  );
}

export default Daughter;