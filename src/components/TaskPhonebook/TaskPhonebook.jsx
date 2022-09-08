import Section from '../Section';
import React, { Component } from 'react';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
import { nanoid } from 'nanoid';
import s from './TaskPhonebook.module.css';
import Filter from '../Filter';

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
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const contactId = nanoid();
    const newName = form.elements.name.value;
    const number = form.elements.number.value;

    const newContact = { id: contactId, name: newName, number };
    const isUnique = !this.state.contacts.find(({ name }) => name === newName);

    if (isUnique) {
      this.setState({ contacts: [...this.state.contacts, { ...newContact }] });
    } else {
      alert(`${newName} is already in contacts`);
    }

    form.reset();
  };

  handleClickDelete = e => {
    console.log(1);
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    let renderContacts = contacts;

    renderContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.trim())
    );

    return (
      <div className={s.box}>
        <Section title="Phonebook">
          <ContactForm handleSubmit={this.handleSubmit} />
        </Section>

        <Section title="Contacts">
          <Filter handleFilter={this.handleFilter} />

          <ContactList
            contacts={renderContacts}
            handleClickDelete={this.handleClickDelete}
          />
        </Section>
      </div>
    );
  }
}
