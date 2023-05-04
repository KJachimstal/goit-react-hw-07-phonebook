import { useState } from 'react';
import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { Contacts } from './Contacts';
import { FindContacts } from './FindContacts';

export const App = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = async event => {
    await setName(event.target.value);
  };

  const handleChangeNumber = async event => {
    await setNumber(event.target.value);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Phonebook">
        <ContactForm
          name={name}
          number={number}
          onNameChange={handleChangeName}
          onNumberChange={handleChangeNumber}
        />
      </Section>
      <Section title="Contacts">
        <FindContacts />
        <Contacts />
      </Section>
    </div>
  );
};
