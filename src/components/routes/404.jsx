import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <div className="max-w-md">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-lg mt-4 text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 bg-blue text-white rounded hover:bg-blue-700 transition"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
