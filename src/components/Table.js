import React, { useState } from 'react';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

function Table({ props }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddButtonClick = () => {
    const userInput = searchTerm.trim();
    if (userInput) {
      const foundItem = props.find(item => item.url === userInput);
      if (foundItem) {
        setFilteredData(prevData => [...prevData, foundItem]);
      }
    }
    setSearchTerm('');
  };

  return (
    <div>
      <div>
        <input
          type="text"
          className="search-bar"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter URL"
        />
        <button onClick={handleAddButtonClick}>+</button>
      </div>
      <table className='table table-bordered'>
        <TableHeader columnNames={['Song', 'Artist', 'Url']} />
        <tbody>
          {filteredData.map(item => (
            <TableRow key={item.id} props={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { Table };