import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getPrivateData } from '../../api/apiPrivate';
import OrderList from '../../components/order/OrderList';
import { OrderDta } from '../../types/order.s';

const Order = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const { isSuccess, data: { data } = { data: [] }, isPending, status, isLoading } = useQuery({
    queryKey: ["orderData", activeTab],
    queryFn: () => getPrivateData(`/order/list/?status=${ activeTab }`),
  });



  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending': return 'bg-gray-100 text-gray-500';
      case 'paid': return 'bg-blue-100 text-blue-500';
      case 'shipped': return 'bg-orange-100 text-orange-500';
      case 'completed': return 'bg-green-100 text-green-500';
      case 'cancelled': return 'bg-red-100 text-red-500';
      default: return 'bg-gray-100 text-gray-500';
    }
  };

  const tabs = [
    { id: 'pending', label: 'Pending' },
    { id: 'shipped', label: 'On Shipping' },
    { id: 'completed', label: 'Arrived' },
    { id: 'cancelled', label: 'Canceled' },
  ];


  const SkeletonOrder = () => (
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-dashed border-gray-300">
            <Skeleton width={100} height={20} />
            <Skeleton width={60} height={20} />
          </div>

          {[1, 2].map((j) => (
            <div key={j} className="flex justify-between mb-4">
              <div className="flex items-center space-x-4">
                <Skeleton width={64} height={64} borderRadius={12} />
                <div className="flex-1 space-y-2 py-1">
                  <Skeleton width="75%" height={16} />
                  <Skeleton width="50%" height={12} />
                </div>
              </div>
              <Skeleton width={48} height={16} />
            </div>
          ))}

          <div className="flex justify-between items-center pt-4 border-t border-dashed border-gray-300">
            <Skeleton width={100} height={20} />
            <Skeleton width={80} height={32} />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen p-4 px-24">
      <div className="mx-auto bg-white rounded-3xl shadow-lg p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl font-semibold mb-6">My Orders</h1>

        <div className="flex items-center justify-start space-x-6 sm:space-x-8 mb-6 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-lg font-medium transition-colors border-b-2 -mb-px ${ activeTab === tab.id
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {isLoading || !isSuccess ? (
            <SkeletonOrder />
          ) : data.length > 0 ? (
            data.map((el: OrderDta) => (
              <OrderList
                order={el}
                key={el.id}
                getStatusClass={getStatusClass}
              />
            ))
          ) : (
            <p className="text-gray-500">No orders found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
