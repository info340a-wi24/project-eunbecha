import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Player } from './Player';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import data from '../data/data.json';

function MainPage() {
    const [selectedSongUrl, setSelectedSongUrl] = useState('');
    const [songs, setSongs] = useState([]);

    const handleAddButtonClick = () => {
        const userInput = document.querySelector('.search-bar');
        const userInputText = userInput.value;
        setSongs(prevData => [...prevData, userInputText]);
        setSelectedSongUrl(userInputText); // Set the selected song URL
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
        <div>
            {/* nav */}
            <header>
                <div className="navigation">
                    <h1 className='logo'>Musicify</h1>
                    <Link to="/account">
                        <span className="material-icons md-64">account_circle</span>
                    </Link>
                </div>
            </header>

            {/* room code + listeners + search */}
            <div className="room">
                <div className="container">
                    <h1> Room <a href="#" className="room-code">57EMB3</a> </h1>
                    <p id="listening"><span className="v-divider"></span>4 Listening Now</p>
                </div>
                <p class="test-link">https://open.spotify.com/track/3sJrI1gdELlrExukUqce4O?si=f70ea557431e4ba4 (testing purposes)</p>
                <div className="search">
                    <input type="text" className="search-bar" placeholder="Paste Link" />
                    <button onClick={handleAddButtonClick} className="submit-button">+</button>
                </div>
            </div>

            {/* player */}
            <h2> Now Playing </h2>
            <Player src={selectedSongUrl}/> 

            {/* queue table */}
            <h2>In Queue</h2>
            <table className='table table-bordered'>
                <TableHeader columnNames={['Title', 'Artist', 'Link']} />
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