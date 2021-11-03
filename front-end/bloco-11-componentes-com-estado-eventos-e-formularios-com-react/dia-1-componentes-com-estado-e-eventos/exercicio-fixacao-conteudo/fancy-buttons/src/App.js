import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      printScrenn: '',
      count: 0,
      text: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

handleClick = () => {
  this.setState((prevState, _props)=> ({
    count: prevState.count + 1
  }))
}

handleClick2 = () => {
  this.setState((prevState, _props) => ({
    count: prevState.count - 1
  }))
}

handleClick3(){
   this.setState((prevState, _props) => ({
     printScreen: prevState.printScrenn = <p>Olá, mundo!! Cheguei até aqui e agora #VQV!</p>
   }))
}

handleChange(e){
  this.setState({text: e.target.value})
}

  render() {
    console.log(this)
    return (
      <div className="container">
      <button onClick={this.handleClick}>Incrementa</button>  
      <button onClick={this.handleClick2}>Decrementa</button>  
      <button onClick={this.handleClick3}>Imprime mensagem</button>  
      <h2>{this.state.count % 2 === 0 ?<span style={{color: 'green'}}>{this.state.count}</span>: <span style={{color: 'red'}}>{this.state.count}</span>}</h2>
      {this.state.printScrenn}
      <input type="text" value={this.state.text} onChange={this.handleChange}/>
      <h3>{this.state.text}</h3>
      </div>
    );
  }
  }

export default App;


  // import React from 'react';

  // class App extends React.Component {
  //   constructor() {
  //     super();

  //     this.state = {
  //       clicksBtnOne: 0,
  //       clicksBtnTwo: 0,
  //       clicksBtnThree: 0,
  //     };

  //     this.handleButtonOne = this.handleButtonOne.bind(this);
  //     this.handleButtonTwo = this.handleButtonTwo.bind(this);
  //     this.handleButtonThree = this.handleButtonThree.bind(this);
  //   }

  //   handleButtonOne() {
  //     this.setState(({ clicksBtnOne }) => ({
  //       clicksBtnOne: clicksBtnOne + 1,
  //     }), () => {
  //       console.log(`Botão 1 ${this.getButtonColor(this.state.clicksBtnOne)}`);
  //     });
  //   }
    
  //   handleButtonTwo() {
  //     this.setState(({ clicksBtnTwo }) => ({
  //       clicksBtnTwo: clicksBtnTwo + 1,
  //     }), () => {
  //       console.log(`Botão 2 ${this.getButtonColor(this.state.clicksBtnTwo)}`);
  //     });
  //   }
    
  //   handleButtonThree() {
  //     this.setState(({ clicksBtnThree }) => ({
  //       clicksBtnThree: clicksBtnThree + 1,
  //     }), () => {
  //       // Aqui imprimimos a cor no console após o setState atualizar
  //       // a quantidade de clicks no botão
  //       console.log(`Botão 3 ${this.getButtonColor(this.state.clicksBtnThree)}`);
  //     });
  //   }

  //   getButtonColor(num) {
  //     return num % 2 === 0 ? 'green' : 'white';
  //   }

  //   render() {
  //     const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
  //     return (
  //       <div>
  //         <button
  //           onClick={ this.handleButtonOne }
  //           style={{ backgroundColor: this.getButtonColor(clicksBtnOne) }}
  //         >
  //           Botão 1 | Count = { clicksBtnOne }
  //         </button>
  //         <button
  //           onClick={ this.handleButtonTwo }
  //           style={{ backgroundColor: this.getButtonColor(clicksBtnTwo) }}
  //         >
  //           Botão 2 | Count = { clicksBtnTwo }
  //         </button>
  //         <button
  //           onClick={ this.handleButtonThree }
  //           style={{ backgroundColor: this.getButtonColor(clicksBtnThree) }}
  //         >
  //           Botão 3 | Count = { clicksBtnThree }
  //         </button>
  //       </div>
  //     );
  //   }
  // }

  // export default App;