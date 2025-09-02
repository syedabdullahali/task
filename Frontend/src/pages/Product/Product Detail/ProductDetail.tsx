import React, { useEffect, useState } from 'react';
import { CheckIcon, ChevronRight, Star, Truck } from '../../../icon/icon';
import ProductCard from '../../../components/product/ProductCard';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../../../api/method';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'

type TabProps = {
  title: string,
  active: boolean,
  onClick: () => void
}

const Tab = ({ title, active, onClick }: TabProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-3 text-sm font-semibold transition-colors duration-200 ${ active ? 'text-blue-800 border-b-2 border-blue-800' : 'text-gray-500 hover:text-gray-700'
      }`}
  >
    {title}
  </button>
);

const ProductDetailPage = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('DESCRIPTION');

  const { data: { data }, isFetching, isSuccess,isLoading } = useQuery({
    queryKey: ['productDetails', id],
    queryFn: () => getData(`/products/details/${ id }/`),
    initialData: { data: null } ,
  })

  const isSkeletonLoading = isLoading || !Boolean(data)

  type Product = {
    image: string;
    name: string;
    discount: string;
    rating: number;
    reviews: number;
    price: string;
  };


  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top
  }, [id]);


  console.log(data)
  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased px-24">
      <div className=" mx-auto">
        <div className="bg-white rounded-2xl  p-6 mb-8 lg:flex lg:space-x-8">
          <div className="flex-shrink-0 mb-6 lg:mb-0  lg:w-1/2 flex items-center justify-center relative">

            {isSkeletonLoading ? (
              <>
                <div className="absolute top-4 left-4 w-1/3">
                  <Skeleton style={{ borderRadius: '0.5rem' }} height={40}  />
                </div>
                <div className="absolute top-4 right-4 w-1/3">
                  <Skeleton style={{ borderRadius: '0.5rem' }} height={40}  />
                </div>
              </>
            ) : (
              <>
                <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  -{data.discount}% Off
                </span>
                <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {data.type}
                </span>
              </>
            )}

            {isSkeletonLoading || !data.image?.url ? (
              <Skeleton style={{ borderRadius: '0.5rem' }} height={400} width={450} />
            ) : (
              <img
                src={data.image.url}
                alt={data.name || "Product"}
                className="rounded-lg max-h-96 w-96"
              />
            )}

          </div>

          <div className="lg:w-1/2">

            {isSkeletonLoading?
            <>
             <Skeleton width={300} height={50}/>
             <Skeleton width={300} height={40}/>
            </>
            :<>
            <h1 className="text-3xl font-bold text-gray-900">
              {data.title}
            </h1>
            
            <div className="flex items-center text-sm text-gray-500 mt-2 space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>REVIEW</span>
              <span className="text-gray-400">•</span>
              <span>SKU: FGRMK</span>
              <span className="text-gray-400">•</span>
              <span>Storer</span>
            </div>
            </>
            }

            {isSkeletonLoading?
              <>
               <Skeleton width={'100%'} height={40} count={2}/> 
               <Skeleton width={'100%'} height={60} count={3}/> 
               <Skeleton width={'100%'} height={20} count={9}/> 

              </>
            :<>
            <div className="flex items-center mt-4">
              {((data.discount/100)*data.price)>0?<span className="text-sm font-semibold text-gray-500 line-through mr-2">${data.price}</span>:""}
              <span className="text-3xl font-bold text-blue-800">${ data.price -((data.discount/100)*data.price)}</span>
            </div>

            <p className="text-sm text-gray-500 mt-2">
                   Premium meat, rich dairy, vibrant vegetables, fresh bakery treats, and ripe fruits. Carefully selected for freshness, quality, and flavor, every product makes your meals wholesome, delicious, and satisfying every day.            </p>

            <div className="flex items-center mt-6 space-x-4">
              <div className="flex items-center border border-gray-300 rounded-full">
                <button className="px-3 py-1 text-gray-600">-</button>
                <span className="px-2">1</span>
                <button className="px-3 py-1 text-gray-600">+</button>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200">
                Add to cart
              </button>
              <button className="bg-transparent text-gray-600 hover:text-blue-800 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
            <button className="w-full bg-blue-800 hover:bg-blue-800 text-white font-semibold py-2.5 mt-2 rounded-full transition-colors duration-200">
              Buy now
            </button>

         

            <div className="mt-6 space-y-2 text-sm text-gray-600">
              <p className="flex items-center">
                <CheckIcon />
                Type: {data.type}
              </p>
              <p className="flex items-center">
                <CheckIcon />
                MTG: {new Date(data.mtg).toDateString()}
              </p>
              <p className="flex items-center">
                <CheckIcon />
                LIFE: { Math.ceil(
  (new Date(data.mtg).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
)} Days
              </p>
            </div>

               <div className="mt-4 text-sm text-gray-500">
              <span className="font-semibold text-gray-800">Category:</span> Grocery & Staples
            </div>

            <div className="mt-6 flex space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18.375 2.25c-1.03 0-1.928.69-2.215 1.701l-2.078 7.373a4.999 4.999 0 00-1.077 2.455c.381 1.015.424 2.062.132 3.092L11.75 19.5h-1.5l.432-1.728A1.5 1.5 0 0111.968 15h2.815c.57 0 1.076-.328 1.332-.857l.504-1.008a2.999 2.999 0 012.384-2.261 2.999 2.999 0 012.384-2.261 2.999 2.999 0 00-2.384-2.261l-.504-1.008a1.5 1.5 0 01-1.332-.857H11.968a.75.75 0 01-.75-.75V2.25h12.15zM7.5 7.5a1.5 1.5 0 000 3h9a1.5 1.5 0 000-3h-9zM3 12a1.5 1.5 0 000 3h1.5a1.5 1.5 0 000-3H3zM21 9a1.5 1.5 0 000 3h1.5a1.5 1.5 0 000-3H21z" />
                </svg>
              </div>
            </div>
            </>}   

         
          </div>

          <div className="lg:w-1/4 mt-8 lg:mt-0 p-6 bg-gray-100 rounded-2xl">
            {isSkeletonLoading?
            <>
             <Skeleton height={30} />
             <Skeleton height={60} count={3}/>
            </>:<>
            <div className="mb-4">
              <p className="text-gray-500 text-sm">Covid-19 info: We keep delivering.</p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Truck />
                <div>
                  <h4 className="font-semibold text-gray-800">Free Shipping</h4>
                  <p className="text-sm text-gray-500">to all orders over $150</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <div>
                  <h4 className="font-semibold text-gray-800">Guaranteed 100% Organic</h4>
                  <p className="text-sm text-gray-500">from natural farmas</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m7.5-3v4.5a2.25 2.25 0 01-2.25 2.25H15M12 21h2.25a2.25 2.25 0 002.25-2.25V15M12 21a9 9 0 100-18m0 18v-4.5" />
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-800">1 Day Secure</h4>
                  <p className="text-sm text-gray-500">if you change your mind</p>
                </div>
              </li>
            </ul>
            </>
            
            }

          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

          {isSkeletonLoading?
          <>
          <Skeleton width={150} height={50} count={2} containerClassName='flex gap-2 mb-2' />
          <Skeleton width={'100%'} count={4} height={15} />
          </>
          :
          <>
          <div className="flex border-b border-gray-200 space-x-4 mb-4">
            {['DESCRIPTION', 'REVIEWS (2)'].map(tab => (
              <Tab
                key={tab}
                title={tab}
                active={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              />
            ))}
          </div>
          
          <div className="mt-6 text-sm text-gray-600">
            {activeTab === 'DESCRIPTION' && (
              <p>
                {data.description}
              </p>
            )}
            {activeTab === 'REVIEWS (2)' && <p>Reviews for the product...</p>}
          </div>
          </>}

        </div>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {isSkeletonLoading?<Skeleton height={30} width={200}/>:<h2 className="text-xl sm:text-2xl font-bold text-gray-800">Related Products</h2>}

            {isSkeletonLoading?<Skeleton width={100}/>:<a href="#" className="flex items-center text-sm font-medium text-blue-800 hover:underline">
              View All <ChevronRight size={"16"} className="ml-1" />
            </a>}
            
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 ">
            {(isSkeletonLoading?[{},{},{},{},{}]:data?.related_products)?.map((p: Product, i: number) => <ProductCard isLoading={isSkeletonLoading} key={i} product={p} />)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetailPage;
