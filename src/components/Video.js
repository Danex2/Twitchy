import React from 'react';

const Video = () => (
    <div>
        <div className="container">
            <iframe
                src="http://player.twitch.tv/?channel=dallas&muted=true"
                height="720"
                width="1280"
                frameborder="0"
                scrolling="no"
                allowfullscreen="true">
            </iframe>
        </div>


        <div className="user-input">
            <input type='text' placeholder='game' />
            <input type='text' placeholder='viewer count' />
            <button>Random streamer</button>
        </div>
    </div>
);

export default Video;

