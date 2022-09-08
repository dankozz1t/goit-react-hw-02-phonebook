import React from 'react';
import PropTypes from 'prop-types';

function ContactItem({ name, number, handleClickDelete }) {
  return (
    <li>
      <span>{name}</span>: <span>{number}</span>
      <button onClick={handleClickDelete} type="button">
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
