import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'



const RADIAN = Math.PI / 180
const COLORS = ['#00C49F', '#FFBB28']

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5
	const x = cx + radius * Math.cos(-midAngle * RADIAN)
	const y = cy + radius * Math.sin(-midAngle * RADIAN)

	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	)
}

export default function TasksPieChart() {

	const [tasksStatus, setTasksStatus] = useState({});
	
	const getCompletedAndRemainingTasks = async () => {

		try {

			const response = await axios.get(`${process.env.REACT_APP_URL}/tasks/status`);
			setTasksStatus(response.data);

		}

		catch(error) {

			alert(error.response.data.message);
		}
	};


	useEffect (
		() => {

			getCompletedAndRemainingTasks();

		}, []
	);



	const data = [
		{ name: 'Completed', value: tasksStatus.completedTasks },
		{ name: 'Remaining', value: tasksStatus.remainingTasks },
	]

	return (
		<div className="w-[20rem] h-[22rem] bg-white p-4 rounded-[20px] border border-gray-200 flex flex-col hover:shadow-lg transition duration-10 ease-in-out cursor-pointer">
			<strong className="text-gray-700 font-large">Tasks</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<PieChart width={400} height={300}>
						<Pie
							data={data}
							cx="50%"
							cy="45%"
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={105}
							fill="#8884d8"
							dataKey="value"
						>
							{data.map((_, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
