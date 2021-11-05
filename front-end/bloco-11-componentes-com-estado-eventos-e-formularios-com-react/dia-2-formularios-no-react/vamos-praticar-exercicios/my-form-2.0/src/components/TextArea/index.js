import React, { Component } from 'react';

import './TextArea.css';

class TextArea extends Component {
  render() {
    const { textInfo, textId, textLength, children, handleMouseEnter, message } =
      this.props;
    return (
      <label htmlFor={textId} className="container-label">
        {children}
        <textarea
          name={textInfo}
          id={textId}
          cols="30"
          rows="10"
          maxLength={textLength}
          onMouseEnter={handleMouseEnter}
          placeholder={message}></textarea>
      </label>
    );
  }
}

export default TextArea;
