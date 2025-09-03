import { useNavigate } from "react-router-dom";
import {ShoppingCart, Star } from "../../icon/icon";
import Skeleton from "react-loading-skeleton";
import { ProductCardProps } from "../../types/product";

const StarRating = ({ rating }:{rating:Number}) => {
  const stars = Array(5).fill(null).map((_, i) => (
    <Star
      key={i}
      size={"14"}
      className={i < 0 ? 'text-yellow-400 fill-current' : 'text-gray-300'}
    />
  ));
  return <div className="flex">{stars}</div>;
};

const ProductCard = ({ product,isLoading=false }:ProductCardProps) => {
    const navigate = useNavigate()

    

return  <div className="bg-white p-4  border-r border-y  border-gray-200 border-gray-200 transition-transform transform hover:scale-105">
      {isLoading?<>
      <Skeleton height={140}/>
      <Skeleton height={20}/>
      <Skeleton height={20}/>
      <Skeleton height={20}/>
      <Skeleton height={50}/>

      </>:
      <>
      <div className="relative">
        
        
        <img src={product.image.url} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-2" />
      

      {((product.discount/100)*product.price)>0?<span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">-${((product.discount/100)*product.price).toFixed(2)} Off</span>:""}
    
    </div>
    <div className="flex flex-col items-center text-center mt-2">
      <p className="text-gray-800 text-sm font-medium truncate w-full">{product.title}</p>
      <div className="flex items-center justify-center space-x-1 my-1">
        <StarRating rating={product.rating} />        
      </div>
      <p className="text-red-500 font-semibold">
        {(product.discount/100)*product.price>0?
        <>
        <del className="text-gray-600">${product.price} </del>
         <span className="ml-2 text-red-500"> ${(product.price-(product.discount/100)*product.price) }</span>
         </>:
        <span className="ml-2 text-gray-600"> ${(product.price-(product.discount/100)*product.price) }</span>
        }
      </p>
      <button onClick={()=>{
        navigate("/product-detail/"+product.id)}} className="mt-3 w-full bg-blue-800 text-white text-sm py-2 rounded-full hover:bg-blue-700 transition-colors">
        <ShoppingCart size={"16"} className="inline-block mr-2" /> Add
      </button>
    </div>
    </>
    }
  </div>
};

export default ProductCard