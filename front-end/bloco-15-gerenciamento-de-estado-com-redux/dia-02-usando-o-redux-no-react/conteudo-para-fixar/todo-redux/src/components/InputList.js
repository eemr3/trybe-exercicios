import React, { Component } from "react";
import PropTypes from "prop-types";
import { addAssignment } from "../actions/addElement";
import { connect } from "react-redux";

class InputList extends Component {
  constructor() {
    super();
    this.state = {
      textValue: "",
    };
  }

  handleChangeInput = ({ target }) => {
    this.setState({ textValue: target.value });
  };

  render() {
    const { addTodo } = this.props;
    const { textValue } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={this.handleChangeInput}
        />
        <button onClick={() => addTodo(textValue)}>Adicionar tarefa</button>
      </div>
    );
  }
}

InputList.propTypes = {
  addTodo: PropTypes.func,
};

InputList.defaultProps = {
  addTodo: () => {},
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (value) => dispatch(addAssignment(value)),
});

export default connect(null, mapDispatchToProps)(InputList);
