import React, { useState } from 'react';

const Order = () => {
  const [activeTab, setActiveTab] = useState('on-shipping');

  const orders = [
    {
      id: 'CTH-89765',
      status: 'On Deliver',
      origin: 'Illinois, United States',
      destination: 'George\'s House, Indonesia',
      estimatedArrival: '28 May 2024',
      items: [
        { name: 'Japan Green Outer', price: '399.000', quantity: 1, size: 'M', imageUrl: 'https://placehold.co/100x100/e2e8f0/555?text=J' },
        { name: 'White off jacket 2024', price: '450.000', quantity: 1, size: 'M', imageUrl: 'https://placehold.co/100x100/e2e8f0/555?text=W' },
      ],
    },
    {
      id: 'CTH-45672',
      status: 'On Deliver',
      origin: 'Illinois, United States',
      destination: 'George\'s House, Indonesia',
      estimatedArrival: '28 May 2024',
      items: [
        { name: 'Soft Hoodie', price: '250.000', quantity: 1, size: 'L', imageUrl: 'https://placehold.co/100x100/e2e8f0/555?text=S' },
      ],
    },
    // More dummy orders for demonstration
    {
      id: 'CTH-78901',
      status: 'Arrived',
      origin: 'California, United States',
      destination: 'Home Address, United Kingdom',
      estimatedArrival: '15 April 2024',
      items: [
        { name: 'Leather Boots', price: '850.000', quantity: 1, size: '42', imageUrl: 'https://placehold.co/100x100/e2e8f0/555?text=L' },
      ],
    },
    {
      id: 'CTH-23456',
      status: 'Canceled',
      origin: 'New York, United States',
      destination: 'Home Address, Japan',
      estimatedArrival: '10 June 2024',
      items: [
        { name: 'Casual T-Shirt', price: '120.000', quantity: 2, size: 'XL', imageUrl: 'https://placehold.co/100x100/e2e8f0/555?text=T' },
      ],
    },
  ];

  const getFilteredOrders = () => {
    switch (activeTab) {
      case 'on-shipping':
        return orders.filter(order => order.status === 'On Deliver');
      case 'arrived':
        return orders.filter(order => order.status === 'Arrived');
      case 'canceled':
        return orders.filter(order => order.status === 'Canceled');
      default:
        return orders;
    }
  };

  const getStatusClass = (status:string) => {
    switch (status) {
      case 'On Deliver':
        return 'bg-orange-100 text-orange-500';
      case 'Arrived':
        return 'bg-green-100 text-green-500';
      case 'Canceled':
        return 'bg-red-100 text-red-500';
      default:
        return 'bg-gray-100 text-gray-500';
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen font-[Inter] p-4 px-24">
      <div className=" mx-auto bg-white rounded-3xl shadow-lg p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl font-semibold mb-6">My Orders</h1>

        {/* Tab Navigation */}
        <div className="flex items-center justify-start space-x-6 sm:space-x-8 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('on-shipping')}
            className={`pb-4 text-lg font-medium transition-colors border-b-2 -mb-px ${
              activeTab === 'on-shipping' ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            On Shipping <span className="text-sm">3</span>
          </button>
          <button
            onClick={() => setActiveTab('arrived')}
            className={`pb-4 text-lg font-medium transition-colors border-b-2 -mb-px ${
              activeTab === 'arrived' ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Arrived <span className="text-sm">2</span>
          </button>
          <button
            onClick={() => setActiveTab('canceled')}
            className={`pb-4 text-lg font-medium transition-colors border-b-2 -mb-px ${
              activeTab === 'canceled' ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Canceled <span className="text-sm">1</span>
          </button>
        </div>

        {/* Order List */}
        <div className="space-y-6">
          {getFilteredOrders().map(order => (
            <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden p-6">
              
              {/* Order Header */}
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-dashed border-gray-300">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="font-semibold text-gray-800">{order.id}</span>
                </div>
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${getStatusClass(order.status)}`}>
                  {order.status}
                </span>
              </div>

              {/* Shipping Status */}
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="ml-1">{order.origin}</span>
                <span className="mx-2 text-gray-400">···</span>
                <span className="whitespace-nowrap">Estimated arrival: {order.estimatedArrival}</span>
                <span className="mx-2 text-gray-400">········→</span>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="ml-1">{order.destination}</span>
              </div>

              {/* Order Items */}
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 mb-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover bg-gray-100"
                  />
                  <div className="flex-1">
                    <p className="text-base text-gray-800 font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Rp {item.price} x{item.quantity} {item.size}</p>
                  </div>
                </div>
              ))}
              
              {/* Order Footer */}
              <div className="flex justify-between items-center pt-4 border-t border-dashed border-gray-300">
                <span className="text-gray-800 font-semibold">Total: Rp {
                  order.items.reduce((total, item) => total + (parseFloat(item.price.replace('.', '')) * item.quantity), 0).toLocaleString('en-US')
                }</span>
                <button className="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
