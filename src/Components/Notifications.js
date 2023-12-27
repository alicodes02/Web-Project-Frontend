import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
  
    if (date.getDate() === now.getDate() && date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()) {
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    } else {
      const timeDiff = now.getTime() - date.getTime();
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      return `${daysDiff}d ago`;
    }
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:3001/notifications');
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  // const handleDelete = async (notificationId) => {
  //   try {
  //     await axios.delete(`http://localhost:3001/delete-notification:${notificationId}`);
  //     setNotifications((prevNotifications) => prevNotifications.filter((n) => n.notificationId !== notificationId));
  //   } catch (error) {
  //     console.error('Error deleting notification:', error);
  //   }
  // };
  return (
    <div>
      <div className="w-full h-full bg-gray-800 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
        <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="notification">
          <div className="2xl:w-9/12 bg-gray-50 h-screen overflow-y-auto p-8 absolute right-0">
            <div className="flex items-center justify-between">
              <p tabIndex="0" className="focus:outline-none text-2xl font-semibold leading-6 text-gray-800">Notifications</p>
            </div>

            <div>
            {notifications.length === 0 ? (
               <p>No notifications found.</p>
               ) : (
             notifications.map((notification) => {
             const isNew = (Date.now() - new Date(notification.createdAt).getTime()) < 7 * 24 * 60 * 60 * 1000;
            return (
            <div key={notification._id} className="flex items-center p-4 bg-white rounded-lg shadow-xl mx-auto max-w-sm relative m-10">
              {isNew && (
                <span className="text-xs font-bold uppercase px-2 mt-2 mr-2 text-green-900 bg-green-400 border rounded-full absolute top-0 right-0">New</span>
              )}
              <span className="text-xs font-semibold uppercase m-1 py-1 mr-3 text-gray-500 absolute bottom-0 right-0">{formatTimestamp(notification.createdAt)}</span>

              <div className="ml-5">
                <h4 className="text-lg font-semibold leading-tight text-gray-900">{notification.title}</h4>
                <p className="text-sm text-gray-600">{notification.description}</p>
              </div>
              <button className="p-2 text-black-500 ml-2 hover:cursor-pointer hover:rounded-[10px] hover:bg-gray-100 hover:p-2">
                 X
               </button>
                {/*onClick={() => handleDelete(notification._id)}*/}
            </div>
          );
        })
      )}
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
