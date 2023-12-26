import React from 'react'
import DashboardStatsGrid from '../Components/DashboardStatsGrid'
import ProjectChart from '../Components/ProjectChart'
import Priority from '../Components/Priority'
import TasksPieChart from '../Components/TasksPieChart'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Dashboard() {

	const location = useLocation();
  	const { state } = location;

	  useEffect(() => {

		if (state) {
		  const { userId, firstName, userEmail, token } = state;		  
		  console.log(`Received userId in Dashboard: ${userId}`);
		  console.log(`Received firstName in Dashboard: ${firstName}`);
		  console.log(`Received userEmail in Dashboard: ${userEmail}`);
		  console.log(`Received token in Dashboard: ${token}`);
		}

	  }, [state]);

	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<ProjectChart />
				<TasksPieChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				<Priority />

				{/* <TaskManagement/> */}
			</div>
		</div>
	)
}
