import React from 'react'; //import React library
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

/* Your code goes here */

function Table({props}) {
  let columnNames = ['Name', 'Song', 'Url'];
  
  let userInput = "UNDERSTAND"
  let selectedData = props.filter(item => item.song === userInput)
    .map(item => (
      <TableRow key={item.song} props={item}/>
    ));
  
  return(
    <table className='table table-bordered'>
      <TableHeader columnNames={columnNames}/>
      <tbody>
        {selectedData}
      </tbody>
    </table>
  );
}

export { Table };