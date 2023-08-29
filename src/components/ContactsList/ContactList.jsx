import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsPersonVcard } from 'react-icons/bs';
import { TbPhone } from 'react-icons/tb';

import {
  fetchContacts,
  removeContact,
} from 'components/redux/contactsOperations';

import {
  ContactsItem,
  ContactsList,
  DeleteBtn,
  IsLoading,
} from './ContactList.styled';
import { IconContext } from 'react-icons';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.phoneBook.contacts.items);
  const filter = useSelector(state => state.phoneBook.filter);
  const isLoading = useSelector(state => state.phoneBook.contacts.isLoading);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return (
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      ) ?? []
    );
  };

  const contactsToRender = getFilteredContacts();
  return (
    <IconContext.Provider value={{ color: '#0d6efd', size: '1.5em' }}>
      {isLoading ? (
        <IsLoading>...is loading</IsLoading>
      ) : (
        <ContactsList>
          {contactsToRender.map(({ id, name, phone }) => (
            <ContactsItem key={id}>
              <BsPersonVcard size="1.2em" />
              {name}: <TbPhone size="1.2em" />
              {phone}
              <DeleteBtn
                type="button"
                onClick={() => dispatch(removeContact(id))}
              >
                Delete
              </DeleteBtn>
            </ContactsItem>
          ))}
        </ContactsList>
      )}
    </IconContext.Provider>
  );
};

export default ContactList;
