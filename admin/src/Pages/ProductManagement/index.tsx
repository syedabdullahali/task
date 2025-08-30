import React from 'react';

// Data for the product cards
const products = [
  {
    name: 'Front Table',
    image: 'https://placehold.co/200x200/F3F4F6/9CA3AF?text=Table',
    price: '$150.50',
    stock: 544,
    sold: 256,
  },
  {
    name: 'Apple Watch Series 10',
    image: 'https://placehold.co/200x200/F3F4F6/9CA3AF?text=Watch',
    price: '$160.40',
    stock: 544,
    sold: 256,
  },
  {
    name: 'Chester Chair',
    image: 'https://placehold.co/200x200/F3F4F6/9CA3AF?text=Chair',
    price: '$120.30',
    stock: 544,
    sold: 256,
  },
  {
    name: 'Air Wireless Headphone',
    image: 'https://placehold.co/200x200/F3F4F6/9CA3AF?text=Headphone',
    price: '$120.99',
    stock: 544,
    sold: 256,
  },
  {
    name: 'Nike Downshifter 12',
    image: 'https://placehold.co/200x200/F3F4F6/9CA3AF?text=Shoe',
    price: '$150.50',
    stock: 544,
    sold: 256,
  },
  {
    name: 'Apple AirPods',
    image: 'https://placehold.co/200x200/F3F4F6/9CA3AF?text=AirPods',
    price: '$150.50',
    stock: 544,
    sold: 256,
  },
  {
    name: 'Nike Air Max 90',
    image: 'https://placehold.co/200x200/F3F4F6/9CA3AF?text=Sneakers',
    price: '$110.20',
    stock: 544,
    sold: 256,
  },
  {
    name: 'portable speaker',
    image: 'https://placehold.co/200x200/F3F4F6/9CA3AF?text=Speaker',
    price: '$150.50',
    stock: 544,
    sold: 256,
  },
  {
    name: 'home nebulizer',
    image: 'https://placehold.co/200x200/F3F4F6/9CA3AF?text=Nebulizer',
    price: '$160.50',
    stock: 544,
    sold: 256,
  },
  {
    name: 'Elegant Black Perfume',
    image: 'https://placehold.co/200x200/F3F4F6/9CA3AF?text=Perfume',
    price: '$190.40',
    stock: 544,
    sold: 256,
  },
];

const ProductManagement = () => {
  return (
    <div className=" min-h-screen  font-sans">
       
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg object-cover" />
            </div>
            <h3 className="font-semibold text-gray-800 text-lg mb-1">{product.name}</h3>
            <p className="text-blue-600 font-bold text-lg mb-2">{product.price}</p>
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>Stock: {product.stock}</span>
              <span>Sold: {product.sold}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManagement;
