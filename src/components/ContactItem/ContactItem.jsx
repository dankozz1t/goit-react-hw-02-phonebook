import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    handleClickDelete: PropTypes.func.isRequired,
  };

  render() {
    return (
      <li>
        <span>{this.props.name}</span>: <span>{this.props.number}</span>
        <button onClick={this.props.handleClickDelete} type="button">
          Delete
        </button>
      </li>
    );
  }
}
