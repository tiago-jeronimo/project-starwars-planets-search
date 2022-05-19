import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import myContext from '../Context/myContext';

function Forms() {
  const { setNumericValues } = useContext(myContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (value) => {
    setNumericValues((prev) => [
      ...prev,
      {
        column: value.coluna,
        comparison: value.operador,
        value: value.number,
      }]);
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <label htmlFor="coluna">
        Coluna:
        <select
          name="coluna"
          { ...register('coluna') }
          id="coluna"
          data-testid="column-filter"
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>

      <label htmlFor="operador">
        Operador:
        <select
          name="operador"
          { ...register('operador') }
          id="operador"
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
        { ...register('number') }
        defaultValue="0"
        data-testid="value-filter"
      />
      <button
        type="submit"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>
  );
}
export default Forms;
