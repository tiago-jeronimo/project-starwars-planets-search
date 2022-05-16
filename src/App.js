import React from 'react';
import Table from './Components/Table';
import './App.css';
import ProviderContext from './Context/ProviderContext';
import StarWars from './Components/StarWars';
import NameFilter from './Components/NameFilter';

function App() {
  return (
    <ProviderContext>
      <NameFilter />
      <StarWars />
      <Table />
    </ProviderContext>
  );
}

export default App;
