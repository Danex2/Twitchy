import React from 'react';
import Header from './Header';
import axios from 'axios';

export default class Twitchy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            streamer: '',
            game: 'Overwatch',
            viewers: 0,
            url: ''
        }
    }

    //passing state into this doesn't though?
    componentDidMount() {
        this.setState({ url: "http://player.twitch.tv/?channel=dallas&muted=false" })
    }
    handleRandomClick = (e) => {
        e.preventDefault();
        const instance = axios.create({
            baseURL: 'https://api.twitch.tv/kraken/streams/',
            timeout: 1000,
            headers: {
                'Accept': 'application/vnd.twitchtv.v5+json',
                'Client-ID': '<client-id here>'
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
                <div className="container">
                    <iframe
                        src={this.state.url}
                        height="720"
                        width="1280"
                        frameBorder="0"
                        scrolling="no"
                        allowFullScreen="true">
                    </iframe>
                </div>
                <div className="user-input">
                    <form onSubmit={this.handleRandomClick}>
                        <button type='submit'>Random streamer</button>
                        <input type='text' placeholder='game' />
                        <input type='text' placeholder='viewer count' />
                    </form>
                </div>
            </div>
        );
    }
}