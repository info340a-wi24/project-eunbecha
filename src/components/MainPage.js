import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Player } from './Player';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import data from '../data/data.json';

function MainPage( {props} ) {

    const [selectedSongUrl, setSelectedSongUrl] = useState('');

    let columnNames = ['Song', 'Artist', 'Url'];
    const [songs, setSongs] = useState([]);

    const handleAddButtonClick = () => {
      let userInput = document.querySelector('.search-bar');
      let userInputText = userInput.value;
      setSongs(prevData => [...prevData, userInputText]);
      userInput.value = '';
    }

    let finalData = songs.map(songUrl => {
      const item = data.find(item => item.url === songUrl);
      if (item) {
        return <TableRow key={item.song} props={item} />;
      }
      return null;
    });


  return (
    <div className="container">
      <header>
        <div className="NavButton">
          <h1 className='logo'>Musicify</h1>
          <Link to="/account">
            <span className="material-icons md-64">account_circle</span>
          </Link>
        </div>
      </header>

      <div className="room">
        <div className="roomAndListening align-middle">
          <h1> Room <a href="#" className="room-code">57EMB3</a> </h1>
          <p id="listeningNow">| 4 Listening Now</p>
        </div>
        <div className="search">
          <input type="text" className="search-bar" placeholder="Enter URL" />
          <button onClick={handleAddButtonClick} className="submit-button">+</button>
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

export default MainPage;