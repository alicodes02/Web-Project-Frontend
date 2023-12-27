import React, { useEffect, useState } from 'react'
import { BiTask } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import axios from 'axios';
import { IoAlbumsOutline} from 'react-icons/io5'
import { FaTasks } from "react-icons/fa";

export default function DashboardStatsGrid() {
	
	const [tasks,setTasks] = useState(0);
	const [projects,setProjects] = useState(0);

	const getTotalTasks = async() => {

		try {

			const response = await axios.get('https://outrageous-teal-purse.cyclic.app/tasks/count');
			setTasks(response.data.count);
		}

		catch (error) {

			alert(error.response.data.message)
		}

	};

	const getTotalProjects = async() => {

		try {
			
			const response = await axios.get('https://outrageous-teal-purse.cyclic.app/count-projects');
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
					<FaTasks className="text-2xl text-white" />
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
					<IoAlbumsOutline className="text-2xl text-white" />
				</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center group hover:shadow-lg transition duration-10 ease-in-out cursor-pointer " style={{ borderRadius: '20px' }}>{children}</div>
}
 
