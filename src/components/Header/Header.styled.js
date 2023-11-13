import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Filter } from 'components/Filter/Filter';
import { CreateContact } from 'components/CreateContact/CreateContact';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <Link to="/" style={{ textDecoration: 'none', color: '#696969' }}>
        <div>
          <AccountCircleIcon sx={{ fontSize: 50, color: '#47A76A' }} />
          <div>Phonebook</div>
        </div>
      </Link>
      <Filter />
      <CreateContact />
    </header>
  );
};
