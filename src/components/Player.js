import React from 'react';
import ReachH5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Player({ src }) {

  return (
    <div>
        {(
            <ReachH5AudioPlayer
                src={src || ''}
                autoPlayAfterSrcChange={false}
                customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
            />
        )}
    </div>
  );
}

export { Player };