import React, { Component } from "react";
import classNames from "classnames";
class Result extends Component {
  render() {
    var colorReceived = `text-${this.props.color}`;
    var className = classNames(colorReceived, {
      "p-2": true,
      "mb-0": true
    });
    return (
      <div className="Result border p-3">
        <p className="text-capitalize">
          Color: <span className={colorReceived}>{this.props.color}</span> -
          Fontsize: {this.props.fontSize + "px"}
        </p>
        <div id="content" className="border border-success">
          <p
            className={className}
            style={{
              fontSize: this.props.fontSize
            }}
          >
            Nội dung setting
          </p>
        </div>
      </div>
    );
  }
}

export default Result;
