import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdAutoDelete } from 'react-icons/md';

function MemberNotification() {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token = localStorage.getItem('access_token'); // Get the access token from local storage
        if (!token) {
          setError('No access token found');
          return;
        }

        const response = await fetch('http://127.0.0.1:8000/notification/notifications/', {
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
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
        setError('Error fetching notifications. Please check your credentials and try again.');
      }
    };

    fetchNotifications();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('access_token'); // Get the access token from local storage
      if (!token) {
        setError('No access token found');
        return;
      }

      const response = await fetch(`http://127.0.0.1:8000/notification/notifications/${id}/`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Remove the deleted notification from the state
      setNotifications(notifications.filter(notification => notification.id !== id));
    } catch (error) {
      console.error('Error deleting notification:', error);
      setError('Error deleting notification. Please try again.');
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className=' bg-blue-500 text-white'>
            <tr>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Created Date</th>
            </tr>
          </thead>
          <tbody>
            {notifications.length === 0 ? (
              <tr>
                <td colSpan="3" className="py-4 text-center">No notifications found.</td>
              </tr>
            ) : (
              notifications.map((notification) => (
                <tr key={notification.id}>
                  <td className="py-2 px-4 border-b">{notification.description}</td>
                  <td className="py-2 px-4 border-b">{new Date(notification.created_date).toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MemberNotification;
