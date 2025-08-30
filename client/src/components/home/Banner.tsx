import React from 'react'

const HeroBanner = () => {
  return (
     <section className="relative w-full   mb-8 grid grid-cols-2 gap-2">
            <div className='relative rounded-md overflow-hidden shadow-lg  '>
                 <img  src="https://t3.ftcdn.net/jpg/02/84/47/42/360_F_284474219_au82CrQt5yNF8P6Uyoa7FSkiX8bzbG11.jpg" alt="Grocery offer" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center p-8">
              <div className="text-white max-w-md">
                <h2 className="text-3xl font-bold mb-2">Grocery full of inspiration</h2>
                <p className="text-lg mb-4">Only this week. Don't miss...</p>
                <p className="text-2xl font-bold mb-4">From <span className="text-yellow-300">$6.99</span></p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold transition-all hover:bg-gray-100">
                  Shop Now
                </button>
              </div>
            </div>
            
            </div>
               <div className='relative  rounded-md overflow-hidden shadow-lg bg-blue-400 '>
                 <img  src="https://www.tastingtable.com/img/gallery/the-store-bought-meats-that-benefit-single-grocery-shoppers/intro-1692129244.jpg" alt="Grocery offer" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center p-8">
              <div className="text-white max-w-md">
                <h2 className="text-3xl font-bold mb-2">Grocery full of inspiration</h2>
                <p className="text-lg mb-4">Only this week. Don't miss...</p>
                <p className="text-2xl font-bold mb-4">From <span className="text-yellow-300">$6.99</span></p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold transition-all hover:bg-gray-100">
                  Shop Now
                </button>
              </div>
            </div>
            
            </div>
          </section>
  )
}

const SubHeroBanner = ()=>{
    return     <section className="relative w-full rounded-2xl overflow-hidden shadow-lg mb-8">
            <img  src="https://grocery.opentestdrive.com/media/http-_kartrocket-mtp.s3.amazonaws.com_all-stores_image_grocery_data_banners_grocery.jpg" alt="Grocery offer" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/60 to-transparent flex items-center p-8">
              <div className="text-white max-w-md">
                <h2 className="text-3xl font-bold mb-2">Grocery full of inspiration</h2>
                <p className="text-lg mb-4">Only this week. Don't miss...</p>
                <p className="text-2xl font-bold mb-4">From <span className="text-yellow-300">$6.99</span></p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold transition-all hover:bg-gray-100">
                  Shop Now
                </button>
              </div>
            </div>
          </section>

}

export  {HeroBanner,SubHeroBanner}
