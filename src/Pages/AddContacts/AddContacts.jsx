import { ContactsForm } from 'components/ContactForm/ContactForm';
import { Link } from 'react-router-dom';

const AddContacts = () => {
  return (
    <div>
      <h2>Create Contact</h2>
      <div>
        <Link to="/"></Link>
      </div>
      <hr />
      <ContactsForm />
    </div>
  );
};

export default AddContacts;
