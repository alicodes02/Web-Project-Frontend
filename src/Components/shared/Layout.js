import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import { useLocation } from 'react-router-dom';


export default function Layout(/*{userId, userName, userEmail, userToken }*/props) {

	const location = useLocation();
  	const { state } = location;

	if (state) {

		var { userId, userName,userEmail, userToken } = state;

		console.log(`Received userId in Layout State: ${userId}`);
		console.log(`Received firstName in Layout State: ${userName}`);
		console.log(`Received userEmail in Layout State: ${userEmail}`);
		console.log(`Received token in Layout State: ${userToken}`);

	  }

	  else {

		var userId = props.userId;
		var userName = props.userName;
		var userEmail  = props.userEmail;
		var userToken = props.userToken;

		console.log(`Received userId in Layout Props: ${userId}`);
		console.log(`Received firstName in Layout Props: ${userName}`);
		console.log(`Received userEmail in Layout Props: ${userEmail}`);
		console.log(`Received token in Layout Props: ${userToken}`);

	  }

	return (
		<div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
			<Sidebar userId = {userId} userFirstName = {userName} userEmail = {userEmail} userToken = {userToken}/>
			<div className="flex flex-col flex-1">
				<Header />
				<div className="flex-1 p-4 min-h-0 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
