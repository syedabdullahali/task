import React from 'react';

// Use a placeholder for the user and project data
const userData = {
  name: 'Project Name #1',
  avatar: 'https://placehold.co/40x40/E5E7EB/4B5563?text=UN',
  online: true,
};

const statsData = [
  { value: '1,000,000', label: 'Fully diluted shares' },
  { value: '$1,245,000', label: 'Total cash raised' },
  { value: '2400', label: 'Stakeholders' },
  { value: '$4,500', label: 'In draft' },
  { value: '$21.3k', label: 'Outstanding revenue', bar: 70 },
];

const transactionsData = [
  { name: 'Transactions', amount: '872,400' },
  { name: 'Teams', amount: '1,378,200' },
  { name: 'Conversation', amount: '928,500' },
  { name: 'Transportation', amount: '420,700' },
  { name: 'Vehicle', amount: '520,000' },
];

const topProductsData = [
  { product: 'Dribbble', sold: 523, price: '$315', revenue: '$62,120', rating: 4.11 },
  { product: 'Figma', sold: 230, price: '$233', revenue: '$25,440', rating: 3.35 },
  { product: 'Snapchat', sold: 205, price: '$159', revenue: '$14,012', rating: 3.01 },
  { product: 'Ripple', sold: 158, price: '$120', revenue: '$9,711', rating: 2.15 },
];

// Helper component for the subtle line chart
const LineChart = () => (
  <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-24">
    <path
      d="M 0 30 Q 10 20, 20 25 T 40 20 T 60 25 T 80 15 T 100 20"
      stroke="rgba(0,0,0,0.4)"
      fill="none"
      strokeWidth="1"
    />
  </svg>
);

const Dashbord = () => {
  return (
    <div className=" min-h-screen font-sans text-gray-800  ">
      <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
        {/* Header */}
 

        {/* Main Content Grid */}
        <main className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Left Column */}
          <div className="md:col-span-2 lg:col-span-3 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {statsData.map((stat, index) => (
                <div key={index} className="flex flex-col items-center bg-gray-100 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                  {stat.bar && (
                    <div className="w-full mt-2 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${stat.bar}%` }}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Income & Expense Chart */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 rounded-2xl p-6 relative">
                <div className="absolute top-6 left-6 text-gray-600 font-bold text-2xl">$53,9k</div>
                <div className="absolute top-14 left-6 text-xs text-gray-500">$88,040 Income</div>
                <div className="absolute top-20 left-6 text-xs text-gray-500">$34,112 Expense</div>
                <div className="relative h-64">
                  <svg className="absolute w-full h-full bottom-0 left-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d="M 0 100 L 0 50 C 20 20, 40 10, 60 30 L 100 0 L 100 100 Z"
                      fill="#E0F2FE"
                    />
                  </svg>
                  <div className="absolute left-[60%] -translate-x-1/2 bottom-20 flex flex-col items-center text-xs text-gray-500">
                    <div className="h-3 w-3 rounded-full bg-black border-2 border-white"></div>
                    <div className="h-10 w-0.5 bg-gray-300 mt-2"></div>
                    <span className="mt-2">Thu 12</span>
                  </div>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="bg-gray-100 rounded-2xl p-6">
                <div className="text-sm font-bold mb-4">Transactions</div>
                <div className="flex h-52 items-end justify-between">
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-2 rounded-full bg-gray-300 h-24 mb-1"></div>
                    <div className="text-xs text-gray-500">1200</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-2 rounded-full bg-gray-300 h-16 mb-1"></div>
                    <div className="text-xs text-gray-500">1400</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-2 rounded-full bg-gray-300 h-32 mb-1"></div>
                    <div className="text-xs text-gray-500">1600</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-2 rounded-full bg-gray-300 h-20 mb-1"></div>
                    <div className="text-xs text-gray-500">1800</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-2 rounded-full bg-gray-300 h-28 mb-1"></div>
                    <div className="text-xs text-gray-500">2000</div>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-2 rounded-full bg-gray-300 h-24 mb-1"></div>
                    <div className="text-xs text-gray-500">2200</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Products */}
            <div className="bg-gray-100 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-lg">Top Products</h2>
                <span className="text-blue-600 text-sm font-medium cursor-pointer">Full results</span>
              </div>
              <table className="w-full text-left table-auto">
                <thead>
                  <tr className="border-b border-gray-300 text-sm text-gray-500">
                    <th className="py-2">Product</th>
                    <th className="py-2">Sold Amount</th>
                    <th className="py-2">Unit Price</th>
                    <th className="py-2">Revenue</th>
                    <th className="py-2">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {topProductsData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 last:border-b-0 text-sm">
                      <td className="py-3 flex items-center">
                        <span className="mr-2 text-xl">{
                          {
                            'Dribbble': '🏀',
                            'Figma': '🎨',
                            'Snapchat': '👻',
                            'Ripple': '🌊',
                          }[item.product] || '📦'
                        }</span>
                        {item.product}
                      </td>
                      <td className="py-3">{item.sold}</td>
                      <td className="py-3">{item.price}</td>
                      <td className="py-3">{item.revenue}</td>
                      <td className="py-3">
                        <span className="text-yellow-500">★</span>
                        {item.rating}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column */}
          <aside className="md:col-span-1 space-y-6">
            {/* Where your money go? */}
            <div className="bg-gray-100 rounded-2xl p-6">
              <h2 className="text-lg font-bold mb-4">Where your money go?</h2>
              <div className="space-y-4">
                {transactionsData.map((transaction, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{transaction.name}</span>
                    <span className="text-xs text-gray-500">{transaction.amount}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Save More Money */}
            <div className="bg-gray-100 rounded-2xl p-6 relative overflow-hidden">
              <h2 className="text-lg font-bold mb-2">Save more money</h2>
              <p className="text-xs text-gray-500 mb-4">elustimod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
              <button className="bg-blue-600 text-white text-xs px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">VIEW TIPS</button>
              <img src="https://placehold.co/100x100/F3F4F6/9CA3AF?text=Money" className="absolute -bottom-4 -right-4 w-24 h-24 opacity-50" alt="Money" />
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default Dashbord;
