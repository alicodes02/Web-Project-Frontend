import React, { useEffect, useState } from 'react'
import { BiTask } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import axios from 'axios';

export default function DashboardStatsGrid() {
	
	const [tasks,setTasks] = useState(0);
	const [projects,setProjects] = useState(0);

	const getTotalTasks = async() => {

		try {

			const response = await axios.get('http://localhost:3001/tasks/count');
			setTasks(response.data.count);
		}

		catch (error) {

			alert(error.response.data.message)
		}

	};

	const getTotalProjects = async() => {

		try {
			
			const response = await axios.get('http://localhost:3001/count-projects');
			setProjects(response.data.count);
		}

		catch (error) {

			alert(error.response.data.message)
		}

	};

	useEffect( () => {

		getTotalTasks();
		getTotalProjects();

	},0,0);

	return (
		<div className="flex gap-4">
			
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<BiTask className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<button className="text-sm text-gray-500 font-light">Total Tasks</button>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">{tasks}</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<GrProjects className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<button className="text-sm text-gray-500 font-light">Total Projects</button>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">{projects}</strong>
					</div>
				</div>
			</BoxWrapper>
			{/* <BoxWrapper> 
  <div className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-200">
    <CheckIcon className="text-xl text-blue-500" />
  </div>
  <div className="pl-4">
    <h3 className="text-lg font-medium text-gray-900">My tasks</h3>
    <div className="flex items-center mt-2">
      <Link href="#" className="text-blue-600">
        Upcoming
      </Link>
      <span className="px-4 text-gray-500">|</span>
      <Link href="#" className="text-red-600">
        Overdue (2)
      </Link>
      <span className="px-4 text-gray-500">|</span>
      <Link href="#" className="text-gray-500">
        Completed
      </Link>
    </div>
    <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      + Create task
    </button>
  </div>
</BoxWrapper>*/}
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center group hover:shadow-lg transition duration-10 ease-in-out cursor-pointer " style={{ borderRadius: '20px' }}>{children}</div>
}
