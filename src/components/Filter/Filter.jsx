import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { contactsFilter } from 'components/Redux/filterSlice';
import { selectFilteredContact } from 'components/Redux/selectors';

export const Filter = () => {
  const nameFromFilter = useSelector(selectFilteredContact);
  const dispatch = useDispatch();

  return (
    <styled
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'rgb(241 243 244)',
        boxShadow: 0,
        borderRadius: '8px',
        transition: 'background-color 250ms ease-in, box-shadow 250ms ease-in',
      }}
    >
      <styled
        placeholder="Search..."
        inputProps={{ 'aria-label': 'filter' }}
        name="filter"
        value={nameFromFilter}
        onChange={e => dispatch(contactsFilter(e.currentTarget.value))}
      />
    </styled>
  );
};
