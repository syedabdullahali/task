import React from 'react';

const Cart = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8 md:p-12 lg:p-16 font-[Inter] flex items-start justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Section: Cart Items */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
          
          {/* Item 1 */}
          <div className="flex flex-col sm:flex-row p-4 sm:p-6 md:p-8 border-b border-gray-200 last:border-b-0 items-center">
            <div className="flex-shrink-0 w-32 h-32 sm:w-48 sm:h-48 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center mb-4 sm:mb-0">
              <img
                src="https://placehold.co/150x150/e5e7eb/555?text=Backpack"
                alt="Laptop Backpack"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1 ml-0 sm:ml-8 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-2">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">Matsun Large 55 L Laptop Backpack Premium Waterproof</h2>
                <span className="text-gray-500 text-sm mt-1 sm:mt-0 whitespace-nowrap">Delivery by Sat Sep 6</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Black</p>
              <p className="text-sm text-gray-500 mb-4">Seller: MB MATSUN <span className="text-blue-500">Assured</span></p>

              <div className="flex items-center justify-center sm:justify-start space-x-2 md:space-x-4 mb-4">
                <span className="text-lg md:text-xl font-semibold text-gray-800">₹740</span>
                <span className="text-gray-400 line-through text-sm">₹2,999</span>
                <span className="text-green-600 font-medium text-sm">75% Off</span>
                <button aria-label="Info" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </button>
              </div>
              
              <div className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-500 mb-4">
                <span className="whitespace-nowrap">Or Pay ₹698</span>
                <span className="text-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                </span>
                <span>42</span>
              </div>
              
              <div className="flex items-center justify-center sm:justify-start space-x-4 text-sm text-gray-500">
                <button className="text-gray-900 font-medium hover:underline transition-colors">SAVE FOR LATER</button>
                <div className="w-px h-4 bg-gray-300"></div>
                <button className="text-red-500 font-medium hover:underline transition-colors">REMOVE</button>
              </div>
            </div>
            <div className="flex items-center mt-4 sm:mt-0">
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-200 transition-colors">-</button>
              <span className="mx-2 w-8 text-center text-lg font-medium">1</span>
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-200 transition-colors">+</button>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className="flex flex-col sm:flex-row p-4 sm:p-6 md:p-8 border-b border-gray-200 last:border-b-0 items-center">
            <div className="flex-shrink-0 w-32 h-32 sm:w-48 sm:h-48 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center mb-4 sm:mb-0">
              <img
                src="https://placehold.co/150x150/e5e7eb/555?text=Boots"
                alt="Boots"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1 ml-0 sm:ml-8 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-2">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">KICKSFIRE Boots For Men</h2>
                <span className="text-gray-500 text-sm mt-1 sm:mt-0 whitespace-nowrap">Delivery by Mon Sep 8</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Size: 9, Brown</p>
              <p className="text-sm text-gray-500 mb-4">Seller: KICKSFIREOFFICIAL</p>
              
              <div className="flex items-center justify-center sm:justify-start space-x-2 md:space-x-4 mb-4">
                <span className="text-lg md:text-xl font-semibold text-gray-800">₹2,285</span>
                <span className="text-gray-400 line-through text-sm">₹5,999</span>
                <span className="text-green-600 font-medium text-sm">61% Off</span>
                <button aria-label="Info" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </button>
              </div>
              
              <div className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-500 mb-4">
                <span className="whitespace-nowrap">Or Pay ₹2,185</span>
                <span className="text-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                </span>
                <span>100</span>
              </div>

              <div className="flex items-center justify-center sm:justify-start space-x-4 text-sm text-gray-500">
                <button className="text-gray-900 font-medium hover:underline transition-colors">SAVE FOR LATER</button>
                <div className="w-px h-4 bg-gray-300"></div>
                <button className="text-red-500 font-medium hover:underline transition-colors">REMOVE</button>
              </div>
            </div>
            <div className="flex items-center mt-4 sm:mt-0">
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-200 transition-colors">-</button>
              <span className="mx-2 w-8 text-center text-lg font-medium">1</span>
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-200 transition-colors">+</button>
            </div>
          </div>
          
          {/* Item 3 */}
          <div className="flex flex-col sm:flex-row p-4 sm:p-6 md:p-8 border-b border-gray-200 last:border-b-0 items-center">
            <div className="flex-shrink-0 w-32 h-32 sm:w-48 sm:h-48 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center mb-4 sm:mb-0">
              <img
                src="https://placehold.co/150x150/e5e7eb/555?text=Cargos"
                alt="Men's Cargos"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1 ml-0 sm:ml-8 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-2">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">VERTICALS Men Cargos</h2>
                <span className="text-gray-500 text-sm mt-1 sm:mt-0 whitespace-nowrap">Delivery by Sat Sep 6</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Size: 34</p>
              <p className="text-sm text-gray-500">Seller: VERTICALSOFFICIAL</p>
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8 flex justify-end">
            <button className="px-10 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors text-lg">PLACE ORDER</button>
          </div>
        </div>
        
        {/* Right Section: Price Details */}
        <div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-8 sticky top-16 h-fit">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">PRICE DETAILS</h2>
          <div className="space-y-4 text-gray-600">
            <div className="flex justify-between items-center border-b pb-4">
              <div className="flex items-center">
                <span>Price (4 items)</span>
                <button aria-label="Info" className="text-gray-400 ml-1 hover:text-gray-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </button>
              </div>
              <span>₹14,996</span>
            </div>
            <div className="flex justify-between items-center border-b pb-4">
              <div className="flex items-center">
                <span>Discount</span>
                <button aria-label="Info" className="text-gray-400 ml-1 hover:text-gray-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </button>
              </div>
              <span className="text-green-500">- ₹9,988</span>
            </div>
            <div className="flex justify-between items-center border-b pb-4">
              <div className="flex items-center">
                <span>Coupons for you</span>
                <button aria-label="Info" className="text-gray-400 ml-1 hover:text-gray-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </button>
              </div>
              <span className="text-green-500">- ₹102</span>
            </div>
            <div className="flex justify-between items-center border-b pb-4">
              <div className="flex items-center">
                <span>Platform Fee</span>
                <button aria-label="Info" className="text-gray-400 ml-1 hover:text-gray-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </button>
              </div>
              <span>₹5</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-lg md:text-xl font-semibold text-gray-800 my-6 border-t pt-6">
            <span>Total Amount</span>
            <span>₹4,911</span>
          </div>

          <p className="text-green-500 text-sm font-medium mb-6">You will save ₹10,085 on this order</p>
          
          <div className="flex items-center text-sm text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p>Safe and Secure Payments. Easy returns. 100% Authentic products.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
