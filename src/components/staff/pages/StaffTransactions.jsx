import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from '../../../assets/website/adventist.jpeg'
import { Link } from 'react-router-dom';

function StaffTransactions() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch payments data from the API
    axios.get('http://127.0.0.1:8000/payment/payment/all/')
      .then(response => {
        setPayments(response.data.payments);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch payments.');
        setLoading(false);
      });
  }, []);


  // Report 
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
        doc.text('Transactions Report', 50, 25); // Positioning the text next to the logo

        // Draw a line under the header (optional)
        doc.setLineWidth(0.5);
        doc.line(10, 45, 200, 45);

        // Define the columns for the table
        const tableColumn = ["FirstName", "PhoneNumber", " Amount", "Status", "Provider", "Created Date"];

        // Define the rows for the table
        const tableRows = payments.map(payment => [
          payment.first_name, payment.phone_number, payment.amount, payment.status, payment.provider,
          new Date(payment.created_date).toLocaleString()
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
        doc.save('Transaction_report.pdf');
      };
    } catch (error) {
      console.error('Error generating PDF report:', error);
      setError('Error generating PDF report. Please try again.');
    }
  };

  if (loading) return <div className="text-center text-gray-500">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Transaction List</h1>
      <div className=' flex justify-end items-end mb-4'>
        <div className=' flex gap-2'>

        <button onClick={handleDownloadPDF} className=' bg-green-400 px-4 py-2 text-xl rounded-lg text-white'>
          Print Report
        </button>
        <Link to="/admin/pay" className=" bg-blue-500 text-white px-4 py-2 rounded-lg">Pay here</Link>

        </div>
        
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 border-b text-left text-sm font-medium">ID</th>
              <th className="py-3 px-4 border-b text-left text-sm font-medium">First Name</th>
              <th className="py-3 px-4 border-b text-left text-sm font-medium">Last Name</th>
              <th className="py-3 px-4 border-b text-left text-sm font-medium">Email</th>
              <th className="py-3 px-4 border-b text-left text-sm font-medium">Phone Number</th>
              <th className="py-3 px-4 border-b text-left text-sm font-medium">Amount</th>
              <th className="py-3 px-4 border-b text-left text-sm font-medium">Status</th>
              <th className="py-3 px-4 border-b text-left text-sm font-medium">Reference</th>
              <th className="py-3 px-4 border-b text-left text-sm font-medium">Provider</th>
              <th className="py-3 px-4 border-b text-left text-sm font-medium">Created Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {payments.map(payment => (
              <tr key={payment.id} className="hover:bg-gray-100 transition-colors">
                <td className="py-2 px-4 border-b text-sm">{payment.id}</td>
                <td className="py-2 px-4 border-b text-sm">{payment.first_name}</td>
                <td className="py-2 px-4 border-b text-sm">{payment.last_name}</td>
                <td className="py-2 px-4 border-b text-sm">{payment.email}</td>
                <td className="py-2 px-4 border-b text-sm">{payment.phone_number}</td>
                <td className="py-2 px-4 border-b text-sm">{payment.amount}</td>
                <td className="py-2 px-4 border-b text-sm">{payment.status}</td>
                <td className="py-2 px-4 border-b text-sm">{payment.reference}</td>
                <td className="py-2 px-4 border-b text-sm">{payment.provider}</td>
                <td className="py-2 px-4 border-b text-sm">{new Date(payment.created_date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default StaffTransactions;







