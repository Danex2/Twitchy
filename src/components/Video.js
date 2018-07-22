import React from "react";

const Video = props => (
  <div className="container">
    <iframe
      title="Twitch stream"
      src={props.videoURL}
      height="720"
      width="1280"
      frameBorder="0"
      scrolling="no"
      allowFullScreen="true"
    />
  </div>
);

export default Video;
