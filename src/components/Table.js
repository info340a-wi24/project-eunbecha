import React from 'react'; //import React library
import { useState } from 'react';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

/* Your code goes here */

function Table({props}) {
  let columnNames = ['Song', 'Artist', 'Url'];
  const [songs, setSongs] = useState([]);

  const handleAddButtonClick = () => {
    let userInput = document.querySelector('.search-bar');
    let userInputText = userInput.value;
    setSongs(prevData => [...prevData, userInputText]);
  }
  
  let selectedData = props.filter(item => songs.includes(item.song))


  let finalData = selectedData.map(item => (
    <TableRow key={item.song} props={item}/>
  ));
  
  return(
    <div>
      <div>
        <input type="text" className="search-bar" />
        <button onClick={handleAddButtonClick}>+</button>
      </div>
      <table className='table table-bordered'>
      <TableHeader columnNames={columnNames}/>
      <tbody>
        {finalData}
      </tbody>
    </table>
    </div>
  );
}

export { Table };