import React from "react";

const Video = props => (
  <div className="container resp-container">
    <iframe
      title="Twitch stream"
      src={props.videoURL}
      className="resp-iframe"
      frameBorder="0"
      scrolling="no"
      allowFullScreen="true"
    />
  </div>
);

export default Video;
