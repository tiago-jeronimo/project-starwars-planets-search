import React, { useContext } from 'react';
import myContext from '../Context/myContext';
import styles from './styles.module.css';

function Table() {
  const { info, filterByName: { name } } = useContext(myContext);
  console.log(name);
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
        {info.length > 0 && info.filter((e) => e.name.includes(name)).map((element) => (
          <tr key={ element.name }>
            <td>{ element.name }</td>
            <td>{ element.rotation_period }</td>
            <td>{ element.orbital_period }</td>
            <td>{element.diameter}</td>
            <td>{element.climate}</td>
            <td>{element.gravity}</td>
            <td>{element.terrain}</td>
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
