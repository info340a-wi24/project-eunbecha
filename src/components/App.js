import React, { useState } from 'react';
import { Table } from './Table';
import { Player } from './Player';
import data from '../data/data.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
        <div>
        <input
          type="text"
          value={searchTerm}
          placeholder="Enter URL"
        />
        <button onClick={handleSearchTermChange}>+</button>
        </div>
    <Player />
      <Table data={data} searchTerm={searchTerm} />
    </div>
  );
}

export default App;