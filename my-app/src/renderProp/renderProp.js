import React from 'react';

  class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <>
        <h1>Перемещайте курсор мыши!</h1>
        <div style={{ height: '200px', border: '2px solid black' }} onMouseMove={this.handleMouseMove}>
          {this.props.render(this.state)}
        </div>
        </>
      );
    }
  }

  function withMouse(Component) {
    return class extends React.Component {
      render() {
        return (
          <Mouse render={mouse => (
            <Component {...this.props} mouse={mouse}/>
          )}/>
        );
      }
    }
  }

export default withMouse;