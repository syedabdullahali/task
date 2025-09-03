import React, { DragEvent, useState } from 'react';

const ProductManagement = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [visibility, setVisibility] = useState(true);

  const productDetails = {
    sku: "KS456UFT",
    quantity: "28",
    slug: "example-url-slug"
  };

  const relatedItems = [
    { name: "Find Comfort Body &...", price: "28" },
    { name: "Find Comfort Gentle...", price: "18" },
    { name: "Find Comfort Hydrati...", price: "20" },
  ];

  const handleDragOver = (e:DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e:DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // In a real app, you would handle the file upload here.
  };

  return (
    <div className="min-h-screen  font-sans antialiased text-gray-800">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
            <div>
              <h1 className="text-2xl font-semibold">Add New Product</h1>
              <p className="text-sm text-gray-500">
                Last Update 28 April 2024 at 8:43 PM
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full text-gray-500 hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9.53L17.76 6.5A2.25 2.25 0 0121 8.25v6.5a2.25 2.25 0 01-2.25 2.25h-6.5a2.25 2.25 0 01-2.25-2.25v-6.5a2.25 2.25 0 012.25-2.25z" />
              </svg>
            </button>
            <button className="p-2 rounded-full text-red-500 hover:bg-red-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9.53L17.76 6.5A2.25 2.25 0 0121 8.25v6.5a2.25 2.25 0 01-2.25 2.25h-6.5a2.25 2.25 0 01-2.25-2.25v-6.5a2.25 2.25 0 012.25-2.25z" />
              </svg>
            </button>
            <button className="px-4 py-2 text-white bg-blue-800 hover:bg-blue-700 rounded-lg font-medium transition-colors">
              Publish
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Left Column */}
          <div className="col-span-1 md:col-span-2 space-y-6">

            {/* Product Media Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Main Image */}
                <div className="col-span-1 sm:col-span-2 md:col-span-1 aspect-square bg-gray-50 rounded-xl overflow-hidden relative">
                  <img
                    src="https://placehold.co/500x500/F1A79F/FFFFFF?text=Product"
                    alt="Main Product"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 px-2 py-1 text-xs text-white bg-black/60 rounded-md">Cover</span>
                </div>
                {/* Secondary Images */}
                <div className="col-span-1 flex flex-col justify-between space-y-4">
                  <div className="aspect-square w-full bg-gray-50 rounded-xl overflow-hidden">
                    <img
                      src="https://placehold.co/200x200/F1A79F/FFFFFF?text=Alt+1"
                      alt="Alternate Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square w-full bg-gray-50 rounded-xl overflow-hidden">
                    <img
                      src="https://placehold.co/200x200/F1A79F/FFFFFF?text=Alt+2"
                      alt="Alternate Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Add Image */}
                <div
                  className="col-span-1 aspect-square rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 cursor-pointer hover:border-blue-500 transition-colors"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Product Details Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Product Details</h2>
                <span className="text-xs text-gray-500 px-3 py-1 bg-gray-100 rounded-full">Status: Draft</span>
              </div>
              <p className="text-gray-500 text-sm">Key info to describe and display your product.</p>

              {/* Tabs */}
              <div className="flex space-x-1 p-1 bg-gray-100 rounded-lg">
                <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-800 rounded-lg">General</button>
                <button className="flex-1 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 rounded-lg">Advanced</button>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="sku" className="text-sm font-medium text-gray-700">SKU Number <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="sku"
                    placeholder="Enter product SKU (e.g. KS456UFT)"
                    defaultValue={productDetails.sku}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="quantity" className="text-sm font-medium text-gray-700">Quantity <span className="text-red-500">*</span></label>
                  <input
                    type="number"
                    id="quantity"
                    placeholder="Enter inventory quantity"
                    defaultValue={productDetails.quantity}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col sm:col-span-2">
                  <label htmlFor="slug" className="text-sm font-medium text-gray-700">Slug <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="slug"
                    placeholder="Enter URL slug (e.g. example-url-slug)"
                    defaultValue={productDetails.slug}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* How to use section */}
              <div className="space-y-2">
                <h3 className="text-lg font-medium">How to use</h3>
                <div className="border border-gray-300 rounded-lg p-2">
                  <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-2">
                    <button className="p-1 rounded hover:bg-gray-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5M6.75 12h10.5" />
                      </svg>
                    </button>
                    {/* Add more icons as needed */}
                  </div>
                  <p className="text-gray-500 text-sm">e.g. Gently apply to clean skin twice a day — morning and evening.</p>
                </div>
              </div>

              {/* Product dimensions */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="weight" className="text-sm font-medium text-gray-700">Weight</label>
                  <input type="text" id="weight" placeholder="gr" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="width" className="text-sm font-medium text-gray-700">Width</label>
                  <input type="text" id="width" placeholder="cm" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="height" className="text-sm font-medium text-gray-700">Height</label>
                  <input type="text" id="height" placeholder="cm" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="length" className="text-sm font-medium text-gray-700">Length</label>
                  <input type="text" id="length" placeholder="cm" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-1 space-y-6">
            {/* Visibility Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
              <h2 className="text-xl font-semibold">Visibility</h2>
              <p className="text-gray-500 text-sm">You can change the visibility of this product for customers</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm font-medium text-gray-700">Visible</span>
                <button
                  onClick={() => setVisibility(!visibility)}
                  className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${visibility ? 'bg-blue-800' : 'bg-gray-200'}`}
                >
                  <span
                    className={`inline-block w-4 h-4 transform transition-transform rounded-full bg-white ${visibility ? 'translate-x-6' : 'translate-x-1'}`}
                  ></span>
                </button>
              </div>
            </div>

            {/* Related Items Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Related Items</h2>
                <button className="text-gray-500 hover:text-gray-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-500 text-sm">Add related items to this product</p>
              <ul className="space-y-2">
                {relatedItems.map((item, index) => (
                  <li key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center">
                        <img src="https://placehold.co/32x32/F1A79F/FFFFFF?text=Item" alt="Item" className="rounded-md" />
                      </div>
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">${item.price}</span>
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9.53L17.76 6.5A2.25 2.25 0 0121 8.25v6.5a2.25 2.25 0 01-2.25 2.25h-6.5a2.25 2.25 0 01-2.25-2.25v-6.5a2.25 2.25 0 012.25-2.25z" />
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preview Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
              <h2 className="text-xl font-semibold">Preview</h2>
              <p className="text-gray-500 text-sm">Want to see how your product will look like?</p>
              <button className="w-full py-2 bg-blue-100 text-blue-800 font-medium rounded-lg hover:bg-blue-200 transition-colors">
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
