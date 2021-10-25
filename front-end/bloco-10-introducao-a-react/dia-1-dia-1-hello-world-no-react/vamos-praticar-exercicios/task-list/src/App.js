import React from "react";
import "./App.css";

const Task = (value) => {
  return <li>{value}</li>;
};

function App() {
  const appointments = [
    "Ir ao banco",
    "Cortar o cabelo",
    "Compra o presenta para a esposa",
    "Buscar o filho na escola",
    "Comprar o lanche",
  ];
  return <ol>{appointments.map((item) => ( Task(item) ))}</ol>;
}

export default App;
