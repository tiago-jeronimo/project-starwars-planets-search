import React, { useContext } from 'react';
import myContext from '../Context/myContext';
import styles from './styles.module.css';

function Table() {
  const { filterByNumericValues, info,
    filterByName: { name }, validade, comparePlanetas } = useContext(myContext);

  const planetsFiltrado = () => {
    const number = 0;
    let filter = info;
    if (filterByNumericValues.length > number) {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        if (comparison === 'maior que') {
          filter = filter.filter((el) => +el[column] > +value);
        }
        if (comparison === 'menor que') {
          filter = filter.filter((el) => +el[column] < +value);
        }
        if (comparison === 'igual a') {
          filter = filter.filter((el) => +el[column] === +value);
        }
      });
    }
    return filter;
  };

  return (
    <table className={ styles.cssTabela }>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { (validade ? comparePlanetas() : planetsFiltrado())
          .filter((e) => e.name.includes(name)).map((element) => (
            <tr key={ element.name }>
              <td data-testid="planet-name">{ element.name }</td>
              <td>{ element.rotation_period }</td>
              <td>{ element.orbital_period }</td>
              <td>{ element.diameter }</td>
              <td>{ element.climate }</td>
              <td>{ element.gravity }</td>
              <td>{ element.terrain }</td>
              <td>
                {' '}
                { Number(element.surface_water) }
                {' '}
              </td>
              <td>{element.population}</td>
              <td>{element.films}</td>
              <td>{element.created}</td>
              <td>{element.edited}</td>
              <td>{element.url}</td>
            </tr>
          )) }
      </tbody>
    </table>
  );
}
export default Table;
