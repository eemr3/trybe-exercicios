import React, { Component } from 'react';

import './App.css';
import ValidEmail from './components/ValidEmail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      printEmail: '',
    }
  }

  handleChange = ({target}) => {
    const value = target.value;
    this.setState(({email: value}));
  }

  handleSubmit = (value) => {
    this.setState(({printEmail: value, email: ''}));
  }

  render() {
    const { email, printEmail } = this.state;
    return (
      <div>
        <form>
          <label htmlFor='email'>
            E-mail
            <input
              id='email'
              name="email"
              onChange={this.handleChange}
              value={email} 
              type="email"
            />              
          </label>          
            <input data-testid="button-submit" id="id-submit" type="button" onClick={() => this.handleSubmit(email)} value="Enviar"/>
          <label>
            <input data-testid="button-back" type="button" value="Voltar"/>
          </label>
          <ValidEmail email={printEmail}/>
        </form>
      </div>
    );
  }
}

export default App;