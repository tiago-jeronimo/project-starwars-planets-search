import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';
import getApi from '../Services/API';

function ProviderContext({ children }) {
  const [info, setInfo] = useState([]);
  const [filterByName, setNameFilter] = useState(
    {
      name: '',
    },
  );

  const func = async () => {
    const saida = await getApi();
    setInfo(saida.results);
  };

  useEffect(() => {
    func();
  }, []);

  const state = {
    info,
    filterByName,
    setNameFilter,

  };

  return (
    <myContext.Provider value={ state }>
      { children }
    </myContext.Provider>
  );
}

ProviderContext.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default ProviderContext;
