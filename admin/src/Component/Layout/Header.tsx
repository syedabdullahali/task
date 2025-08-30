import React from 'react'
const userData = {
  name: 'Project Name #1',
  avatar: 'https://placehold.co/40x40/E5E7EB/4B5563?text=UN',
  online: true,
};
const Header = () => {
  return (
   <header className="flex items-center justify-between pb-6 border-b border-gray-200 p-4">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg font-bold text-lg">N</div>
            <h1 className="text-xl font-bold">NILED</h1>
            <span className="text-gray-500 font-medium text-sm hidden md:inline">Dashboard</span>
          </div>
          <div className="flex items-center gap-4 text-gray-500">
            <span className="text-sm font-medium hidden md:inline">Project Name #1</span>
            <div className="relative">
              <input type="text" placeholder="Search..." className="hidden md:block w-40 pl-8 pr-2 py-1 text-sm rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-2 top-2 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <div className="relative">
              <img className="h-10 w-10 rounded-full bg-gray-300" src={userData.avatar} alt="User Avatar" />
              <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full ring-2 ring-white"></span>
            </div>
          </div>
        </header>
  )
}

export default Header
