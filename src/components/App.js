import React, { useState } from 'react';
import { Table } from './Table';
import { Player } from './Player';
import data from '../data/data.json';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import AccountPage from './AccountPage';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

function App({ props }) {
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
    setTableData(prevTableData => [...prevTableData, { id: Date.now(), url }]);
  }

  const handleSongSelect = (url) => {
    setSelectedSongUrl(url);
  };

  let columnNames = ['Song', 'Artist', 'Url'];
  const [songs, setSongs] = useState([]);

  const handleAddButtonClick = () => {
    let userInput = document.querySelector('.search-bar');
    let userInputText = userInput.value;
    setSongs(prevData => [...prevData, userInputText]);
  }
  
  let selectedData = props.filter(item => songs.includes(item.url))


  let finalData = selectedData.map(item => (
    <TableRow key={item.song} props={item}/>
  ));

  return (
    <div>
      <header>
        <div className="NavButton">
          <h1>Musicify</h1>
          <Link to="/account">
            <span className="material-icons md-64">account_circle</span>
          </Link>
        </div>
      </header>
      
      <Routes>
          <Route path="/account" element={<AccountPage />} />
      </Routes>

      <div className="room">
        <div className = 'roomAndListening'>
          <h2> Room <u>57EMB3</u> </h2>
          <p id="listeningNow">| 4 Listening Now</p>
        </div>
        <div className="search">
        <input type="text" className="search-bar" placeholder="Enter URL"/>
          <button onClick={handleAddButtonClick}>+</button>
        </div>
      </div>
      <h3> Now Playing </h3>
      <Player src={selectedSongUrl}/>
      <h3>In Queue</h3>
      <table className='table table-bordered'>
        <TableHeader columnNames={columnNames}/>
        <tbody>
          {finalData}
        </tbody>
      </table>
      <footer>
        <p>&copy; 2024 University of Washington Information School INFO 340 Group 7</p>
      </footer>
    </div>
  );
}

export default App;