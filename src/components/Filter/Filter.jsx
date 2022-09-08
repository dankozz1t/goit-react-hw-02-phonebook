import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Filter extends Component {
  static propTypes = {
    handleFilter: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <label>
          Find contacts by name
          <input
            onChange={this.props.handleFilter}
            type="text"
            name="filter"
            title="Find contacts by name"
          />
        </label>
      </div>
    );
  }
}
