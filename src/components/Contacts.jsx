import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/operations';
import { useEffect, useState } from 'react';
import { selectContacts, selectFilter, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const [filteredContacts, setFilteredContacts] = useState([]);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
    console.log('dispatch');
  }, [dispatch]);

  useEffect(() => {
    setFilteredContacts(
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
    console.log('filter');
  }, [filter, contacts]);

  if (isLoading) {
    return <h4>Loading contacts...</h4>;
  }

  if (filteredContacts.length === 0) {
    return <h4>No contacts available</h4>;
  }

  const handleDelete = contactId => dispatch(deleteContact(contactId));

  return (
    <ul>
      {filteredContacts.map(({ name, phone, id }) => (
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
