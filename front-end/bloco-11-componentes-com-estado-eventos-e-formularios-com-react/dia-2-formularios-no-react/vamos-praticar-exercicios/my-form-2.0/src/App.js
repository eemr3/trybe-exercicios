import React, { Component } from 'react';

import './App.css';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <main className="container">
        <h1>Cadastro de currriculo</h1>
        <Form />
      </main>
    );
  }
}

export default App;
