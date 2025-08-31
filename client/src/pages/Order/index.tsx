import React from 'react';

const Order = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 flex items-center justify-center font-sans">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl overflow-hidden">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button className="h-10 w-10 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex items-center space-x-4">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">SHP-5567</h1>
                <span className="flex items-center space-x-1 px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>In Progress</span>
                </span>
                <span className="flex items-center space-x-1 px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.368 15c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Delay</span>
                </span>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <button className="h-10 w-10 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="h-10 w-10 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 text-sm text-gray-500">
            <span>Shipping date Apr 14, 2023</span>
            <span className="sm:mx-4 hidden sm:inline-block">•</span>
            <span>Order ID <span className="text-gray-800 font-semibold">Order-12567</span></span>
          </div>
          <div className="flex flex-col sm:flex-row mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="flex-1 px-4 py-2 text-sm sm:text-base font-semibold text-gray-800 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200">
              Cancel Order
            </button>
            <button className="flex-1 px-4 py-2 text-sm sm:text-base font-semibold text-gray-800 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Notify Customer
            </button>
          </div>
        </div>

        {/* Shipping details */}
        <div className="p-6 sm:p-8 border-b border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center text-gray-500">
            <div className="flex flex-col items-start space-y-2">
              <p className="font-semibold text-gray-800">2118 horrnidge Cir. Syracuse, 35624</p>
              <p>3517 W. Gray St. Utica, 57867</p>
            </div>
            <div className="flex justify-center sm:justify-start">
              <img src="https://placehold.co/100x40/f3f4f6/1f2937?text=FedEx" alt="FedEx Logo" className="rounded-md" />
            </div>
          </div>
          <div className="mt-8 flex justify-between items-center relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 rounded-full -z-10 transform -translate-y-1/2"></div>
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black text-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3.25 7.75a.75.75 0 001.5 0v-2.5a.75.75 0 00-1.5 0v2.5zM12 9a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 0112 9z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="mt-2 text-xs sm:text-sm text-gray-500">Order</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black text-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 1a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zm-8 1a1 1 0 011 1v1a1 1 0 11-2 0V5a1 1 0 011-1zm-2 5a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm12 0a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5 14a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm10 0a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4 9a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm12 0a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-7-2h2a1 1 0 110 2h-2a1 1 0 110-2z" clipRule="evenodd" />
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-7a1 1 0 00-2 0v3a1 1 0 002 0v-3z" />
                </svg>
              </div>
              <span className="mt-2 text-xs sm:text-sm text-gray-500">Shipped</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-300 text-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1m-6 9h-3a2 2 0 01-2-2v-3m13 0v3a2 2 0 01-2 2h-3m-6-13a2 2 0 012-2h3m0 0v-2" />
                </svg>
              </div>
              <span className="mt-2 text-xs sm:text-sm text-gray-500">Out for Delivery</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-300 text-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14v12H5V9z" />
                </svg>
              </div>
              <span className="mt-2 text-xs sm:text-sm text-gray-500">Delivered</span>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-500">
            <div>
              <p className="font-semibold text-gray-800">Total Time</p>
              <p>21 days, 6 hours</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Departure Time</p>
              <p>23 Aug 23 14:11 PM</p>
            </div>
            <div className="col-span-2">
              <p className="font-semibold text-gray-800">Expected Arrived</p>
              <p>14 Nov 23 18:32 PM</p>
            </div>
          </div>
          {/* Warning */}
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mt-8" role="alert">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-2 2a1 1 0 100 2h2v5h1v-5h2a1 1 0 100-2h-5z" clipRule="evenodd" />
              </svg>
              <p className="ml-3 text-sm font-medium">
                High volume. During peak seasons like holidays, there can be a significant increase in the number of packages being shipped, leading to delays.
              </p>
            </div>
          </div>
        </div>

        {/* Shipment Status */}
        <div className="p-6 sm:p-8">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Shipment Status</h2>
          <div className="space-y-6">
            <div className="relative flex items-center">
              <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-200 rounded-full"></div>
              <div className="relative flex-shrink-0 w-4 h-4 rounded-full bg-black z-10"></div>
              <div className="ml-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-2 text-sm text-gray-800">
                  <span className="font-semibold">Order Placed</span>
                  <span className="text-gray-500 hidden sm:inline-block">•</span>
                  <span>10 Jun 2024</span>
                  <span>14:00 PM</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Shipment information received by seller</p>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Silicon Valley, CA</span>
                </div>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-200 rounded-full"></div>
              <div className="relative flex-shrink-0 w-4 h-4 rounded-full bg-black z-10"></div>
              <div className="ml-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-2 text-sm text-gray-800">
                  <span className="font-semibold">Preparing to ship</span>
                  <span className="text-gray-500 hidden sm:inline-block">•</span>
                  <span>10 Jun 2024</span>
                  <span>14:30 PM</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Seller is preparing to ship you order</p>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-200 rounded-full"></div>
              <div className="relative flex-shrink-0 w-4 h-4 rounded-full bg-black z-10"></div>
              <div className="ml-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-2 text-sm text-gray-800">
                  <span className="font-semibold">Confirm Shipment</span>
                  <span className="text-gray-500 hidden sm:inline-block">•</span>
                  <span>10 Jun 2024</span>
                  <span>15:30 PM</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Shipment information received by carrier</p>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="relative flex-shrink-0 w-4 h-4 rounded-full bg-black z-10"></div>
              <div className="ml-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-2 text-sm text-gray-800">
                  <span className="font-semibold">Picked up</span>
                  <span className="text-gray-500 hidden sm:inline-block">•</span>
                  <span>10 Jun 2024</span>
                  <span>15:55 PM</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Order picked up by carrier</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
