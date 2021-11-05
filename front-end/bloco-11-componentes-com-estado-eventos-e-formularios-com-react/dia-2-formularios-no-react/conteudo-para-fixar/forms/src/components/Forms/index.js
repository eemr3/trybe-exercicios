import React, { Component } from 'react';
import Input from '../Input';
import Select from '../Select';
import TextArea from '../TextArea';

import './Forms.css';

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      information: '',
      estado: 'GO',
      isAcept: false,
      formularioComErros: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeError = this.handleChangeError.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      this.handleChangeError();
    });
  }

  handleChangeError() {
    const { firstName, lastName, information } = this.state;

    const errors = [!firstName, !lastName, !information];
    const formPreencido = errors.every((erro) => erro !== true);
    this.setState({
      formularioComErros: !formPreencido,
    });
  }

  render() {
    // Destruturação do estado (state)
    const {
      state: { firstName, lastName, information, isAcept, estado, formularioComErros },
      handleChange,
    } = this;
    return (
      <>
        <form>
          <fieldset>
            <legend>DadosPesoas</legend>
            <label htmlFor="first-name">
              Nome
              <Input
                valueInput={firstName}
                handleChange={handleChange}
                nameInput="firstName"
                idInput="first-name"
              />
            </label>
            <label htmlFor="last-name">
              Sobrenome
              <Input
                valueInput={lastName}
                handleChange={handleChange}
                nameInput="lastName"
                idInput="last-name"
              />
            </label>
          </fieldset>

          <Select value={estado} handleChange={handleChange} />

          <TextArea information={information} handleChange={handleChange} />

          <input type="file" className="custom-file-input" name="file" id="file" />
          <label htmlFor="checked-acept" className="checkbox-label">
            Aceita
            <input
              type="checkbox"
              name="isAcept"
              id="checked-acept"
              value={isAcept}
              onChange={handleChange}
            />
          </label>
        </form>
        {formularioComErros ? (
          <span style={{ color: 'orangered' }}>Preencha todos os campos!</span>
        ) : (
          <span style={{ color: 'green' }}>Todos os campos foram preenchidos!</span>
        )}
      </>
    );
  }
}

export default Forms;
