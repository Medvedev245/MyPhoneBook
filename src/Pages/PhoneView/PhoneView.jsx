import { useSelector } from 'react-redux';

import { selectContactById } from 'components/Redux/selectors';

const PhoneView = () => {
  const currentContact = useSelector(selectContactById);

  return (
    <div>
      <div>
        <h2>Contact Details</h2>
        <div>
          <a href={`tel:${currentContact.number}`}>{currentContact.number}</a>
        </div>
      </div>
    </div>
  );
};

export default PhoneView;
