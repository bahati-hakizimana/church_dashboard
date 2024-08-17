import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEvent = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setError('No access token found');
        return;
      }

      const response = await fetch('http://127.0.0.1:8000/event/add/', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setSuccess('Event added successfully!');
      setName('');
      setDescription('');
      setError(null);

      // Navigate back to the events list or to any other route
      navigate('/admin/activites');
    } catch (error) {
      console.error('Error adding event:', error);
      setError('Error adding event. Please try again.');
    }
  };

  return (
    <div className="container mx-auto mt-10 max-w-lg">
    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add New Event</h1>
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
      {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
      {success && <p className="text-green-600 mb-4 text-center">{success}</p>}
      <div className="mb-6">
        <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">Event Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ease-in-out duration-150"
          placeholder="Enter event name"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="description" className="block text-lg font-semibold text-gray-700 mb-2">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ease-in-out duration-150"
          placeholder="Enter event description"
          required
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition ease-in-out duration-150"
        >
          Add Event
        </button>
      </div>
    </form>
  </div>  
  );
};

export default AddEvent;
