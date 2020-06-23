import React, { Component } from "react";

class Td extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      style: props.style,
    };
  }

  render() {
    return (
      <td key={this.props.key} style={this.state.style}>
        {this.state.value}
      </td>
    );
  }
}

export default Td;
