import React, { Component } from "react";
import { Button } from "reactstrap";
import classNames from "classnames";
class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["danger", "warning", "info", "secondary"]
    };
  }
  setActiveColor(color) {
    this.props.onReceiveColor(color);
  }
  render() {

    var colors = this.state.colors.map((color, key) => {
      let className = classNames({
        color,
        "ml-3": true,
        'text-capitalize': true,
        active: color === this.props.color
      });

      return (
        <Button
          color={color}
          className={className}
          key={key}
          onClick={() => this.setActiveColor(color)}
        >
          {color}
        </Button>
      );
    });

    return (
      <div className="ColorPicker border p-3">
        <div className="bg-info">
          <h3 className="text-white text-center">Color Picker</h3>
        </div>
        <hr />
        <div>{colors}</div>
      </div>
    );
  }
}

export default ColorPicker;
