import React from 'react';

class Dog extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <h2>Dog {mouse.x}: {mouse.y}</h2>
    );
  }
}

export default Dog;