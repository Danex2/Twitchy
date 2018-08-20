import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="user-input">
          <form onSubmit={this.props.submit}>
            <div className="row container center">
              <input
                className="col s12 m12 l12"
                label="Game"
                onChange={this.props.getVideoGame}
                autoComplete="off"
                placeholder="Search for a game!"
              />
              <input
                className="col s12 m12 l12"
                label="Viewer Count"
                onChange={this.props.getTwitchViewers}
                autoComplete="off"
                placeholder="Type in the base amount of viewers to look for"
              />
              <button
                className="submit-button waves-effect waves-light btn-large"
                type="submit"
              >
                Random Streamer
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
