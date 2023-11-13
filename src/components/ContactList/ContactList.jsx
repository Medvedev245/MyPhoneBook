import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { onDelete } from 'components/Redux/contactsSlice';

export const ContactList = () => {
  // const value = useSelector(state => state.contacts.contacts);
  const value = useSelector(getContacts);
  function getContacts(state) {
    return state.contacts.contacts;
  }

  const nameFromFilter = useSelector(state => state.filter);
  const filteredContacts = value.filter(({ name }) =>
    name.toLowerCase().includes(nameFromFilter.toLowerCase())
  );

  const dispatch = useDispatch();

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <Button
            onClick={() => {
              dispatch(onDelete(id));
            }}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
