import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

export default class Chart extends PureComponent {
  handleClick = () => {
    console.log(this.props.data)
  }
  render() {
    return (
      <AreaChart
        width={1080}
        height={400}
        data={this.props.data}
        margin={{
          top: 10, right: 0, left: 0, bottom: 0,
        }}
        onClick={this.handleClick}
      >
        <defs>
          <linearGradient id="t" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FF1744" stopOpacity={0.8}/>
            <stop offset="50%" stopColor="#2979FF" stopOpacity={0.5}/>
            <stop offset="95%" stopColor="#2979FF" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <YAxis />
        <Tooltip />
        <Area  type="monotone" dataKey="temperatura" stroke="#263238" fill="url(#t)" />
      </AreaChart>
    );
  }
}
