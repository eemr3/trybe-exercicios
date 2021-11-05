import React, { Component } from 'react';

class Input extends Component {
  render() {
    const {
      inputId,
      nameInput,
      inputValue,
      handleChange,
      inputLength,
      children,
      handleBlur,
    } = this.props;
    return (
      <label htmlFor={inputId}>
        {children}
        <input
          id={inputId}
          name={nameInput}
          type="text"
          value={inputValue}
          onChange={handleChange}
          maxLength={inputLength}
          onBlur={handleBlur}
        />
      </label>
    );
  }
}

export default Input;
