import React, { useState } from 'react';

// Mock data to populate the table
const productsData = [
  { name: 'Laptop', code: 'E23447', category: 'Device', quantity: 1, date: '16/07/2024', image: 'https://placehold.co/40x40/F3F4F6/9CA3AF?text=Lap' },
  { name: 'Name', code: 'E23432', category: 'Electronic', quantity: 1, date: '16/07/2024', image: 'https://placehold.co/40x40/F3F4F6/9CA3AF?text=Elect' },
  { name: 'Apple phone', code: 'E23485', category: 'Device', quantity: 3, date: '13/07/2024', image: 'https://placehold.co/40x40/F3F4F6/9CA3AF?text=Pho' },
  { name: 'Smart phone', code: 'E23424', category: 'Device', quantity: 2, date: '12/07/2024', image: 'https://placehold.co/40x40/F3F4F6/9CA3AF?text=Smart' },
  { name: 'Smart watch', code: 'E23483', category: 'Device', quantity: 4, date: '14/07/2024', image: 'https://placehold.co/40x40/F3F4F6/9CA3AF?text=Watch' },
  { name: 'Laptop', code: 'E23442', category: 'Device', quantity: 1, date: '10/07/2024', image: 'https://placehold.co/40x40/F3F4F6/9CA3AF?text=Lap' },
  { name: 'Smart phone', code: 'E23417', category: 'Device', quantity: 2, date: '10/07/2024', image: 'https://placehold.co/40x40/F3F4F6/9CA3AF?text=Smart' },
  { name: 'Fry pan', code: 'E23436', category: 'Cooking', quantity: 1, date: '15/07/2024', image: 'https://placehold.co/40x40/F3F4F6/9CA3AF?text=Fry' },
  { name: 'Blander machine', code: 'E23494', category: 'Cooking', quantity: 1, date: '12/07/2024', image: 'https://placehold.co/40x40/F3F4F6/9CA3AF?text=Blend' },
  { name: 'Digital watch', code: 'E23443', category: 'Device', quantity: 3, date: '16/07/2024', image: 'https://placehold.co/40x40/F3F4F6/9CA3AF?text=Watch' },
  { name: 'Fry pan', code: 'E23436', category: 'Cooking', quantity: 1, date: '15/07/2024', image: 'https://placehold.co/40x40/F3F4F6/9CA3AF?text=Fry' },
];

// SVG icons
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.197 5.197a7.5 7.5 0 0010.606 10.606z" />
  </svg>
);

const HelpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.144 1.006 1.144 2.475 0 3.481l-1.554 1.554a2.25 2.25 0 01-3.182 0l-1.554-1.554m-2.25 2.25h.008v.008h-.008zM12 18.75h.008v.008H12z" />
  </svg>
);

const AddIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 -ml-1 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.31-.755-.837-1.424-1.635-.49L5.27 15.655a1.5 1.5 0 00-.77.818l-.29.985a1.5 1.5 0 001.373 1.958h9.643a1.5 1.5 0 001.373-1.958l-.29-.985a1.5 1.5 0 00-.77-.818L14.74 9z" />
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.41-1.41a2.121 2.121 0 013 3l-1.41 1.41m-5.18-5.18l-1.42 1.42m-1.414 1.414L10.322 17.5M14.286 17.5L8.714 11.928" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5" />
  </svg>
);

const ProductManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className=" min-h-screen font-sans antialiased">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl  p-6 lg:p-10">
        {/* Header and Add Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-10">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Product List</h1>
          <button onClick={openModal} className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 shadow-md">
            <AddIcon />
            Add Product
          </button>
        </div>

        {/* Filters and Inputs */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="relative w-full md:w-auto md:flex-1">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
            <SearchIcon />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-auto md:flex-none">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter product name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              />
            </div>
            <div className="relative">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 appearance-none bg-white">
                <option value="">Select category</option>
                {['Device', 'Electronic', 'Cooking'].map((cat, i) => (
                  <option key={i} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Select date"
                className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              />
              <CalendarIcon />
            </div>
          </div>
          <button className="hidden lg:block p-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition-colors duration-150 shadow-sm ml-auto">
            <HelpIcon />
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">NAME</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">CODE</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">CATEGORY</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">QUANTITY</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">DATE</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ACTION</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {productsData.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center gap-3">
                      <img src={product.image} alt={product.name} className="w-10 h-10 rounded-full object-cover" />
                      {product.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.code}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-150">
                        <EditIcon />
                      </button>
                      <button className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-150">
                        <TrashIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Category Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Add Category</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="categoryName" className="block text-gray-700 text-sm font-bold mb-2">Category Name</label>
                  <input
                    type="text"
                    id="categoryName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter category name"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button type="button" onClick={closeModal} className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-xl hover:bg-gray-300 transition-colors duration-200">
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductManagement;
