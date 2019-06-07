import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Reset extends Component {
  constructor(props) {
    super(props);
    this.setResetColor = this.setResetColor.bind(this);
  }
  setResetColor() {
    this.props.onReceiveReset();
  }
  render() {
    return (
      <div className="Reset border p-3">
        <Button color="primary active" onClick={this.setResetColor}>Reset</Button>
      </div>
    )
  }
}

export default Reset;