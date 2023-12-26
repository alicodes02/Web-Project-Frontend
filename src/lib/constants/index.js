import {
	HiOutlineViewGrid,

	HiOutlineQuestionMarkCircle,
} from 'react-icons/hi'
import { IoCalendarOutline,IoEarthOutline,IoAlbumsOutline,IoCopyOutline,IoSettingsOutline  } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import Layout from '../../Components/shared/Layout'
export const DASHBOARD_SIDEBAR_LINKS = (userId, userName,userEmail, userToken) =>[
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
		icon: <FaTasks />
	},

	{
		key: 'addproject',
		label: 'Add Project',
		path: '/dashboard/projectmanagement',
		icon: <IoAlbumsOutline />
	},

	{
		key: 'Manage Project',
		label: 'Manage Projects',
		path: '/dashboard/allprojects',
		icon: <IoCopyOutline />
	},

	{
		key: 'orders',
		label: 'Calendar',
		path: '/dashboard/calendar',
		icon: <IoCalendarOutline />
	},
	{
		key: 'customers',
		label: 'Meet',
		path: '/dashboard/meet',
		icon: <IoEarthOutline/>
	},
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/dashboard/settings',
		icon: <IoSettingsOutline />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/dashboard/support',
		icon: <HiOutlineQuestionMarkCircle />
	},
]
