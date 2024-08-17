import React, { useEffect, useState } from 'react';
import { MdAutoDelete } from 'react-icons/md';
import { FaEdit, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from '../../../assets/website/adventist.jpeg'
const Activities = () => {
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

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        setError('No access token found');
        return;
      }

      const response = await fetch(`http://127.0.0.1:8000/event/delete/${id}/`, {
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
      alert('Event deleted successfully');
    } catch (error) {
      console.error('Error deleting event:', error);
      setError('Error deleting event. Please try again.');
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
        doc.text('Activites Report', 50, 25); // Positioning the text next to the logo

        // Draw a line under the header (optional)
        doc.setLineWidth(0.5);
        doc.line(10, 45, 200, 45);

        // Define the columns for the table
        const tableColumn = ["Name", "Description", "Created Date"];

        // Define the rows for the table
        const tableRows = events.map(event => [
          event.name, event.description,
          new Date(event.created_date).toLocaleString()
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
        doc.save('Activities_report.pdf');
      };
    } catch (error) {
      console.error('Error generating PDF report:', error);
      setError('Error generating PDF report. Please try again.');
    }
  };
  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Event List</h1>
        <div className=' flex justify-end items-end'>
          <div className=' flex gap-4'>
            <button onClick={handleDownloadPDF} className=' bg-green-400 px-4 py-2 text-xl rounded-lg text-white'>
              Print Report
            </button>
            <Link to="/admin/addevent" className="btn btn-primary text-white bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 flex items-center">
              <FaPlus className="mr-2" /> Add Event
            </Link>

          </div>

        </div>

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
                  <th className="px-3 py-3.5 text-left text-sm font-semibold">Actions</th>
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
                      <td className="py-4 pl-4 text-sm text-gray-500 flex items-center">
                        <Link to={`/admin/edit-event/${event.name}`} className="mr-2 text-green-500 hover:text-green-700">
                          <FaEdit className="text-xl" />
                        </Link>
                        <button
                          onClick={() => handleDelete(event.id)}
                          className="text-red-500 hover:text-red-700"
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
      </div>
    </div>
  );
};

export default Activities;
