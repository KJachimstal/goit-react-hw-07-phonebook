import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/operations';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  getContacts,
  getFilter,
  getError,
  getIsLoading,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const [filteredContacts, setFilteredContacts] = useState([]);
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  console.log(`
  Contacts: ${contacts}
  IsLoading: ${isLoading}
  Filter (${filter.type}): ${filter}
  Error: ${error}`);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredContacts(
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, contacts]);

  if (isLoading) {
    return <h4>Loading contacts...</h4>;
  }

  if (contacts.length === 0) {
    return <h4>No contacts avaliable</h4>;
  }

  const handleDelete = contactId => dispatch(deleteContact(contactId));

  return (
    <ul>
      {contacts.map(({ name, phone, id }) => (
        <li key={id}>
          {name}: {phone}{' '}
          <button type="submit" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
