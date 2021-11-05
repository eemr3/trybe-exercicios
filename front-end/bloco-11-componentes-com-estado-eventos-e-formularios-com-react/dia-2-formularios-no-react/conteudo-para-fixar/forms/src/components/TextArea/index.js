import React, { Component } from 'react';

import './TextArea.css';

class TextArea extends Component {
  render() {
    const { information, handleChange } = this.props;
    return (
      <>
        <textarea
          name="information"
          id=""
          cols="30"
          rows="10"
          value={information}
          onChange={handleChange}></textarea>
        {information ? 'campo vazio!' : '-Ok-'}
      </>
    );
  }
}

export default TextArea;
