import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { children, selectId, selectValue, handleChange } = this.props;
    return (
      <label htmlFor={selectId}>
        {children}
        <select id={selectId} name="state" value={selectValue} onChange={handleChange}>
          <option value="GO">Goiás</option>
          <option value="MG">Minas Gerais</option>
          <option value="DF">Distrito Federal</option>
          <option value="SP">São Paulo</option>
          <option value="RS">Rio Gande do Sul</option>
        </select>
      </label>
    );
  }
}

export default Select;
