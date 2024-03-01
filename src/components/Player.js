import React from 'react';
import audioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Player({ src }) {

  return (
    <div>
        {src && (
            <audioPlayer
                src={src}
                autoPlayAfterSrcChange={false}
                customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
            />
        )}
    </div>
  );
}

export { Player };