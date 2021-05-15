import React from 'react';
 
  function withBackground(WrappedComponent) {
    return class extends React.Component {
      render() {
        return (
              <div className="wrapper" style={{'backgroundColor': 'yellow'}}>
                <WrappedComponent {...this.props} />
              </div>
        );
      }
    }
  }

export default withBackground;