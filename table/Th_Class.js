import React, { Component } from "react";

class Th extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      style: props.style,
    };
  }

  render() {
    return (
      <th key={this.props.key} style={this.state.style}>
        {this.state.value}
      </th>
    );
  }
}

export default Th;
