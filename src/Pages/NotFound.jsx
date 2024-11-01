// src/Components/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-gray-800">404</h1>
        <p className="mt-4 text-2xl text-gray-600">Oops! Page Not Found.</p>
        <p className="mt-2 text-lg text-gray-500">The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-blue-400 rounded-md shadow hover:bg-blue-700 transition duration-200"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
