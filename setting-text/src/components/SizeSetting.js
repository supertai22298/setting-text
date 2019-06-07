import React, { Component } from "react";
import { Button } from "reactstrap";
class SizeSetting extends Component {
  onChangeSize(params) {
    this.props.onChangeSize(params);
  }
  render() {
    return (
      <div className="SizeSetting border p-3">
        <div className="bg-info">
          <h3 className="text-white text-center">Size: {this.props.fontSize + 'px'}</h3>
        </div>
        <hr />
        <div>
          <Button
            color="success mr-3"
            onClick={() => this.onChangeSize(1)}
          >
            Tăng
          </Button>
          <Button
            color="success mr-3"
            onClick={() => this.onChangeSize(-1)}
          >
            Giảm
          </Button>
        </div>
      </div>
    );
  }
}

export default SizeSetting;
