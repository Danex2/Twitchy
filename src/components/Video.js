import React from 'react';

const Video = (props) => (
   
        <div className="container">
                    <iframe
                        src={props.videoURL}
                        height="720"
                        width="1280"
                        frameBorder="0"
                        scrolling="no"
                        allowFullScreen="true">
                    </iframe>
                </div>
    
);

export default Video;