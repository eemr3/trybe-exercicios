import React, { Component } from 'react';
import LastJobsFieldset from '../LastJobsFieldset';
import PersonalFieldsetData from '../PersonalFieldsetData';

import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      complement: '',
      curriculumSummary: '',
      office: '',
      jobDescription: '',
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  handleMouseEnter() {
    const message = 'Preencha esse campo com muito cuidado!';
    this.setState({
      message: message,
    });
  }

  handleBlur() {
    const re = /[0-9]/;
    if (re.test(this.state.city)) this.setState({ city: '' });
  }

  render() {
    const dataState = this.state;
    return (
      <>
        <form className="form-container">
          <PersonalFieldsetData
            inputValue={dataState}
            handleChange={this.handleChange}
            handleBlur={this.handleBlur}
          />
          <LastJobsFieldset
            inputValue={dataState}
            handleChange={this.handleChange}
            handleMouseEnter={this.handleMouseEnter}
            message={this.state.message}
          />
        </form>
      </>
    );
  }
}

export default Form;
