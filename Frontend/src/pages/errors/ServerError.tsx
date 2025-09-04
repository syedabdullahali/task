import { Link } from 'react-router-dom';

const ServerError = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4 font-sans">
      <div className="flex flex-col items-center text-center p-8 bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full">
        <div className="text-9xl font-extrabold text-red-500 animate-pulse">
          500
        </div>
        
        <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl text-gray-100">
          Internal Server Error
        </h1>
        
        <p className="mt-4 text-xl sm:text-2xl text-gray-300">
          Oops! Something went wrong on our end.
        </p>

        <p className="mt-6 text-gray-400 leading-relaxed max-w-sm">
          We're sorry for the inconvenience. Our team has been notified and is working
          to resolve the issue as quickly as possible. Please try reloading the page,
          or come back in a little while.
        </p>

        <div className="mt-10 flex space-x-4">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-gray-900 bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 transform hover:scale-105"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-6 py-3 border border-gray-600 text-base font-medium rounded-full text-gray-300 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 transform hover:scale-105"
          >
            Reload Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServerError;
