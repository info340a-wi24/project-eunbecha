import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import data from '../data/data.json';

function Player({ src }) {
  const [currentSong, setCurrentSong] = useState(null);

  const getSongFromUrl = (url) => {
    return data.find(item => item.url === url) || null;
  };

  const song = getSongFromUrl(src);

  const handleAudioPlay = () => {
    setCurrentSong(song);
  };

  return (
    <div className="player">
      {!currentSong && ( 
        <div>
          <p className="song-title">Song Title</p>
          <p className="artist-name">Artist Name</p>
        </div>
      )}
      {currentSong && (
        <div>
          <p className="song-title">{currentSong.song}</p>
          <p className="artist-name">{currentSong.artist}</p>
        </div>
      )}
      <ReactAudioPlayer
            src={song ? song.localfile : ''}
            autoPlay
            controls
            onPlay={handleAudioPlay}
      />
    </div>
  );
}

export { Player };