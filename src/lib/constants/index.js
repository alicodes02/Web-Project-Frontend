import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'tasks',
		label: 'Manage Tasks',
		path: '/dashboard/tasks',
		icon: <HiOutlineCube />
	},

	{
		key: 'addproject',
		label: 'Add Project',
		path: '/dashboard/projectmanagement',
		icon: <HiOutlineCube />
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
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'customers',
		label: 'Meet',
		path: '/dashboard/meet',
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
