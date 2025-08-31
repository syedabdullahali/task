import React, { useState } from 'react';

// Mock data for the orders table
const ordersData = [
  { id: '#921047', product: 'MacBook Air (M1, 2021)', customer: 'Darrell Steward', date: 'Apr 19, 08:01 AM', total: '$1,099.00', status: 'Pending', items: 1, delivery: 'Free Shipping', customerAvatar: 'DS' },
  { id: '#921047', product: 'MacBook Pro 13-inch...', customer: 'Courtney Henry', date: 'Apr 19, 09:15 AM', total: '$2,198.00', status: 'Completed', items: 2, delivery: 'Free Shipping', customerAvatar: 'CH' },
  { id: '#348362', product: 'MacBook Air (Retina...', customer: 'Arlene McCoy', date: 'Apr 19, 10:30 AM', total: '$1,499.00', status: 'Completed', items: 1, delivery: 'Free Shipping', customerAvatar: 'AM' },
  { id: '#605913', product: 'MacBook Pro 16-inch...', customer: 'Brooklyn Simmons', date: 'Apr 19, 11:45 AM', total: '$3,099.00', status: 'Pending', items: 3, delivery: 'Free Shipping', customerAvatar: 'BS' },
  { id: '#187245', product: 'MacBook Air (M1, 2021)', customer: 'Devon Lane', date: 'Apr 19, 01:00 PM', total: '$2,198.00', status: 'Pending', items: 2, delivery: 'Free Shipping', customerAvatar: 'DL' },
  { id: '#490176', product: 'MacBook Pro 13-inch...', customer: 'Bessie Cooper', date: 'Apr 19, 02:15 PM', total: '$2,198.00', status: 'Completed', items: 2, delivery: 'Free Shipping', customerAvatar: 'BC' },
];

const metrics = [
  { label: 'Total orders', value: '48' },
  { label: 'Ordered items over time', value: '493' },
  { label: 'Returns', value: '6' },
  { label: 'Fulfilled orders over time', value: '359' },
  { label: 'Delivered orders over time', value: '353' },
];

const tabs = ['All', 'Unpaid', 'Need to ship', 'Sent', 'Completed', 'Cancellation', 'Returns'];

const SvgIcons = {
  Today: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5" />
  </svg>,
  Search: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2">
    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.195l4.137 4.137a.5.5 0 01-.707.707l-4.137-4.137A7 7 0 012 9z" clipRule="evenodd" />
  </svg>,
  Export: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m7.5-3v4.5a2.25 2.25 0 01-2.25 2.25H15M12 21h2.25a2.25 2.25 0 002.25-2.25V15M12 21a9 9 0 100-18m0 18v-4.5" />
  </svg>,
  MoreActions: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>,
  CreateOrder: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 -ml-1 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>,
  Filter: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 21v-1.5M12 9V7.5M12 15v-1.5M3 12h1.5M21 12h-1.5M7.5 12H6M16.5 12h1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9a3 3 0 100 6 3 3 0 000-6z" />
  </svg>,
  Dots: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6a.75.75 0 110-1.5.75.75 0 010 1.5zm0 6a.75.75 0 110-1.5.75.75 0 010 1.5zm0 6a.75.75 0 110-1.5.75.75 0 010 1.5z" />
  </svg>,
  List: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>,
  Grid: () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v.75c0 .414.336.75.75.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5a.75.75 0 00.75-.75v-.75a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v.75c0 .414.336.75.75.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 17.25h16.5a.75.75 0 00.75-.75v-.75a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v.75c0 .414.336.75.75.75z" />
  </svg>,
};


const OrderManagement = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className=" min-h-screen font-sans antialiased">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl  p-6 lg:p-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">Orders</h1>
          <div className="flex items-center space-x-2">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors duration-200">
              <SvgIcons.Export />
              Export
            </button>
            <div className="relative">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                <SvgIcons.MoreActions />
                More actions
              </button>
            </div>
            <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-xl transition-colors duration-200 shadow-md">
              <SvgIcons.CreateOrder />
              Create Order
            </button>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="flex flex-wrap bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-2">
              <SvgIcons.Today />
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="flex-grow p-4 bg-gray-50 rounded-xl text-center">
                <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                <div className="text-xs text-gray-500">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          {/* Tabs */}
          <div className="flex flex-wrap space-x-2 mb-6 border-b border-gray-200">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  activeTab === tab
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search order..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <SvgIcons.Search />
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100">
                <SvgIcons.Grid />
              </button>
              <button className="p-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100">
                <SvgIcons.List />
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100">
                <SvgIcons.Filter />
                Filter
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    <input type="checkbox" className="rounded text-blue-500" />
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ORDER</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">CUSTOMER</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">DATE</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">TOTAL</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">PAYMENT STATUS</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ITEMS</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">DELIVERY METHOD</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {ordersData.map((order, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4">
                      <input type="checkbox" className="rounded text-blue-500" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <div className="flex flex-col items-start">
                        <span className="font-semibold text-gray-900">{order.product}</span>
                        <span className="text-gray-500 text-xs">{order.id}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600">
                          {order.customerAvatar}
                        </div>
                        <span className="font-medium text-gray-900">{order.customer}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.total}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.items}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.delivery}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-700">
                        <SvgIcons.Dots />
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
  );
};

export default OrderManagement;
