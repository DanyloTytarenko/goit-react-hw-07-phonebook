import ContactList from './ContactsList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, TitleContacts, TitlePhonebook } from './App.styled';

const App = () => {
  return (
    <Container>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm></ContactForm>
      <TitleContacts>Contacts</TitleContacts>
      <Filter></Filter>
      <ContactList></ContactList>
      <ToastContainer />
    </Container>
  );
};

export default App;
