import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { MdAutoDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

function Users() {
  const printRef = useRef();

  const handleDownload = () => {
    const printContents = printRef.current.innerHTML;
    const blob = new Blob([printContents], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'users_report.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  const UsersData = [
    {
      id: 1,
      FirstName: 'Karangwa',
      LastName: 'Karangwa',
      Email: 'karangwa@gmail.com',
      Phone: '+250780000000',
    },
    {
      id: 2,
      FirstName: 'Karangwa',
      LastName: 'Karangwa',
      Email: 'karangwa@gmail.com',
      Phone: '+250780000000',
    },
    {
      id: 3,
      FirstName: 'Karangwa',
      LastName: 'Karangwa',
      Email: 'karangwa@gmail.com',
      Phone: '+250780000000',
    },
    {
      id: 4,
      FirstName: 'Karangwa',
      LastName: 'Karangwa',
      Email: 'karangwa@gmail.com',
      Phone: '+250780000000',
    },
    {
      id: 5,
      FirstName: 'Karangwa',
      LastName: 'Karangwa',
      Email: 'karangwa@gmail.com',
      Phone: '+250780000000',
    },
    {
      id: 6,
      FirstName: 'Karangwa',
      LastName: 'Karangwa',
      Email: 'karangwa@gmail.com',
      Phone: '+250780000000',
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center mt-10 mb-4">
        <h1 className="text-2xl flex justify-center font-bold text-center">Users</h1>
        <button
          onClick={handleDownload}
          className="btn btn-primary text-white bg-blue-500 hover:bg-green-600 rounded-md px-4 py-2"
        >
          Print report
        </button>
      </div>

      <div ref={printRef} className="print-container hidden">
        <div className="mb-4 text-center">
          <img src="path-to-your-logo.png" alt="Company Logo" className="mx-auto mb-2" style={{ width: '100px' }} />
          <h2 className="text-xl font-bold">Your Company Name</h2>
        </div>

        <div className="hidden md:flex md:flex-col">
          <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-blue-400">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-white"
                      >
                        First Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 pl-6 text-left text-sm font-semibold text-white"
                      >
                        Last Name
                      </th>
                      <th
                        scope="col"
                        className="hidden sm:table-cell py-3.5 pl-6 text-left text-sm font-semibold text-white"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="hidden lg:table-cell py-3.5 pl-6 text-left text-sm font-semibold text-white"
                      >
                        Phone
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {UsersData.map((user, index) => (
                      <tr key={index}>
                        <td className="w-full sm:w-auto max-w-0 sm:max-w-none whitespace-nowrap py-4 pl-4 text-sm text-gray-500">
                          {user.FirstName}
                          <dl className="lg:hidden font-normal">
                            <dt className="sr-only sm:hidden text-gray-700 mt-1">Email</dt>
                            <dd className="sm:hidden">{user.Email}</dd>
                            <dt className="sr-only text-gray-700 mt-1">Phone</dt>
                            <dd>{user.Phone}</dd>
                          </dl>
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 text-sm text-gray-500">
                          {user.LastName}
                        </td>
                        <td className="hidden sm:table-cell whitespace-nowrap py-4 pl-4 text-sm text-gray-500 truncate">
                          {user.Email}
                        </td>
                        <td className="hidden lg:table-cell whitespace-nowrap py-4 pl-4 text-sm text-gray-500">
                          {user.Phone}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:flex-col">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-blue-400">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-white"
                    >
                      First Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 pl-6 text-left text-sm font-semibold text-white"
                    >
                      Last Name
                    </th>
                    <th
                      scope="col"
                      className="hidden sm:table-cell py-3.5 pl-6 text-left text-sm font-semibold text-white"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="hidden lg:table-cell py-3.5 pl-6 text-left text-sm font-semibold text-white"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-6 text-left text-sm font-semibold text-white"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {UsersData.map((user, index) => (
                    <tr key={index}>
                      <td className="w-full sm:w-auto max-w-0 sm:max-w-none whitespace-nowrap py-4 pl-4 text-sm text-gray-500">
                        {user.FirstName}
                        <dl className="lg:hidden font-normal">
                          <dt className="sr-only sm:hidden text-gray-700 mt-1">Email</dt>
                          <dd className="sm:hidden">{user.Email}</dd>
                          <dt className="sr-only text-gray-700 mt-1">Phone</dt>
                          <dd>{user.Phone}</dd>
                        </dl>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 text-sm text-gray-500">
                        {user.LastName}
                      </td>
                      <td className="hidden sm:table-cell whitespace-nowrap py-4 pl-4 text-sm text-gray-500 truncate">
                        {user.Email}
                      </td>
                      <td className="hidden lg:table-cell whitespace-nowrap py-4 pl-4 text-sm text-gray-500">
                        {user.Phone}
                      </td>
                      <td className="whitespace-nowrap py-4 flex flex-1 justify-center items-center text-sm text-gray-500">
                        <Link className="mr-4">
                          <FaEdit className="text-2xl font-semibold text-gray-700 hover:text-green-500" />
                        </Link>
                        <button>
                          <MdAutoDelete className="text-2xl font-semibold text-gray-700 hover:text-red-500 rounded-full" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Card responsive for medium size */}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden">
        {UsersData.map((user, index) => (
          <div key={index} className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-gray-400">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900">{user.FirstName} {user.LastName}</p>
              <p className="truncate text-sm text-gray-500">{user.Email}</p>
              <p className="truncate text-sm text-gray-500">{user.Phone}</p>
            </div>
            <div className="flex flex-1 justify-center items-center text-sm text-gray-500">
              <Link className="mr-4">
                <FaEdit className="text-2xl font-semibold text-gray-700 hover:text-green-500" />
              </Link>
              <button>
                <MdAutoDelete className="text-2xl font-semibold text-gray-700 hover:text-red-500 rounded-full" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Users;
