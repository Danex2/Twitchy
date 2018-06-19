import React from 'react';
import { Button, Input } from 'semantic-ui-react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <div className="user-input">
        <form onSubmit={this.props.submit}>
          <Input type="text" class="input" onChange={this.props.getVideoGame} placeholder="game" />
          <Input type="text" class="input" onChange={this.props.getTwitchViewers} placeholder="viewer count" />
          <Button type="submit" size="large">Random streamer</Button>
        </form>
      </div>
    </div>
    );
  }
}

