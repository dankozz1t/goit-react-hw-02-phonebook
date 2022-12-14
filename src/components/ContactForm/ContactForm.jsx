import React, { Component } from 'react';

import { login } from './utils';
import { ConfettiContainer } from '../Confetti';

import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import s from './ContactForm.module.css';

export class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const newContact = { id: nanoid(), name, number };

    this.props.onAddContact(newContact);

    this.setState({ name: '', number: '' });

    login.submit();
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleFormSubmit}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
          />
        </label>

        <label className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.handleInputChange}
            required
          />
        </label>

        <button className={s.btn} type="submit">
          Add contact
        </button>
        <ConfettiContainer />
      </form>
    );
  }
}
