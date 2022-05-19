import React, { useState, useContext } from 'react';
import myContext from '../Context/myContext';

function NumericalPhilters() {
  const { filterByNumericValues, setNumericValues } = useContext(myContext);

  const [ObjctFilter, setObjctFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'column') {
      setObjctFilter({
        ...ObjctFilter,
        column: value,
      });
      console.log(ObjctFilter);
    }
    if (name === 'comparison') {
      setObjctFilter({
        ...ObjctFilter,
        comparison: value,
      });
      console.log(ObjctFilter);
    }
    if (name === 'number') {
      setObjctFilter({
        ...ObjctFilter,
        value,
      });
      console.log(ObjctFilter);
    }
  };

  const submitValue = (e) => {
    e.preventDefault();
    setNumericValues((prev) => [...prev, ObjctFilter]);
    console.log(filterByNumericValues);
  };
  return (
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
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
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
  );
}
export default NumericalPhilters;
