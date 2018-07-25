import React from "react";
import { Input, Icon, Row, Button } from "react-materialize";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="user-input">
          <form onSubmit={this.props.submit}>
            <Row>
              <Input
                s={4}
                label="Game"
                onChange={this.props.getVideoGame}
                autoComplete="off"
              >
                <Icon>android</Icon>
              </Input>
              <Input
                s={4}
                label="Viewer Count"
                onChange={this.props.getTwitchViewers}
                autoComplete="off"
              >
                <Icon>people</Icon>
              </Input>
              <Button className="submit-button" type="submit">
                Random Streamer
              </Button>
            </Row>
          </form>
        </div>
      </div>
    );
  }
}
