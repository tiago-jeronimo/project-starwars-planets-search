import React from 'react';
import Table from './Components/Table';
import './App.css';
import ProviderContext from './Context/ProviderContext';
import StarWars from './Components/StarWars';

function App() {
  return (
    <ProviderContext>
      <StarWars />
      <Table />
    </ProviderContext>
  );
}

export default App;
