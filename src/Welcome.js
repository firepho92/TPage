import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div className="welcome" style={{color: '#263238', fontSize: 2 + 'em', display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', height: 450 + 'px'}}>
        {this.props.msg}
        <span className="pulse" onClick={this.handleClick}></span>
      </div>
    );
  }
}

export default Welcome;
