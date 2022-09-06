import React, { Component } from 'react';

export default class ContactList extends Component {
  render() {
    return (
      <div>
        {this.props.contacts.length > 0 && (
          <ul>
            {this.props.contacts.map(({ id, name, number }) => {
              return (
                <li key={id}>
                  <span>{name}</span>: <span>{number}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
