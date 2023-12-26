import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 40, // Assuming percentage completion values
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 30,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 20,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 27,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 18,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 23,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 34,
    pv: 4300,
    amt: 2100,
  },
];

export default function ProjectChart() {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-[20px] border border-gray-200 flex flex-col flex-1 hover:shadow-lg transition duration-10 ease-in-out cursor-pointer">
      <strong className="text-gray-700 font-large">Projects</strong>
      <div className="mt-3 w-full flex-1 text-xs items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
