import Section from '../Section';
import React, { Component } from 'react';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
import { nanoid } from 'nanoid';
import s from './TaskPhonebook.module.css';
// import Filter from './Filter';

export default class TaskPhonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Sergey Mentor 2', number: '666-66-66' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const contactId = nanoid();
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const newContact = { id: contactId, name, number };

    this.setState({ name: name, number: number });

    this.setState({ contacts: [...this.state.contacts, { ...newContact }] });

    form.reset();
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    let renderContacts = contacts;

    if (filter) {
      renderContacts = contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter)
      );
    }

    return (
      <div className={s.box}>
        <Section title="Phonebook">
          <ContactForm handleSubmit={this.handleSubmit} />
        </Section>

        <Section title="Contacts">
          <label>
            Find contacts by name
            <input
              onChange={this.handleFilter}
              type="text"
              name="filter"
              title="Find contacts by name"
            />
          </label>
          {/* <Filter onChange={this.handleFilter} /> */}

          <ContactList contacts={renderContacts} />
        </Section>
      </div>
    );
  }
}

// import PropTypes from 'prop-types';

//   static propTypes = {
//     prop: PropTypes,
//   };
