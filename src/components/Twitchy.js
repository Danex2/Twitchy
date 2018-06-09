import React from 'react';
import Header from './Header';

export default class Twitchy extends React.Component {
    constructor() {
        super();
        this.state = {
            streamer: '',
            game: '',
            viewers: 0
        }
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container">

                </div>
            </div>
        );
    }
}