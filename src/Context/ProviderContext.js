import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';
import getApi from '../Services/API';

function ProviderContext({ children }) {
  const [info, setInfo] = useState([]);

  const func = async () => {
    const saida = await getApi();
    setInfo(saida.results);
  };

  useEffect(() => {
    func();
  }, []);

  return (
    <myContext.Provider value={ info }>
      { children }
    </myContext.Provider>
  );
}

ProviderContext.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default ProviderContext;
