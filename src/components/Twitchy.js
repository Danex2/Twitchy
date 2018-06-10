import React from 'react';
import Header from './Header';
import axios from 'axios';

export default class Twitchy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            streamer: '',
            game: '',
            viewers: 0,
            url: ''
        }
    }

    //passing state into this doesn't though?
    componentDidMount() {
        const instance = axios.create({
            baseURL: 'https://api.twitch.tv/kraken/streams/',
            timeout: 1000,
            headers: {
                'Accept': 'application/vnd.twitchtv.v5+json',
                'Client-ID': 'dlu1hinslk0p1ekafzbgm6d2jlq5ow'
            }
        });

        instance.get('?game=Overwatch&limit=100').then((response) => {
            const streamer_array = []
            for (let i = 0; i < response.data.streams.length; i++) {
                if (response.data.streams[i].viewers > 0 && response.data.streams[i].broadcast_platform === 'live') {

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
                    <div className="user-input">
                        <button onClick={this.handleRandomClick}>Random streamer</button>
                    </div>
                </div>
            </div>
        );
    }
}