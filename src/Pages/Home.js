import { ContactList } from 'components/ContactList/ContactList.jsx';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  return (
    <>
      <ContactList stateItem={{ from: location }} />
    </>
  );
};

export default Home;
