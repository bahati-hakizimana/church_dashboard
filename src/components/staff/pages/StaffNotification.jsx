import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdAutoDelete } from 'react-icons/md';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from '../../../assets/website/adventist.jpeg';

function StaffNotification() {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token = localStorage.getItem('access_token');
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
      const token = localStorage.getItem('access_token');
      if (!token) {
        setError('No access token found');
        return;
      }

      const response = await fetch(`http://127.0.0.1:8000/notification/delete/${id}/`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setSuccess(result.message);
      // Remove the deleted notification from the state
      setNotifications(notifications.filter(notification => notification.id !== id));
    } catch (error) {
      console.error('Error deleting notification:', error);
      setError('Error deleting notification. Please try again.');
    }
  };

  const handleDownloadPDF = () => {
    try {
      const doc = new jsPDF();

      // Convert the image to a base64 string
      const img = new Image();
      img.src = logo;

      img.onload = () => {
        // Add the logo to the PDF
        doc.addImage(img, 'JPEG', 10, 10, 30, 30); // Positioning the logo

        // Add the report name next to the logo
        doc.setFontSize(20);
        doc.text('Notification Report', 50, 25); // Positioning the text next to the logo

        // Draw a line under the header (optional)
        doc.setLineWidth(0.5);
        doc.line(10, 45, 200, 45);

        // Define the columns for the table
        const tableColumn = ["Description", "Created Date"];

        // Define the rows for the table
        const tableRows = notifications.map(notification => [
          notification.description,
          new Date(notification.created_date).toLocaleString()
        ]);

        // Generate the table in the PDF
        doc.autoTable({
          head: [tableColumn],
          body: tableRows,
          startY: 50, // Start the table below the logo and title
          theme: 'striped',
          styles: {
            fontSize: 10,
          },
          headStyles: {
            fillColor: [41, 128, 185],
            textColor: [255, 255, 255],
          },
        });

        // Save the generated PDF
        doc.save('Notification_report.pdf');
      };
    } catch (error) {
      console.error('Error generating PDF report:', error);
      setError('Error generating PDF report. Please try again.');
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <div className='flex justify-end'>
        <div className='flex gap-4'>
          <button
            onClick={handleDownloadPDF}
            className="bg-green-500 text-white px-4 py-2 rounded-lg mb-2 hover:bg-green-700"
          >
            Download PDF
          </button>
          <Link to="/staff/AddNotification">
            <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Add Notification</button>
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className='bg-blue-500 text-white'>
            <tr>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Created Date</th>
              <th className="py-2 px-4 border-b">Actions</th>
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
                  <td className="py-2 px-4 border-b text-center">{notification.description}</td>
                  <td className="py-2 px-4 border-b text-center">{new Date(notification.created_date).toLocaleString()}</td>
                  <td className="py-2 px-4 border-b text-center">
                    <Link to={`/staff/update-notification/${notification.id}`}>
                      <button className="mr-2">
                        <FaEdit className="text-xl text-gray-700 hover:text-green-500" />
                      </button>
                    </Link>
                    <button onClick={() => handleDelete(notification.id)} className="text-red-500">
                      <MdAutoDelete className="text-xl hover:text-red-700" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StaffNotification;
