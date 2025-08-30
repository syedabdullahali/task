import { ChevronDown, Heart, Search, ShoppingCart } from "../../icon/icon";

const Header = () => (
  <header className="bg-white shadow-sm font-inter px-24 sticky top-0 h-[4.1rem] z-10">
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <div className="text-2xl font-bold text-blue-600">bocolo</div>
        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
          <a href="#" className="hover:text-blue-600">About Us</a>
          <a href="#" className="hover:text-blue-600">Market</a>
          <a href="#" className="hover:text-blue-600">Order Tracking</a>
          <a href="#" className="hover:text-blue-600">Contact Us</a>
        </div>
      </div>
      <div className="hidden lg:flex flex-1 mx-8 items-center border border-gray-300 rounded-full px-4 py-2 bg-gray-100 max-w-xl">
        <Search size={"18"} className="text-gray-500 mr-2" />
        <input type="text" placeholder="100% Bacon delivery without crossing the cow-line..." className="flex-1 bg-transparent focus:outline-none text-gray-700" />
      </div>
      <div className="flex items-center space-x-4 text-sm text-gray-600">
        <a href="#" className="flex items-center hover:text-blue-600">
          <Search size={"18"} className="md:hidden mr-1" />
          <span className="hidden md:block">Need Help? Call Us: <span className="font-semibold text-blue-600">0828 888</span></span>
        </a>
        <div className="relative group hidden lg:block">
          <button className="flex items-center space-x-1">
            <span>ENG</span>
            <ChevronDown size={"16"} />
          </button>
        </div>
        <a href="#" className="flex items-center hover:text-blue-600">
          <span>Sale</span>
          <ChevronDown size={"16"} />
        </a>
        <a href="#" className="hover:text-blue-600">
          <Heart size={"20"} />
        </a>
        <a href="#" className="hover:text-blue-600">
          <ShoppingCart size={"20"} />
        </a>
        <a href="#" className="hover:text-blue-600">
          <span>Sign In</span>
        </a>
      </div>
    </div>
  </header>
);
export default Header