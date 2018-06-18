import React from 'react';
import Header from './Header';
import axios from 'axios';
import Video from './Video';
import Form from './Form';

export default class Twitchy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            streamer: '',
            game: 'Overwatch',
            viewers: 0,
            url: 'http://player.twitch.tv/?channel=dallas&muted=false'
        }
    }

    //passing state into this doesn't though?
    getGame = (event) => {
        const twitchGame = event.target.value;
        this.setState({ game: twitchGame });
    }
    getViewers = (event) => {
        const twitchViewers = event.target.value;
        this.setState({ viewers: twitchViewers });
    }
    componentDidMount() {
        this.setState({ url: this.state.url })
    }
    handleRandomClick = (e) => {
        e.preventDefault();
        const instance = axios.create({
            baseURL: 'https://api.twitch.tv/kraken/streams/',
            timeout: 1000,
            headers: {
                'Accept': 'application/vnd.twitchtv.v5+json',
                'Client-ID': '<client-id>'
            }
        });

        instance.get(`?game=${this.state.game}&limit=100`).then((response) => {
            const streamer_array = []
            for (let i = 0; i < response.data.streams.length; i++) {
                if (response.data.streams[i].viewers > this.state.viewers && response.data.streams[i].broadcast_platform === 'live') {

                    streamer_array.push(response.data.streams[i].channel.name);
                }

            }
            const random_streamer = streamer_array[Math.floor(Math.random() * streamer_array.length)];
            this.setState({ streamer: random_streamer });
            this.setState({ url: `http://player.twitch.tv/?channel=${this.state.streamer}&muted=false` });
        })
    }
    render() {
        return (
            <div>
                <Header />
                <Video 
                    videoURL={this.state.url}
                />
                <Form
                    getVideoGame={this.getGame}
                    getTwitchViewers={this.getViewers}
                    submit={this.handleRandomClick}
                />
            </div>
        );
    }
}