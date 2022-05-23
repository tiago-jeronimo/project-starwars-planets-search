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
  const [planetas, setPlanetas] = useState();

  const [filterByNumericValues, setNumericValues] = useState([]);

  const func = async () => {
    const saida = await getApi();
    const n = -1;
    const p = 1;
    const infos = saida.results.sort((a, b) => {
      const names = a.name < b.name;
      return names ? n : p;
    });
    setInfo(infos);
  };

  useEffect(() => {
    func();
  }, []);

  const [Ordenamento, setOrdenamento] = useState({});
  const [Ordem, setOrdem] = useState(
    { column: 'population', sort: 'ASC' },
  );

  const [validade, setValidade] = useState(false);

  const comparePlanetas = () => {
    const { column, sort } = Ordenamento;
    const informações = info;
    if (sort === 'ASC') {
      return informações
        .sort((a, b) => a[column].localeCompare(b[column], 'pt-BR'))
        .sort((a, b) => +a[column] - +b[column]);
    } if (sort === 'DESC') {
      return informações
        .sort((a, b) => a[column].localeCompare(b[column], 'pt-BR'))
        .sort((a, b) => +b[column] - +a[column]);
    }
  };
  const state = {
    info,
    filterByName,
    setNameFilter,
    filterByNumericValues,
    setNumericValues,
    planetas,
    setPlanetas,
    comparePlanetas,
    setOrdem,
    Ordenamento,
    setOrdenamento,
    validade,
    setValidade,
    Ordem,
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
