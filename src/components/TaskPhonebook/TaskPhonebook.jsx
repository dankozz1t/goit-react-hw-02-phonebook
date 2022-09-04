import Section from '../Section';
import React, { Component } from 'react';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';

import s from './TaskPhonebook.module.css';

export default class TaskPhonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div className={s.box}>
        <Section title="Phonebook">
          <ContactForm />
        </Section>

        <Section title="Contacts">
          <ContactList />
        </Section>
      </div>
    );
  }
}

// import PropTypes from 'prop-types';

//   static propTypes = {
//     prop: PropTypes,
//   };
