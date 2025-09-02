import { Link } from "react-router-dom";
import { ChevronDown, List } from "../../../icon/icon";

const NavBar = () => (
  <nav className="bg-white shadow-md font-inter px-24 z-10 sticky top-[4.1rem] w-full ">
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2 text-white bg-blue-800 px-4 py-2 rounded-full font-medium transition-all hover:bg-blue-700">
          <List size={"20"} />
          <span>All Offers</span>
        </button>
      </div>
      <div className="p-4 rounded-lg text-center shadow-xl border-doted">
        <p className="font-bold text-xl text-black">
          <span className="text-red-700">Don't miss out!</span> Get an extra <span className="text-2xl font-extrabold">20% off</span> our upcoming deals—this week only.
        </p>
      </div>
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
        <Link to="/" className="hover:text-blue-800">HOME</Link>
        <Link to="/product-shop/0" className="hover:text-blue-800 flex items-center">SHOP <ChevronDown size={"14"} className="ml-1" /></Link>
      </div>
    </div>
  </nav>
);
export default NavBar