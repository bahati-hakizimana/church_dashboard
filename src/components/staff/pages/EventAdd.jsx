import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EventAdd = () => {
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
      navigate('/staff/events');
    } catch (error) {
      console.error('Error adding event:', error);
      setError('Error adding event. Please try again.');
    }
  };

  return (
    <div className="container mx-auto mt-10 max-w-2xl">
  <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Add New Event</h1>
  <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
    {error && <p className="text-red-600 mb-4">{error}</p>}
    {success && <p className="text-green-600 mb-4">{success}</p>}
    <div className="mb-6">
      <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Event Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base p-3"
        placeholder="Enter the event name"
        required
      />
    </div>
    <div className="mb-6">
      <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-2">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="5"
        className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base p-3"
        placeholder="Enter the event description"
        required
      />
    </div>
    <div className="flex justify-end">
      <button
        type="submit"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Event
      </button>
    </div>
  </form>
</div>

  );
};

export default EventAdd
