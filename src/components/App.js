import React, { useState } from 'react';
import { Table } from './Table';
import { Player } from './Player';
import data from '../data/data.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSongUrl, setSelectedSongUrl] = useState('');
  const [tableData, setTableData] = useState([]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchButtonClick = () => {
    setSelectedSongUrl(searchTerm);
    addToTable(searchTerm);
  }

  const addToTable = (url) => {
    setTableData([...tableData, { id: Date.now() url }]);
  }

  const handleSongSelect = (url) => {
    setSelectedSongUrl(url);
  };

  return (
    <div>
        <div>
            <input
                type="text"
                value={searchTerm}
                placeholder="Enter URL"
                onChange={handleSearchTermChange}
            />
            <button onClick={handleSearchTermChange}>+</button>
        </div>
    <Player src={selectedSongUrl}/>
    <Table data={tableData} searchTerm={searchTerm} onSongSelect={handleSongSelect} />
    </div>
  );
}

export default App;