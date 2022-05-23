import React, { useContext } from 'react';
import myContext from '../Context/myContext';

function Order() {
  const { Ordem, setOrdem, setOrdenamento, setValidade } = useContext(myContext);

  const colunas = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const submitBtn = () => {
    setOrdenamento(Ordem);
    setValidade(true);
  };
  const HandleOrden = ({ target }) => (
    setOrdem({
      ...Ordem,
      [target.name]: target.value,
    })
  );

  return (
    <div>
      <fieldset>
        <legend>ORDENARÇÃO </legend>
        <label htmlFor="coluna">
          Ordenar:
          <select
            name="column"
            id="coluna"
            defaultValue="population"
            data-testid="column-sort"
            onChange={ HandleOrden }
          >
            { colunas.map((e, k) => (
              <option key={ k } value={ e }>{e}</option>
            ))}
          </select>
        </label>
        <label htmlFor="ASC">
          <input
            name="sort"
            type="radio"
            value="ASC"
            data-testid="column-sort-input-asc"
            onChange={ HandleOrden }

          />
          Ascendente
        </label>
        <label htmlFor="DESC">
          <input
            name="sort"
            type="radio"
            value="DESC"
            data-testid="column-sort-input-desc"
            onChange={ HandleOrden }
          />
          Decrescente
        </label>
        <button
          type="submit"
          data-testid="column-sort-button"
          onClick={ submitBtn }
        >
          ORDENAR
        </button>

      </fieldset>
    </div>
  );
}
export default Order;
