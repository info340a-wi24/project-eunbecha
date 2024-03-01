import React from 'react';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import Player from './Player';

function Table({ data, searchTerm }) {
  const filteredData = data.filter(item => item.url.includes(searchTerm));

  return (
    <div>
      <table className='table table-bordered'>
        <TableHeader columnNames={['Song', 'Artist', 'Url']} />
        <tbody>
          {filteredData.map(item => (
            <TableRow key={item.id} props={item}>
              <td>
                <Player src={item.url} />
              </td>
            </TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { Table };