import React from 'react';

class Bird extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <h2>Bird {mouse.x}: {mouse.y}</h2>
    );
  }
}

export default Bird;