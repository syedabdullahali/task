import React from 'react'
import heroBannerImage from "../../assets/HeroBanner.png"
import heroBannerImage1 from "../../assets/HeroBanner1.jpg"
import heroBannerImage2 from "../../assets/HeroBanner2.png"
import heroBannerImage3 from "../../assets/HeroBanner3.jpg"
import heroBannerImage4 from "../../assets/HeroBanner4.jpg"

import { Carousel } from '../ui/Carousel'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

const HeroBanner = ({isLoading=false}:{isLoading?:boolean}) => {
  return (
    isLoading?<Skeleton height={250} count={2} containerClassName="relative w-full flex gap-2  overflow-hidden    rounded" />
    :<section className="relative w-full h-64   mb-8 grid grid-cols-2 gap-2">
      <div className='relative rounded-md overflow-hidden shadow-lg  '>
        <img src={heroBannerImage3} alt="Grocery offer" className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center p-8">
          <div className="text-white max-w-md">
            <h2 className="text-3xl font-bold mb-2">Grocery full of inspiration</h2>
            <p className="text-lg mb-4">Only this week. Don't miss...</p>
            <p className="text-2xl font-bold mb-4">From <span className="text-yellow-300">$6.99</span></p>
            <button className="bg-white text-blue-800 px-6 py-2 rounded-full font-bold transition-all hover:bg-gray-100">
              Shop Now
            </button>
          </div>
        </div>

      </div>
      <div className='relative  rounded-md overflow-hidden shadow-lg bg-blue-400 '>
        <img src={heroBannerImage4} alt="Grocery offer" className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center p-8">
          <div className="text-white max-w-md">
            <h2 className="text-3xl font-bold mb-2">Grocery full of inspiration</h2>
            <p className="text-lg mb-4">Only this week. Don't miss...</p>
            <p className="text-2xl font-bold mb-4">From <span className="text-yellow-300">$6.99</span></p>
            <button className="bg-white text-blue-800 px-6 py-2 rounded-full font-bold transition-all hover:bg-gray-100">
              Shop Now
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

const SubHeroBanner = ({isLoading=false}:{isLoading?:boolean}) => {
  return isLoading?
  <>
  <Skeleton height={300} className='mb-6' containerClassName="relative w-full  overflow-hidden    rounded"/>
  </>
  :
  <Carousel>
     
    <div className="relative w-full  overflow-hidden  mb-2 bg-blue-900 rounded">
      <img src={heroBannerImage} alt="Grocery offer" className="w-full h-80 object-cover" />
      <div className="absolute right-0 inset-0 bg-gradient-to-r from-blue-900/60 to-transparent flex justify-end items-center p-8">
        <div className="text-white max-w-md  ">
          <h2 className="text-3xl font-bold mb-2">Grocery full of inspiration</h2>
          <p className="text-lg mb-4">Only this week. Don't miss...</p>
          <p className="text-2xl font-bold mb-4">From <span className="text-yellow-300">$6.99</span></p>
          <Link to={'/product-shop/0'}  className="bg-white ml-auto  text-blue-800 px-6 py-2 rounded-full font-bold transition-all hover:bg-gray-100">
            Shop Now
          </Link>
        </div>
      </div>
    </div>


    <div className="relative w-full  overflow-hidden  mb-2 bg-blue-900 rounded">
      <img src={heroBannerImage1} alt="Grocery offer" className="w-full h-80 object-cover" />
      <div className="absolute right-0 inset-0 bg-black/40 flex w-full  items-center p-8">
        <div className="text-white max-w-md  ">
          <h2 className="text-3xl font-bold mb-2">Grocery full of inspiration</h2>
          <p className="text-lg mb-4">Only this week. Don't miss...</p>
          <p className="text-2xl font-bold mb-4">From <span className="text-yellow-300">$6.99</span></p>
          <Link to={'/product-shop/0'} className="bg-white text-blue-800 px-6 py-2 rounded-full font-bold transition-all hover:bg-gray-100">
            Shop Now
          </Link>
        </div>
      </div>
    </div>

     <div className="relative w-full  overflow-hidden  mb-2 bg-amber-900 rounded">
      <img src={heroBannerImage2} alt="Grocery offer" className="w-full h-80 object-cover" />
      <div  className="absolute right-0 inset-0 bg-gradient-to-r from-blue-900/60 to-black/70 flex w-full  items-center p-8">
        <div className="text-white max-w-md  ">
          <h2 className="text-3xl font-bold mb-2">Grocery full of inspiration</h2>
          <p className="text-lg mb-4">Only this week. Don't miss...</p>
          <p className="text-2xl font-bold mb-4">From <span className="text-yellow-300">$6.99</span></p>
          <Link to={'/product-shop/0'} className="bg-white text-blue-800 px-6 py-2 rounded-full font-bold transition-all hover:bg-gray-100">
            Shop Now
          </Link>
        </div>
      </div>
    </div>

  </Carousel>


}

export { HeroBanner, SubHeroBanner }
