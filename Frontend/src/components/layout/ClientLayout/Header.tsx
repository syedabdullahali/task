import { Link } from "react-router-dom";
import { ChevronDown, Heart, Search, ShoppingCart } from "../../../icon/icon";
import ProductSearch from "../../product/ProductSearch";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../../../api/method";

const Header = () => {
   
   const [value,setValue] = useState('')

  const { data: { data }, isFetching,isLoading } = useQuery({
    queryKey: ['productDetails', value],
    queryFn: () => getData(`/products/list_Search_By_name/?search=${value}`),
    initialData: { data: [] } ,
  })


return<>
<header className="bg-white shadow-sm font-inter px-24 sticky top-0 h-[4.1rem] z-20">
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <div className="text-2xl font-bold text-blue-800">Fresh<span className="font-normal">Cart</span></div>
        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
          <Link to="/order_tracking" className="hover:text-blue-800">Order Tracking</Link>
        </div>
      </div>

    
      <ProductSearch isLoading={isLoading||isFetching} value={value} handaleChangeValue={(value)=>{setValue(value)}} dropdown data={data}/>

      <div className="flex items-center space-x-4 text-sm text-gray-600">

        <a href="#" className="flex items-center hover:text-blue-800">
          <Search size={"18"} className="md:hidden mr-1" />
          <span className="hidden md:block">Need Help? Call Us: <span className="font-semibold text-blue-800">0828 888</span></span>
        </a>
       
        <a href="#" className="hover:text-blue-800">
          <Heart size={"20"} />
        </a>
    
         <Link to={'/cart'} className="hover:text-blue-800 cursor-pointer">
          <ShoppingCart size={"20"} />
        </Link>
        <Link to={'/login'} className="hover:text-blue-800 cursor-pointer">
          <span>Sign In</span>
        </Link>
      </div>
    </div>
  </header>

  </>
};
export default Header