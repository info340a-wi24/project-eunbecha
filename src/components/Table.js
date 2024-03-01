import React from 'react';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

function Table({ data, searchTerm, onSongSelect }) {
  const filteredData = data.filter(item => item.url.includes(searchTerm));

  return (
    <div>
      <table className='table table-bordered'>
        <TableHeader columnNames={['Song', 'Artist', 'Url']} />
        <tbody>
          {filteredData.map(item => (
            <TableRow key={item.id} props={item} onClick={() => onSongSelect(item.url)} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { Table };