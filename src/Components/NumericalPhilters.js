import React, { useState, useContext } from 'react';
import myContext from '../Context/myContext';

function NumericalPhilters() {
  const { filterByNumericValues, setNumericValues } = useContext(myContext);

  const [ObjctFilter, setObjctFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const colunas = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const colunasFiltradas = () => {
    const filterColunas = filterByNumericValues.map((el) => el.column);
    const filtro = colunas.filter((ele) => !filterColunas.includes(ele));
    return filtro;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'column') {
      setObjctFilter({
        ...ObjctFilter,
        column: value,
      });
    }
    if (name === 'comparison') {
      setObjctFilter({
        ...ObjctFilter,
        comparison: value,
      });
    }
    if (name === 'number') {
      setObjctFilter({
        ...ObjctFilter,
        value,
      });
    }
  };

  const submitValue = (e) => {
    e.preventDefault();
    setNumericValues((prev) => [...prev, ObjctFilter]);
  };

  const removeFilter = (key) => {
    const filtrados = filterByNumericValues.filter((e, k) => k !== key);
    setNumericValues([...filtrados]);
  };

  return (
    <div>
      <form>
        <label htmlFor="coluna">
          Coluna:
          <select
            name="column"
            onChange={ handleChange }
            id="coluna"
            defaultValue="population"
            data-testid="column-filter"
          >
            { colunasFiltradas()
              .map((e, k) => (
                <option key={ k } value={ e }>{e}</option>
              ))}
          </select>
        </label>

        <label htmlFor="comparison">
          Operador:
          <select
            name="comparison"
            onChange={ handleChange }
            defaultValue="maior que"
            id="comparison"
            data-testid="comparison-filter"
          >
            <option value="maior que">maior que</option>
            <option value="igual a">igual a</option>
            <option value="menor que">menor que</option>
          </select>
        </label>
        <input
          type="number"
          name="number"
          onChange={ handleChange }
          defaultValue="0"
          data-testid="value-filter"
        />
        <button
          type="submit"
          data-testid="button-filter"
          onClick={ submitValue }
        >
          Filtrar
        </button>
      </form>
      {filterByNumericValues.map((e, k) => (
        <div key={ k } data-testid="filter">
          <p key={ k }>
            {e.column}
            {' '}
            {e.comparison}
            {' '}
            {e.value}
            {' '}
          </p>
          <button
            type="button"
            onClick={ () => removeFilter(k) }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
export default NumericalPhilters;
