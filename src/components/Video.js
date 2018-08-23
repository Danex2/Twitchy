import React from "react";

const Video = props => (
  <div className="video-container container center-align">
    <iframe
      title="Twitch stream"
      src={props.videoURL}
      height="1280"
      width="720"
      frameBorder="0"
      scrolling="no"
      allowFullScreen="true"
    />
  </div>
);

export default Video;
