import React, { Component } from 'react';
import Chart from './Chart';

class Statistics extends Component {

  _dayMean = (data) => {
    let mean = 0;
    for(let i = 0; i < data.length; i++) {
      mean += parseFloat(data[i].temperatura);
    }
    mean = mean / data.length;
    return mean.toFixed(2);
  }

  _dayMax = (data) => {
    let max;
    max = data[0].temperatura;
    for(let i = 0; i < data.length; i++) {
      if(data[i].temperatura >= max)
        max = data[i].temperatura;
    }
    return max;
  }

  _dayMin = (data) => {
    let min;
    min = data[0].temperatura;
    for(let i = 0; i < data.length; i++) {
      if(data[i].temperatura <= min)
        min = data[i].temperatura;
    }
    return min;
  }



  render() {
    return (
      <div className="statistics">
        <p>{this.props.title}</p>
        <div className="chart">
          <div style={{flex: 1}}>
            <Chart data={this.props.data}/>
          </div>
        </div>
        <div className="columna" style={{marginTop: 2 + 'em'}}>
          <span className="pulse" onClick={this.handleClick}></span>
          Promedio: {this._dayMean(this.props.data) + '°C'}
          <span className="pulseW" onClick={this.handleClick}></span>
          Máx.: {this._dayMax(this.props.data) + '°C'}
          <span className="pulseC" onClick={this.handleClick}></span>
          Mín.: {this._dayMin(this.props.data) + '°C'}
        </div>
      </div>
    );
  }
}

export default Statistics;
