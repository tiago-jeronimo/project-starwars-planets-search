import React, { useContext } from 'react';
import myContext from '../Context/myContext';

function NameFilter() {
  const { filterByName: { name }, setNameFilter } = useContext(myContext);

  const handleChange = (e) => {
    const { value } = e.target;
    setNameFilter({ name: value });
  };
  return (
    <input
      type="text"
      data-testid="name-filter"
      name="filterName"
      value={ name }
      onChange={ handleChange }
    />
  );
}

export default NameFilter;
