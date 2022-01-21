import React, { Component } from 'react';
import Grandmother from './Grandmother,';
import {MyContext} from './MyContext'
class GreatGrandfather extends Component {
  state = {
    inheritance: 1000000,
  }

  handleSpendMoney = () => {
    this.setState((prevState) => ({
      inheritance: prevState.inheritance - 100
    }))
  }
  render() {
    const values = {
      inheritance: this.state.inheritance,
      spendMoney: this.handleSpendMoney
    }
    return (
      <MyContext.Provider value={values}>
        <h1>Eu sou a bisavó</h1>
        <Grandmother />
      </MyContext.Provider>
    );
  }
}

export default GreatGrandfather;