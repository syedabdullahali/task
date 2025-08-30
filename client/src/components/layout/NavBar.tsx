import { ChevronDown, List } from "../../icon/icon";

const NavBar = () => ( 
  <nav className="bg-white shadow-md font-inter px-24  sticky top-[4.1rem] w-full z-10">
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2 text-white bg-blue-600 px-4 py-2 rounded-full font-medium transition-all hover:bg-blue-700">
          <List size={"20"} />
          <span>All Offers</span>
        </button>
        <div className="relative">
          <select className="bg-gray-100 text-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8 cursor-pointer">
            <option>Select a location</option>
            <option>New York</option>
            <option>Los Angeles</option>
          </select>
          <ChevronDown size={"16"} className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
        <a href="#" className="hover:text-blue-600">HOME</a>
        <a href="#" className="hover:text-blue-600 flex items-center">SHOP <ChevronDown size={"14"} className="ml-1" /></a>
        <a href="#" className="hover:text-blue-600 flex items-center">STORE SINGLE <ChevronDown size={"14"} className="ml-1" /></a>
        <a href="#" className="hover:text-blue-600">BAKERY</a>
        <a href="#" className="hover:text-blue-600">BEVERAGES</a>
        <a href="#" className="hover:text-blue-600">BLOG</a>
        <a href="#" className="hover:text-blue-600">CONTACT</a>
      </div>
    </div>
  </nav>
);
export default NavBar