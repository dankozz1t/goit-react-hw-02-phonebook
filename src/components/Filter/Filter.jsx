import React, { Component } from 'react';

export default class Filter extends Component {
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
