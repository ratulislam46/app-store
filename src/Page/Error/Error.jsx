import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">

        <img
          src="https://i.postimg.cc/SNXDrcYq/404-04-512.webp"
          alt="404 robot"
          className="w-48 my-4"
        />
        <h1 className="text-3xl md:text-6xl font-bold text-pink-600 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-warning">
          Go Back Home
        </Link>
      </div>
    );
};

export default Error;