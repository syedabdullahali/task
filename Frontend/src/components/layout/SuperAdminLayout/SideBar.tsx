import React from 'react';
import { NavLink } from 'react-router-dom';

// Reusable SVG icons for the sidebar
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125h9.75a1.125 1.125 0 001.125-1.125V9.75M8.25 21h6.75a1.125 1.125 0 001.125-1.125V13.5a2.25 2.25 0 00-2.25-2.25h-3a2.25 2.25 0 00-2.25 2.25v6.375c0 .621.504 1.125 1.125 1.125z" />
  </svg>
);

const UserGroupIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.75c-.328.115-.668.225-1.008.337A12.355 12.355 0 0112 21.75c-2.83 0-5.45-1.015-7.462-2.673a3.444 3.444 0 01-1.462-2.733v-2.31c0-.77.347-1.493.957-1.983L12 9.75m-4.5 7.5h.008v.008h-.008v-.008zm-2.25-6.69a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75l-2.25-2.25m4.5 0l-2.25 2.25M12 9.75h6.75a.75.75 0 01.75.75v3a.75.75 0 01-.75.75H12" />
  </svg>
);

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75c0 .414.336.75.75.75h2.25a.75.75 0 00.75-.75v-2.25a.75.75 0 00-.75-.75H9a.75.75 0 00-.75.75v2.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75c0 .414.336.75.75.75h2.25a.75.75 0 00.75-.75v-2.25a.75.75 0 00-.75-.75H17.25a.75.75 0 00-.75.75v2.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5a1.5 1.5 0 01-1.5-1.5V6a1.5 1.5 0 011.5-1.5h12A1.5 1.5 0 0121 6v6a1.5 1.5 0 01-1.5 1.5H18" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21h.01M12 21a.75.75 0 00.75-.75V15" />
  </svg>
);

// New icons
const ChartBarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5L12 3m-7.5 7.5L3 13.5M21 13.5L12 3m7.5 7.5L21 13.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18.75v-5.25m-3 0v5.25m15-5.25v-5.25m-3 0v5.25" />
  </svg>
);

const CogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const DocumentReportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M15 12h.01M9 18h.01M15 18h.01M9 6h.01M15 6h.01" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3z" />
  </svg>
);

const CategoryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v.75c0 .414.336.75.75.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5a.75.75 0 00.75-.75v-.75a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v.75c0 .414.336.75.75.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 17.25h16.5a.75.75 0 00.75-.75v-.75a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v.75c0 .414.336.75.75.75z" />
  </svg>
);

const ProductIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 006.18-15.65M12 3a9 9 0 00-6.18 15.65m6.18-15.65l-2.25 2.25m2.25-2.25l2.25 2.25m-2.25-2.25V9a.75.75 0 00.75.75h3a.75.75 0 00.75-.75V3m-4.5 9.75h.01M12 18.75h.01" />
  </svg>
);

const navItems = [
  { name: 'Users', icon: UserGroupIcon, path: '/admin' },
  { name: 'Category', icon: CategoryIcon, path: '/admin/category_management' },
  { name: 'Product', icon: ProductIcon, path: '/admin/product_management' },
  { name: 'Order Tracking', icon: TruckIcon, path: '/admin/order_management' },
];

const App = () => {
  return (
    <aside className="bg-white p-4  flex-shrink-0 border-r border-gray-200 min-h-screen">
      <nav className="space-y-2">
        {navItems.map((item, index) => (
          <NavLink key={index} to={item.path} className="flex items-center gap-2 p-3 rounded-xl hover:bg-gray-100 transition-colors duration-150">
            <item.icon />
            <span className="text-sm font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default App;
