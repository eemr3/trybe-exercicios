import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        <div>
          {list.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { listReducer } = state;
  return { list: listReducer };
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(List);
