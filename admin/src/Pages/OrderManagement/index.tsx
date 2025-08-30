import React, { useState } from 'react';

// Main OrderManagement component containing the entire dashboard UI
const OrderManagement = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Mock data for the statistics cards
  const stats = [
    { title: "Total Orders", value: 248, change: 23.5, type: "positive", chart: "M0,10 L5,2 L10,8 L15,4 L20,9" },
    { title: "Order Items over time", value: 32, change: 16.1, type: "positive", chart: "M0,8 L5,10 L10,6 L15,9 L20,3" },
    { title: "Returns Orders", value: 7, change: 1.6, type: "negative", chart: "M0,3 L5,8 L10,4 L15,9 L20,2" },
    { title: "Fulfilled Orders over time", value: 12, change: 19.5, type: "positive", chart: "M0,4 L5,7 L10,3 L15,8 L20,5" },
  ];

  // Mock data for the order table
  const orders = [
    { id: 4772827, customer: "John Smith", total: "120.75", items: 1, date: "24 Jun 2024, 9:23 pm", payment: "Success", paymentMethod: "Debit card", fulfillment: "Fulfilled", tracking: "12999AIA10123456784" },
    { id: 5839201, customer: "Emily Johnson", total: "250.00", items: 1, date: "15 Mar 2023, 2:45 am", payment: "Success", paymentMethod: "Credit Card", fulfillment: "Fulfilled", tracking: "940011020083030504" },
    { id: 6273845, customer: "Michael Brown", total: "89.99", items: 3, date: "10 Apr 2022, 11:30 am", payment: "Success", paymentMethod: "Apple Pay", fulfillment: "Fulfilled", tracking: "182748899099992358" },
    { id: 7382910, customer: "Jessica Davis", total: "1,500.20", items: 1, date: "28 Feb 2023, 6:15 pm", payment: "Success", paymentMethod: "Google Pay", fulfillment: "Fulfilled", tracking: "940550969993700122" },
    { id: 8491763, customer: "Daniel Wilson", total: "45.50", items: 1, date: "19 May 2024, 7:55 am", payment: "Success", paymentMethod: "Apple Pay", fulfillment: "Unfulfilled", tracking: "" },
    { id: 9503842, customer: "Sarah Miller", total: "360.00", items: 1, date: "03 Jan 2024, 12:05 am", payment: "Success", paymentMethod: "Credit Card", fulfillment: "Unfulfilled", tracking: "927489270003745981" },
    { id: 1627493, customer: "David Anderson", total: "299.99", items: 1, date: "30 Dec 2023, 8:40 pm", payment: "Success", paymentMethod: "Google Pay", fulfillment: "Fulfilled", tracking: "9400110895767432107" },
    { id: 2738915, customer: "Laura Taylor", total: "580.75", items: 1, date: "16 Sep 2023, 9:25 pm", payment: "Success", paymentMethod: "Debit card", fulfillment: "Fulfilled", tracking: "1Z8576100039576321" },
    { id: 3847269, customer: "James Thomas", total: "1,250.45", items: 2, date: "04 Nov 2022, 9:50 am", payment: "Pending", paymentMethod: "", fulfillment: "Unfulfilled", tracking: "" },
    { id: 4958327, customer: "Sophia Moore", total: "75.00", items: 1, date: "30 Dec 2023, 4:35 pm", payment: "Success", paymentMethod: "Google Pay", fulfillment: "Fulfilled", tracking: "940011169123456785" },
    { id: 5061948, customer: "William Harris", total: "999.99", items: 4, date: "05 Jun 2023, 7:10 pm", payment: "Success", paymentMethod: "Credit Card", fulfillment: "Fulfilled", tracking: "1Z204E3803894350" },
    { id: 6172054, customer: "Olivia Martin", total: "450.30", items: 1, date: "12 Aug 2022, 1:00 pm", payment: "Pending", paymentMethod: "", fulfillment: "Cancelled", tracking: "" },
    { id: 7283167, customer: "Benjamin Lee", total: "89.90", items: 1, date: "17 Oct 2023, 10:20 am", payment: "Success", paymentMethod: "Crypto", fulfillment: "Fulfilled", tracking: "940011089202132451" },
    { id: 8394271, customer: "Ava Walker", total: "820.00", items: 1, date: "08 Feb 2023, 5:45 pm", payment: "Pending", paymentMethod: "", fulfillment: "Unfulfilled", tracking: "" },
    { id: 9405386, customer: "Christopher Hall", total: "1,820.65", items: 8, date: "27 Jul 2024, 6:30 am", payment: "Success", paymentMethod: "Debit card", fulfillment: "Fulfilled", tracking: "940011089202132451" },
  ];

  const getStatusColor = (status:string) => {
    switch (status) {
      case 'Success':
      case 'Fulfilled':
      case 'All':
        return 'bg-green-500/20 text-green-400';
      case 'Pending':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Cancelled':
      case 'Unfulfilled':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-700 text-gray-400';
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen p-4 sm:p-8 text-gray-100 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h1 className="text-2xl font-semibold">Orders</h1>
            <p className="text-sm text-gray-400 mt-1">Manage and track your orders seamlessly in real-time</p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0">
            <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium border border-gray-700 rounded-lg transition-colors hover:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <span>Export</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium bg-blue-600 rounded-lg transition-colors hover:bg-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span>Create order</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-gray-400 text-sm">{stat.title}</h3>
              <div className="flex items-end justify-between mt-2">
                <span className="text-2xl font-semibold">{stat.value}</span>
                <div className="flex items-center text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 transform ${stat.type === 'positive' ? 'rotate-180 text-green-400' : 'text-red-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l-5 5-5-5-5 5" />
                  </svg>
                  <span className={`${stat.type === 'positive' ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.change}% ({stat.type === 'positive' ? `+${stat.change}` : stat.change})
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <svg className="w-full h-10" viewBox="0 0 20 10" preserveAspectRatio="none">
                  <path d={stat.chart} fill="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" stroke={stat.type === 'positive' ? '#4ADE80' : '#F87171'} />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="bg-gray-800 rounded-xl p-4 space-y-4">
          <div className="flex flex-wrap gap-2">
            {['All', 'Unfulfilled', 'Unpaid', 'Open', 'Closed', 'Local Delivery'].map(filter => (
              <button
                key={filter}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white font-medium'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2 flex-grow">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input type="text" placeholder="Search" className="bg-transparent outline-none flex-grow text-sm placeholder-gray-400" />
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 18H7.5m-3.75-9h16.5m-16.5 0a1.5 1.5 0 113 0m-3 0a1.5 1.5 0 103 0" />
                </svg>
              </button>
              <button className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-gray-800 rounded-xl p-4 overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-gray-700 text-gray-400">
                <th scope="col" className="p-4 rounded-tl-lg">
                  <input type="checkbox" className="rounded bg-gray-700 border-gray-600" />
                </th>
                <th scope="col" className="p-4"># Order ID</th>
                <th scope="col" className="p-4">Customer</th>
                <th scope="col" className="p-4">Total</th>
                <th scope="col" className="p-4">Items</th>
                <th scope="col" className="p-4">Order Date</th>
                <th scope="col" className="p-4">Payment</th>
                <th scope="col" className="p-4">Payment Method</th>
                <th scope="col" className="p-4">Fulfillment</th>
                <th scope="col" className="p-4 rounded-tr-lg">Tracking Number</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-b border-gray-700 last:border-b-0 hover:bg-gray-700/50 transition-colors">
                  <td className="p-4">
                    <input type="checkbox" className="rounded bg-gray-700 border-gray-600" />
                  </td>
                  <td className="p-4 font-medium text-gray-200">{order.id}</td>
                  <td className="p-4">{order.customer}</td>
                  <td className="p-4 font-medium">${order.total}</td>
                  <td className="p-4">{order.items} {order.items > 1 ? 'items' : 'item'}</td>
                  <td className="p-4">{order.date}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.payment)}`}>{order.payment}</span>
                  </td>
                  <td className="p-4">{order.paymentMethod}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.fulfillment)}`}>{order.fulfillment}</span>
                  </td>
                  <td className="p-4 text-gray-400">{order.tracking}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
