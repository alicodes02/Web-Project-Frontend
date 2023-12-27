import React, {useState,useEffect} from 'react';
import './shared/styles/skeleton.css'
import { useNavigate} from 'react-router-dom';
import { BiTask } from "react-icons/bi";
import axios from 'axios';
import { FaTasks } from "react-icons/fa";

const Priority=()=>{
  const navigate=useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('https://outrageous-teal-purse.cyclic.app/api/tasks'); 
        const sortedTasks = response.data.sort((a, b) => {
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        });
        setTasks(sortedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);
	const OpenTaskPage=()=>{
        navigate("/dashboard/tasks");
	}
	const [openTask, setTaskOpen] = useState(false);

	const openTaskModal = () => {
        setTaskOpen(true);
    };

    const closeTaskModal = () => {
       setTaskOpen(false);
    };

  return (
    <div className="flex gap-4 w-full">
    <BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<BiTask className="text-2xl text-white" />
				</div>
				<div className="pl-4">
        <button className="text-sm text-gray-500 font-light hover:bg-gray-100" style={{ padding: '8px', borderRadius: '12px' }} onClick={OpenTaskPage}>Tasks</button>
					<div className="flex items-center">
						{/* <strong className="text-xl text-gray-700 font-semibold">{tasks}</strong> */}
            <button className="text-md text-gray-700 font-semibold hover:bg-gray-100" style={{ padding: '16px', borderRadius: '18px' }} onClick={openTaskModal}>Complete navigation module</button>
					<FaTasks className="text-2xl text-white" />
				</div>
				</div>
			</BoxWrapper>
       {openTask && (
  <div className="fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center">
    <div
      onClick={closeTaskModal}
      className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>
    <div className="bg-white rounded-md shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50">
      <div className="bg-indigo-500 text-white px-4 py-2 flex justify-between">
        <h2 className="text-lg font-semibold">Modal Title</h2>
      </div>
      <div className="p-4">
        <p>This is the content of the modal. You can add any content here. Lorem ipsum dolor sit amet</p>
      </div>
      <div className="border-t px-4 py-2 flex justify-end">
        <button onClick={closeTaskModal} className="px-3 py-1 bg-indigo-500 text-white rounded-md w-full sm:w-auto">
          Close
        </button>
      </div>
    </div>
  </div>
        )}
     </div>
  );
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center group hover:shadow-lg transition duration-10 ease-in-out cursor-pointer " style={{ borderRadius: '20px' }}>{children}</div>
}

export default Priority;



  