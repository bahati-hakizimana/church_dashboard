import React, { useEffect, useState } from 'react';
import { MdAutoDelete } from 'react-icons/md';
import { FaEdit, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MemberEvent = () => {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const token = localStorage.getItem('access_token');
                if (!token) {
                    setError('No access token found');
                    return;
                }

                const response = await fetch('http://127.0.0.1:8000/event/events/', {
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
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
                setError('Error fetching events. Please check your credentials and try again.');
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="container mx-auto mt-10">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Event List</h1>

            </div>

            {error && <p className="text-red-500">{error}</p>}

            <div className="overflow-x-auto">
                <div className="inline-block min-w-full py-2 align-middle">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-blue-400 text-white">
                                <tr>
                                    <th className="py-3.5 pl-6 text-left text-sm font-semibold">Name</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold">Description</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold">Created Date</th>
                                    {/* <th className="px-3 py-3.5 text-left text-sm font-semibold">Actions</th> */}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {events.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="text-center py-4">No events found.</td>
                                    </tr>
                                ) : (
                                    events.map((event) => (
                                        <tr key={event.id}>
                                            <td className="py-4 pl-4 text-sm text-gray-500">{event.name}</td>
                                            <td className="py-4 pl-4 text-sm text-gray-500">{event.description}</td>
                                            <td className="py-4 pl-4 text-sm text-gray-500">{new Date(event.created_date).toLocaleString()}</td>
                                            {/* <td className="py-4 pl-4 text-sm text-gray-500 flex items-center">
                                                <Link to={`/edit-event/${event.id}`} className="mr-2 text-green-500 hover:text-green-700">
                                                    <FaEdit className="text-xl" />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(event.id)}
                                                    className="text-red-500 hover:text-red-700"
                                                >
                                                    <MdAutoDelete className="text-xl" />
                                                </button>
                                            </td> */}
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );

    // Function to handle delete event
    async function handleDelete(id) {
        try {
            const token = localStorage.getItem('access_token');
            if (!token) {
                setError('No access token found');
                return;
            }

            const response = await fetch(`http://127.0.0.1:8000/event/events/${id}/`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Remove the deleted event from the state
            setEvents(events.filter(event => event.id !== id));
        } catch (error) {
            console.error('Error deleting event:', error);
            setError('Error deleting event. Please try again.');
        }
    }
};

export default MemberEvent;

