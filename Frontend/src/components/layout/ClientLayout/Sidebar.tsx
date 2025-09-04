import { ChevronRight } from "../../../icon/icon";
import sideBar_banner_1 from "../../../assets/side_Banner.jpg"
import sideBar_banner_2 from "../../../assets/side_Banner2.jpg"
import Skeleton from "react-loading-skeleton";
import { Link, NavLink } from "react-router-dom";


type Categories = { title: string, category_image: { url: string }, id: string }

const Sidebar = ({ categoriesData, isLoading = false }: { categoriesData: Categories[], isLoading: boolean }) => (

  <aside className="w-64 bg-white  rounded-lg shadow-md font-inter shrink-0  ">
    <div className='p-5  bg-white'>
      {isLoading ? <>
        <Skeleton width={150} height={40} className="mb-4" />
        <Skeleton containerClassName="w-full" height={30} count={4} />
      </> :
        <>
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-700">

            <NavLink to={'/product-shop/0'} 
            className={({isActive})=>`flex items-center justify-between p-2  
            ${ isActive?" text-white bg-blue-800":"hover:bg-gray-100 "} transition-colors cursor-pointer`}>
              <span className="flex items-center"> All PRODUCT
              </span>
              <ChevronRight size={"16"} className="text-gray-400" />
            </NavLink>

            {categoriesData?.map((item: Categories, index: number) => (
                <NavLink key={item.id} to={`/product-shop/${item.id}`} 
            className={({isActive})=>`flex items-center justify-between p-2  
            ${ isActive?" text-white bg-blue-800":"hover:bg-gray-100 "} transition-colors cursor-pointer`}>
              <span className="flex items-center"> {item.title}T
              </span>
              <ChevronRight size={"16"} className="text-gray-400" />
            </NavLink>
            ))}

          </ul>
        </>
      }

    </div>
    {isLoading ?
      <>
        <div className="sticky top-40 ">
          <Skeleton height={400} containerClassName="w-full  " />
        </div>
      </>
      :
      <>
        <div className='relative   overflow-hidden  bg-blue-400  mb-1 sticky top-40 bg-white'>
          <img src={sideBar_banner_1} alt="Grocery offer" className="w-full h-96  object-cover" />
          <div className="absolute inset-0  flex items-center p-8 bg-white/20">
            <div className="text-black max-w-md">
              <h2 className="text-3xl font-bold mb-2">Grocery full of inspiration</h2>
              <p className="text-lg mb-4">Only this week. Don't miss...</p>
              <p className="text-2xl font-bold mb-4">From <span className="text-yellow-300">$6.99</span></p>
              <Link to={'/product-shop/0'}  className="bg-white text-blue-800 px-6 py-2 rounded-full font-bold transition-all hover:bg-gray-100">
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        <div className='relative  overflow-hidden  bg-blue-400 mb-1 sticky top-40 bg-white'>
          <img src={sideBar_banner_2} alt="Grocery offer" className="w-full h-96 object-cover" />
          <div className="absolute inset-0  flex items-center p-8 bg-white/20">
            <div className="text-black max-w-md">
              <h2 className="text-3xl font-bold mb-2">Grocery full of inspiration</h2>
              <p className="text-lg mb-4">Only this week. Don't miss...</p>
              <p className="text-2xl font-bold mb-4">From <span className="text-yellow-300">$6.99</span></p>
              <Link to={'/product-shop/0'}  className="bg-white text-blue-800 px-6 py-2 rounded-full font-bold transition-all hover:bg-gray-100">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
    
      </>
    }
  </aside>
);

export default Sidebar