import React from "react";

class Field extends React.Component {
  render() {
    return (
      <input type="text" onChange={this.props.action} />
    );
  }
}

export default Field;