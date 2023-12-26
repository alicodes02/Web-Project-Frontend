import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineUsers,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi';

import { GrTask } from "react-icons/gr";
import { IoAddCircle } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import TaskManagement from '../../Pages/TaskManagement';
import Layout from '../../Components/shared/Layout';

export const DASHBOARD_SIDEBAR_LINKS = (userId, userName,userEmail, userToken) => [

	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <HiOutlineViewGrid />,
		component: <Layout userId = {userId} userName = {userName} userEmail={userEmail} userToken={userToken} />,
	},

	{
		key: 'tasks',
		label: 'Manage Tasks',
		path: '/dashboard/tasks',
		icon: <GrTask />,
		component: <TaskManagement userEmail={userEmail} userToken={userToken} />,
	},

	{
		key: 'addproject',
		label: 'Add Project',
		path: '/dashboard/projectmanagement',
		icon: <IoAddCircle />
	},

	{
		key: 'Manage Project',
		label: 'Manage Projects',
		path: '/dashboard/allprojects',
		icon: <HiOutlineCube />
	},

	{
		key: 'orders',
		label: 'Calendar',
		path: '/dashboard/calendar',
		icon: <FaRegCalendarAlt />
	},
	{
		key: 'customers',
		label: 'Meet',
		path: '/dashboard/meet',
		icon: <HiOutlineUsers />
	},

	{
		key: 'customers',
		label: 'Manage Meetings',
		path: '/dashboard/manage-meetings',
		icon: <HiOutlineUsers />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/dashboard/messages',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/dashboard/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/dashboard/support',
		icon: <HiOutlineQuestionMarkCircle />
	},
]
