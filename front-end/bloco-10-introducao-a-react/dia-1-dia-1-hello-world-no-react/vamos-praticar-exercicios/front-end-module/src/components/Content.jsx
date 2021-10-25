import React from "react";

import "./content.css";

const conteudos = [
  {
    conteudo: "High Order Functions",
    bloco: 8,
    status: "Aprendido",
  },
  {
    conteudo: "Composicao de Componentes",
    bloco: 11,
    status: "Aprendendo",
  },
  {
    conteudo: "Composicao de Estados",
    bloco: 12,
    status: "Aprenderei",
  },
  {
    conteudo: "Redux",
    bloco: 16,
    status: "Aprenderei",
  },
];

class Content extends React.Component {
  render() {
    return conteudos.map((conteudo, index) => (
      <main key={index} className="container">
        <section className="content">
          <h2>{conteudo.conteudo}</h2>
          <p>{conteudo.bloco}</p>
          <p>{conteudo.status}</p>
        </section>
      </main>
    ));
  }
}

export default Content;
