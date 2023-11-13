import { Link } from 'react-router-dom';

export const CreateContact = () => {
  return (
    <>
      <Link to="/addContact" style={{ textDecoration: 'none' }}>
        <p>Create contact</p>
      </Link>

      <Link to="/addContact" style={{ textDecoration: 'none' }}></Link>
    </>
  );
};
