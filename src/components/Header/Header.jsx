import { Filter } from 'components/Filter/Filter';
import { CreateContact } from 'components/CreateContact/CreateContact';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <div>
          <div>Phonebook</div>
        </div>
      </Link>
      <Filter />
      <CreateContact />
    </header>
  );
};
