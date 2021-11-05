import React, { Component } from 'react';
import Input from '../Input';
import TextArea from '../TextArea';

import './LastJobsFieldset.css';

class LastJobsFieldset extends Component {
  render() {
    const {
      jobDescription,
      curriculumSummary,
      handleChange,
      office,
      handleMouseEnter,
      message,
    } = this.props;
    return (
      <fieldset className="container-fieldset">
        <legend>Dados do seu último emprego</legend>
        <TextArea
          textInfo={curriculumSummary}
          textId="text-curriculum"
          textLength="1000"
          children="Resumo do currículo"
        />
        <TextArea
          textInfo={office}
          textId="text-office"
          textLength="40"
          children="Cargo"
          handleMouseEnter={handleMouseEnter}
          message={message}
        />
        <Input
          children="Descrição do cargo"
          id="input-description"
          nameInput="description"
          inputValue={jobDescription}
          handleChange={handleChange}
          inputLength="500"
        />
      </fieldset>
    );
  }
}

export default LastJobsFieldset;
