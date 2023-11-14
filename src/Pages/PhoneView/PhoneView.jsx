import { FiPhone } from 'react-icons/fi';
import { DetailsWrapper, PhoneNumberWrapper } from './PhoneView.styled';
import { useSelector } from 'react-redux';

import { selectContactById } from 'components/Redux/selectors';

const PhoneView = () => {
  const currentContact = useSelector(selectContactById);
  return (
    <div>
      <DetailsWrapper>
        <h2>Contact Details</h2>
        <PhoneNumberWrapper>
          <FiPhone size={21} />
          <a href={`${currentContact.phone}`}>{currentContact.phone}</a>
        </PhoneNumberWrapper>
      </DetailsWrapper>
    </div>
  );
};

export default PhoneView;
