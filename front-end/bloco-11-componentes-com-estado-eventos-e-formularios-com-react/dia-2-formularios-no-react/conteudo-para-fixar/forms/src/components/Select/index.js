import React, { Component } from 'react';

import './Select.css';

class Select extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <>
        <select name="estado" id="estado" value={value} onChange={handleChange}>
          <option value="GO">Goiás</option>
          <option value="SP">São Paulo</option>
          <option value="MG">Minas Gerais</option>
        </select>
      </>
    );
  }
}

export default Select;
