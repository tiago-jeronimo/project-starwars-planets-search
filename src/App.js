import React from 'react';
import Table from './Components/Table';
import './App.css';
import ProviderContext from './Context/ProviderContext';
import StarWars from './Components/StarWars';
import NameFilter from './Components/NameFilter';
import NumericalPhilters from './Components/NumericalPhilters';
import DeletAllFilter from './Components/DeletAllFilter';
import Order from './Components/Order';

function App() {
  return (
    <ProviderContext>
      <StarWars />
      <NameFilter />
      <NumericalPhilters />
      <DeletAllFilter />
      <Order />
      <Table />
    </ProviderContext>
  );
}

export default App;
