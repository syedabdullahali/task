import { ChevronRight } from "../../icon/icon";
import sideBar_banner_1 from "../../assets/side_Banner.jpg"
import sideBar_banner_2 from "../../assets/side_Banner2.jpg"
import Skeleton from "react-loading-skeleton";
const products = [
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOL35Snnu-L315KM5nMolf5z48A3qm4RS4oQ&shttps://fabsupermart.com/wp-content/uploads/2023/02/BM_Meatballs_Packshot-510x757-1.jpg', name: 'Al Natural Italian-Style Chicken', discount: '-30%', rating: 4, reviews: 12, price: '$7.25' },
  { image: 'https://m.media-amazon.com/images/I/61mJ+pCAuUL._UF350,350_QL50_.jpg', name: "Angel's Rosamochapopop sweet & salty", discount: '-20%', rating: 5, reviews: 20, price: '$3.29' },
  { image: 'https://plantx.com/cdn/shop/products/FieldRoast-CreamyOriginalChaoBlock_7oz_700x.jpg?v=1647003797', name: 'Felid Roast Choc Cheese Creamy', discount: '-15%', rating: 4, reviews: 15, price: '$9.50' },
  { image: 'https://m.media-amazon.com/images/I/61oZ1kVdJBL.jpg', name: 'Blue Diamond Almonds Lightly Salted', discount: '-25%', rating: 5, reviews: 10, price: '$4.99' }
];

type Categories = { category_title: string, category_image: { url: string }, category_id: string }

const Sidebar = ({ categoriesData, isLoading = false }: { categoriesData: Categories[], isLoading: boolean }) => (

  <aside className="w-64 bg-white  rounded-lg shadow-md font-inter   ">
    <div className='p-5  bg-white'>
      {isLoading ? <>
        <Skeleton width={150} height={40} className="mb-4" />
        <Skeleton containerClassName="w-full" height={30} count={4} />
      </> :
        <>
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {categoriesData?.map((item: Categories) => (
              <li key={item.category_id} className="flex items-center justify-between p-2  hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="flex items-center">{item.category_title}
                </span>
                <ChevronRight size={"16"} className="text-gray-400" />

              </li>
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
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold transition-all hover:bg-gray-100">
                Shop Now
              </button>
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
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold transition-all hover:bg-gray-100">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="  border-t border-gray-200 sticky top-40 bg-white">
          <h3 className="text-lg font-bold mb-4 p-4">Recommended Products</h3>
          <div className="space-y-4">
            {products.map((item, index) => (
              <div key={index} className="flex items-center pl-4 py-4  gap-4 cursor-pointer hover:bg-gray-100 rounded-lg py-2 transition-colors">
                <img src={item.image} className="w-12 h-12 bg-gray-200 rounded-md" />
                <div>
                  <p className="text-sm font-medium text-gray-800">{item.name}</p>
                  <p className="text-xs text-red-500 font-semibold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    }
  </aside>
);

export default Sidebar