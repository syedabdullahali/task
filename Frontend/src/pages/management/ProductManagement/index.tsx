import React, { useState } from 'react';
import { AddIcon, CalendarIcon, DeleteIcon, EditIcon, HelpIcon, SearchIcon } from '../../../icon/icon';

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
          <button onClick={openModal} className="flex items-center bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 shadow-md">
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
                        <DeleteIcon />
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
                  <button type="submit" className="px-4 py-2 bg-blue-800 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200">
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
