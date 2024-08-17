import React, { useState } from 'react';

function AddNotification() {
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('access_token'); // Get the access token from local storage

    if (!token) {
      setErrorMessage('No access token found');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/notification/add/', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSuccessMessage('Notification added successfully!');
      setDescription('');
      setErrorMessage('');
    } catch (error) {
      console.error('Error adding notification:', error);
      setErrorMessage('Error adding notification. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Notification</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              rows="4"
              required
            />
          </div>
          {successMessage && (
            <div className="mb-4 text-green-500 font-bold">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="mb-4 text-red-500 font-bold">
              {errorMessage}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Add Notification
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNotification;
