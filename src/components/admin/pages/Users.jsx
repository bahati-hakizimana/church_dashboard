import React, { useEffect, useState } from 'react';
import { MdAutoDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from '../../../assets/website/adventist.jpeg';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('access_token');
        if (!token) {
          setError('No access token found');
          return;
        }

        const response = await fetch('http://127.0.0.1:8000/users/', {
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
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Error fetching users. Please check your credentials and try again.');
      }
    };

    fetchUsers();
  }, []);

  const handleDownloadPDF = () => {
    try {
      const doc = new jsPDF();

      const img = new Image();
      img.src = logo;

      img.onload = () => {
        doc.addImage(img, 'JPEG', 10, 10, 30, 30);
        doc.setFontSize(20);
        doc.text('Users Report', 50, 25);
        doc.setLineWidth(0.5);
        doc.line(10, 45, 200, 45);

        const tableColumn = ["username", "Email", "Created Date"];
        const tableRows = users.map(user => [
          user.username, user.email,
          new Date(user.created_date).toLocaleString()
        ]);

        doc.autoTable({
          head: [tableColumn],
          body: tableRows,
          startY: 50,
          theme: 'striped',
          styles: { fontSize: 10 },
          headStyles: {
            fillColor: [41, 128, 185],
            textColor: [255, 255, 255],
          },
        });

        doc.save('Users_report.pdf');
      };
    } catch (error) {
      console.error('Error generating PDF report:', error);
      setError('Error generating PDF report. Please try again.');
    }
  };

  const handleDelete = async (userId) => {
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setError('No access token found');
        return;
      }

      const response = await fetch(`http://127.0.0.1:8000/user/delete/${userId}/`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json(); // Get detailed error message
        throw new Error(`HTTP error! status: ${response.status}. ${errorData.message}`);
      }

      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
      setError(`Error deleting user: ${error.message}`);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className='flex justify-end'>
        <div className='flex justify-center items-center mb-4 gap-4'>
          <button onClick={handleDownloadPDF} className='bg-green-400 px-4 py-2 text-xl rounded-lg text-white'>
            Print Report
          </button>
          <Link to="/admin/adduser" className='bg-blue-500 px-4 py-2 text-white rounded-lg'>
            Add User
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-400 text-white">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-semibold">Username</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Email</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Role</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Created Date</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500">No users found.</td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id}>
                  <td className="py-4 px-6 text-sm text-gray-500">{user.username}</td>
                  <td className="py-4 px-6 text-sm text-gray-500">{user.email}</td>
                  <td className="py-4 px-6 text-sm text-gray-500">{user.role}</td>
                  <td className="py-4 px-6 text-sm text-gray-500">{new Date(user.created_date).toLocaleString()}</td>
                  <td className="py-4 px-6 text-sm text-gray-500 flex space-x-2">
                    <Link to={`/admin/updateuser/${user.id}`} className="text-gray-700 hover:text-green-500">
                      <FaEdit className="text-xl" />
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-gray-700 hover:text-red-500"
                    >
                      <MdAutoDelete className="text-xl" />
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
};

export default Users;
