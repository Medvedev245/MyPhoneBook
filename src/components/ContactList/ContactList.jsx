import { useDispatch, useSelector } from 'react-redux';
import { getAllContactsThunk, removeContact } from 'components/Redux/thunk';
import {
  selectTotalContacts,
  selectFilteredByName,
} from 'components/Redux/selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const ContactList = ({ stateItem }) => {
  const contactsAmount = useSelector(selectTotalContacts);
  const filteredContacts = useSelector(selectFilteredByName);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  const handleContactDetailsClick = contactId => {
    navigate(`contact/${contactId}`, { state: stateItem });
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <td>CONTACTS ({contactsAmount})</td>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map(contact => {
            const firstLetter = contact.name.slice(0, 1).toUpperCase();

            const contactName = contact.name.charAt(0).toUpperCase();
            const contactSliced = contact.name.slice(1);
            const ContactNameCapital = contactName + contactSliced;

            return (
              <tr
                key={contact.id}
                onClick={() => handleContactDetailsClick(contact.id)}
              >
                <td>
                  {firstLetter}

                  <span>{ContactNameCapital}</span>
                </td>

                <td>{contact.number}</td>

                <td className="ButtonsWrapper">
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      navigate(`contact/${contact.id}/edit`);
                    }}
                  ></button>
                  <button
                    onClick={e => {
                      e.stopPropagation();

                      const isConfirmed = window.confirm('Delete contact?');
                      if (isConfirmed) {
                        dispatch(removeContact(contact.id));
                      }
                    }}
                  ></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
