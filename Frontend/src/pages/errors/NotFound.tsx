import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4 font-sans">
      <div className="flex flex-col items-center text-center p-4 lg:p-8 bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full">
        <div className="text-9xl font-extrabold text-red-500 animate-pulse">
          404
        </div>
        
        <h1 className="mt-8 text-2xl lg:text-4xl font-bold tracking-tight sm:text-5xl text-gray-100">
          Page Not Found
        </h1>
        
        <p className="mt-4 text-xl sm:text-2xl text-gray-300">
          The page you are looking for does not exist.
        </p>

        <p className="mt-6 text-gray-400 leading-relaxed max-w-sm">
          It looks like you've followed a broken link or entered a URL that doesn't exist on our site. Please check the address or try navigating back to our home page.
        </p>

        <div className="mt-10 flex space-x-4">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-gray-900 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 transform hover:scale-105"
          >
            Go Home
          </a>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 border border-gray-600 text-base font-medium rounded-full text-gray-300 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 transform hover:scale-105"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
