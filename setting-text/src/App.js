import React, { Component } from "react";
import "./App.css";
import { Row, Col, Container } from "reactstrap";
import Reset from "./components/Reset";
import Result from "./components/Result";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "danger",
      fontSize: 15
    };
    this.onSetColor = this.onSetColor.bind(this);
    this.onSetReset = this.onSetReset.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
  }
  onSetColor(params) {
    this.setState({
      color: params
    });
  }
  onSetReset() {
    this.setState({
      color: "danger",
      fontSize: 15
    });
  }
  onChangeSize(value) {
    this.setState({
      fontSize:
        this.state.fontSize + value >= 6
          ? (this.state.fontSize += value)
          : this.state.fontSize
    });
  }

  render() {
    return (
      <div className="App mt-5">
        <Container>
          <Row>
            <Col xs="12" sm="12" md="12" lg="12" className="mt-3">
              <h2 className="text-center text-white border rounded p-3 bg-dark ">
                Text Setting by TeiiPlz
              </h2>
            </Col>

            <Col xs="6" sm="6" md="6" lg="6">
              <ColorPicker
                color={this.state.color}
                onReceiveColor={this.onSetColor}
              />
            </Col>

            <Col xs="6" sm="6" md="6" lg="6">
              <SizeSetting
                fontSize={this.state.fontSize}
                onChangeSize={this.onChangeSize}
              />
              <Reset onReceiveReset={this.onSetReset} />
            </Col>

            <Col xs="12" sm="12" md="12" lg="12" className="mt-3">
              <Result color={this.state.color} fontSize={this.state.fontSize} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
