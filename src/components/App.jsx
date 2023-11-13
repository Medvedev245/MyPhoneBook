import { Filter } from './Filter/Filter';
import { Container, MainText, SecondMainText } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <Container>
      <MainText>Phonebook</MainText>
      <ContactForm />
      <SecondMainText>Contacts</SecondMainText>
      <Filter />
      <ContactList />
    </Container>
  );
};
