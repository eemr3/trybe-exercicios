import React, { Component } from 'react';
import Input from '../Input';
import Select from '../Select';

import './PersonalFieldsetData.css';

class PersonalFieldsetData extends Component {
  render() {
    const { name, handleChange, email, cpf, address, city, state, handleBlur } =
      this.props;
    return (
      <fieldset className="container-fieldset">
        <legend>Dados Pessoais</legend>
        <Input
          children="Nome"
          id="input-name"
          nameInput="name"
          inputValue={name}
          handleChange={handleChange}
          inputLength="40"
        />
        <Input
          children="E-mail"
          id="input-email"
          nameInput="email"
          inputValue={email}
          handleChange={handleChange}
          inputLength="50"
        />
        <Input
          children="CPF"
          id="input-cpf"
          nameInput="cpf"
          inputValue={cpf}
          handleChange={handleChange}
          inputLength="11"
        />
        <Input
          children="Endereço completo"
          id="input-address"
          nameInput="address"
          inputValue={address}
          handleChange={handleChange}
          inputLength="200"
        />
        <Input
          children="Cidade"
          id="input-city"
          nameInput="city"
          inputValue={city}
          handleChange={handleChange}
          inputLength="28"
          handleBlur={handleBlur}
        />
        <Select
          children="Estado"
          selectId="select-state"
          selectValue={state}
          handleChange={handleChange}
        />
      </fieldset>
    );
  }
}

export default PersonalFieldsetData;
