import React from 'react';
import Table from './Components/Table';
import './App.css';
import ProviderContext from './Context/ProviderContext';
import StarWars from './Components/StarWars';
import NameFilter from './Components/NameFilter';
import NumericalPhilters from './Components/NumericalPhilters';
import DeletAllFilter from './Components/DeletAllFilter';

function App() {
  return (
    <ProviderContext>
      <StarWars />
      <NameFilter />
      <NumericalPhilters />
      <DeletAllFilter />
      <Table />
    </ProviderContext>
  );
}

export default App;
