import React, { useContext } from 'react';
import myContext from '../Context/myContext';

function DeletAllFilter() {
  const { setNumericValues } = useContext(myContext);
  const deletAllFitler = () => {
    setNumericValues([]);
  };

  return (

    <div>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => deletAllFitler() }
      >
        REMOVER TODOS OS FILTROS
      </button>
    </div>

  );
}
export default DeletAllFilter;
