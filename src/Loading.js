import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="loading" style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', height: 450 + 'px'}}>
        <span className="pulse" onClick={this.handleClick}></span>
      </div>
    );
  }
}

export default Loading;
