import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/actions';
import { useEffect, useState } from 'react';

export const Contacts = () => {
  const dispatch = useDispatch();
  const [filteredContacts, setFilteredContacts] = useState([]);
  const contacts = useSelector(store => store.contacts.items);
  const filter = useSelector(store => store.contacts.filter);

  useEffect(() => {
    setFilteredContacts(
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, contacts]);

  if (filteredContacts.length === 0) {
    return <h4>No contacts avaliable</h4>;
  }

  const handleDelete = contactId => dispatch(deleteContact(contactId));

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}{' '}
          <button type="submit" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
