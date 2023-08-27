import React from 'react';
import "./chart.scss";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'January',
    2022: 4000,
    2023: 2400,
    amt: 2400,
  },
  {
    name: 'February',
    2022: 3000,
    2023: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    2022: 2000,
    2023: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    2022: 2780,
    2023: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    2022: 1890,
    2023: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    2022: 2390,
    2023: 3800,
    amt: 2500,
  },

];

 const Chart = () => {
  return (
    <div className='chart'>
      <div className='title'>Last 6 Months (Revenue)</div>
       <ResponsiveContainer width="100%" aspect={2/1}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="2023" fill="#8884d8" />
          <Bar dataKey="2022" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
};

export default Chart;
