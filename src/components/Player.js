import React from 'react';
import 'react-h5-audio-player/lib/styles.css';

// const Player = () => (
//     <AudioPlayer
//         autoPlay
//         src=
//     />
// )
function Player({ src }) {

  return (
    <audioPlayer
        src={src}
        autoPlayAfterSrcChange={false}
        customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
    />
  );
}

export { Player };