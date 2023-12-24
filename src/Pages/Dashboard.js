import React from 'react'
import DashboardStatsGrid from '../Components/DashboardStatsGrid'
import TransactionChart from '../Components/TransactionChart'
import RecentOrders from '../Components/RecentOrders'
import BuyerProfilePieChart from '../Components/BuyerProfilePieChart'
import PopularProducts from '../Components/PopularProducts'
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
				<TransactionChart />
				<BuyerProfilePieChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentOrders />
				<PopularProducts />
			</div>
		</div>
	)
}
