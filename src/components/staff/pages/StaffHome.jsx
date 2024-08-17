import React, { useEffect, useState } from 'react';

function StaffHome() {
  const [totalUsers, setTotalUsers] = useState(null);
  const [totalNotifications, setTotalNotifications] = useState(null);
  const [totalEvents, setTotalEvents] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const token = localStorage.getItem('access_token');
        if (!token) {
          setError('No access token found');
          return;
        }

        const response = await fetch('http://127.0.0.1:8000/total_users/', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setTotalUsers(data.total_users);
      } catch (error) {
        console.error('Error fetching total users:', error);
        setError('Error fetching total users. Please try again.');
      }
    };

    const fetchTotalNotifications = async () => {
      try {
        const token = localStorage.getItem('access_token');
        if (!token) {
          setError('No access token found');
          return;
        }

        const response = await fetch('http://127.0.0.1:8000/notification/count/', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setTotalNotifications(data.number_of_notifications);
      } catch (error) {
        console.error('Error fetching total notifications:', error);
        setError('Error fetching total notifications. Please try again.');
      }
    };

    const fetchTotalEvents = async () => {
      try {
        const token = localStorage.getItem('access_token');
        if (!token) {
          setError('No access token found');
          return;
        }

        const response = await fetch('http://127.0.0.1:8000/event/count/', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setTotalEvents(data.number_of_events);
      } catch (error) {
        console.error('Error fetching total events:', error);
        setError('Error fetching total events. Please try again.');
      }
    };

    fetchTotalUsers();
    fetchTotalNotifications();
    fetchTotalEvents();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4"> Home</h1>

      {error && <p className="text-red-500">{error}</p>}

      <div className="flex justify-center space-x-6">
        {/* Card for Total Users */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold">{totalUsers !== null ? totalUsers : 'Loading...'}</p>
        </div>

        {/* Card for Total Notifications */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
          <h2 className="text-xl font-semibold mb-2">Total Notifications</h2>
          <p className="text-3xl font-bold">{totalNotifications !== null ? totalNotifications : 'Loading...'}</p>
        </div>

        {/* Card for Total Events */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
          <h2 className="text-xl font-semibold mb-2">Total Events</h2>
          <p className="text-3xl font-bold">{totalEvents !== null ? totalEvents : 'Loading...'}</p>
        </div>
      </div>
    </div>
  );
}

export default StaffHome
