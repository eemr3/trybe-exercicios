import React, { Component } from 'react';

import './Input.css';

class Input extends Component {
  render() {
    const { valueInput, handleChange, nameInput, idInput } = this.props;

    return (
      <>
        <input
          type="text"
          name={nameInput}
          id={idInput}
          value={valueInput}
          onChange={handleChange}
        />
        {valueInput ? 'Campo vazio!' : '-Ok-'}
      </>
    );
  }
}

export default Input;
