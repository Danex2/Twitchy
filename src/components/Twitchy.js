import React from "react";
import axios from "axios";
import Header from "./Header";
import Video from "./Video";
import Form from "./Form";

export default class Twitchy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streamer: "",
      game: "Overwatch",
      viewers: 0,
      url: "http://player.twitch.tv/?channel=dallas&muted=false"
    };
  }

  componentDidMount() {
    this.setState({ url: this.state.url });
  }
  getGame = event => {
    const twitchGame = event.target.value;
    this.setState({ game: twitchGame });
  };
  getViewers = event => {
    const twitchViewers = event.target.value;
    this.setState({ viewers: twitchViewers });
  };
  handleRandomClick = e => {
    e.preventDefault();
    const instance = axios.create({
      baseURL: "https://api.twitch.tv/kraken/streams/",
      timeout: 1000,
      headers: {
        Accept: "application/vnd.twitchtv.v5+json",
        "Client-ID": ""
      }
    });

    instance.get(`?game=${this.state.game}&limit=100`).then(response => {
      const streamerArray = [];
      for (let i = 0; i < response.data.streams.length; i++) {
        if (
          response.data.streams[i].viewers > this.state.viewers &&
          response.data.streams[i].broadcast_platform === "live"
        ) {
          streamerArray.push(response.data.streams[i].channel.name);
        }
      }
      const randomStreamer =
        streamerArray[Math.floor(Math.random() * streamerArray.length)];
      this.setState({ streamer: randomStreamer });
      this.setState({
        url: `http://player.twitch.tv/?channel=${
          this.state.streamer
        }&muted=false`
      });
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Video videoURL={this.state.url} />
        <Form
          getVideoGame={this.getGame}
          getTwitchViewers={this.getViewers}
          submit={this.handleRandomClick}
        />
      </div>
    );
  }
}
