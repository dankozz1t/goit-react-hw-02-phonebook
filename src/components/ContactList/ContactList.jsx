import React, { Component } from 'react';

import ContactItem from './ContactItem/ContactItem';
import PropTypes from 'prop-types';

export default class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
    ).isRequired,
    handleClickDelete: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        {this.props.contacts.length > 0 && (
          <ul>
            {this.props.contacts.map(({ id, name, number }) => (
              <ContactItem
                key={id}
                name={name}
                number={number}
                handleClickDelete={() => {
                  this.props.handleClickDelete(id);
                }}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}
