import React from "react";
import "./App.css";

class App extends React.Component {
  state = { temp: 0, color: "" };

  onChangeTempPlus = () => {
    const temp = this.state.temp + 1;
    this.setState({ temp: temp });
  };

  onChangeTempMinus = () => {
    const temp = this.state.temp - 1;
    this.setState({ temp: temp });
  };

  oncolor = () => {
    if (0 < this.state.temp < 10) {
      this.setState({ color: "blue" });
    }
    if (this.state.temp >= 10) {
      this.setState({ color: "orange" });
    }
    if (this.state.temp >= 20) {
      this.setState({ color: "red" });
    }

  };

  render() {
    return (
      <div className="container" onClick={this.oncolor} style={{ backgroundColor: `${this.state.color}` }}>
        <div className="display">{this.state.temp}℃</div>
        <button onClick={this.onChangeTempPlus}>+</button>
        <button onClick={this.onChangeTempMinus}>-</button>
      </div>
    );
  }
}

export default App;
