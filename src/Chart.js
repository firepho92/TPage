import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
  {name: 'Page A', uv: 4000},
  {name: 'Page B', uv: 3000},
  {name: 'Page C', uv: 2000},
  {name: 'Page D', uv: 2780},
  {name: 'Page E', uv: 1890},
  {name: 'Page F', uv: 2390},
  {name: 'Page G', uv: 3490},
  {name: 'Page G', uv: 3490},
  {name: 'Page F', uv: 2390},
  {name: 'Page G', uv: 3490},
  {name: 'Page A', uv: 4000},
  {name: 'Page B', uv: 3000},
  {name: 'Page C', uv: 2000},
  {name: 'Page D', uv: 2780},
  {name: 'Page E', uv: 1890},
  {name: 'Page F', uv: 2390},
  {name: 'Page G', uv: 3490},
  {name: 'Page G', uv: 3490},
  {name: 'Page F', uv: 2390},
  {name: 'Page G', uv: 3490},
  {name: 'Page A', uv: 4000},
  {name: 'Page B', uv: 3000},
  {name: 'Page C', uv: 2000},
  {name: 'Page D', uv: 2780},
  {name: 'Page E', uv: 1890},
  {name: 'Page F', uv: 2390},
  {name: 'Page G', uv: 3490},
  {name: 'Page G', uv: 3490},
  {name: 'Page F', uv: 2390},
  {name: 'Page G', uv: 3490},
  {name: 'Page A', uv: 4000},
  {name: 'Page B', uv: 3000},
  {name: 'Page C', uv: 2000},
  {name: 'Page D', uv: 2780},
  {name: 'Page E', uv: 1890},
  {name: 'Page F', uv: 2390},
  {name: 'Page G', uv: 3490},
  {name: 'Page G', uv: 3490},
  {name: 'Page F', uv: 2390},
  {name: 'Page G', uv: 3490},
  {name: 'Page A', uv: 4000},
  {name: 'Page B', uv: 3000},
  {name: 'Page C', uv: 2000},
  {name: 'Page D', uv: 2780},
  {name: 'Page E', uv: 1890},
  {name: 'Page F', uv: 2390},
  {name: 'Page G', uv: 3490},
  {name: 'Page G', uv: 3490},
  {name: 'Page F', uv: 2390},
  {name: 'Page G', uv: 3490},
  {name: 'Page A', uv: 4000},
  {name: 'Page B', uv: 3000},
  {name: 'Page C', uv: 2000},
  {name: 'Page D', uv: 2780},
  {name: 'Page E', uv: 1890},
  {name: 'Page F', uv: 2390},
  {name: 'Page G', uv: 3490},
  {name: 'Page G', uv: 3490},
  {name: 'Page F', uv: 2390},
  {name: 'Page G', uv: 3490},
];

export default class Chart extends PureComponent {

  render() {
    return (
      <AreaChart
        width={1100}
        height={400}
        data={data}
        margin={{
          top: 10, right: 0, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#2979FF" fill="#2979FF" />
      </AreaChart>
    );
  }
}
