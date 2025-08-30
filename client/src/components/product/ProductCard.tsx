import { Heart, ShoppingCart, Star } from "../../icon/icon";

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

const ProductCard = ({ product }:{product:any}) => (
  <div className="bg-white p-4  border-r border-y  border-gray-200 border-gray-200 transition-transform transform hover:scale-105">
    <div className="relative">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-2" />
      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">{product.discount}</span>
      <div className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-100">
        <Heart size={"16"} className="text-gray-500" />
      </div>
    </div>
    <div className="flex flex-col items-center text-center mt-2">
      <p className="text-gray-800 text-sm font-medium truncate w-full">{product.name}</p>
      <div className="flex items-center justify-center space-x-1 my-1">
        <StarRating rating={product.rating} />
        <span className="text-xs text-gray-500">({product.reviews})</span>
      </div>
      <p className="text-red-500 font-semibold">{product.price}</p>
      <button className="mt-3 w-full bg-blue-800 text-white text-sm py-2 rounded-full hover:bg-blue-700 transition-colors">
        <ShoppingCart size={"16"} className="inline-block mr-2" /> Add
      </button>
    </div>
  </div>
);

export default ProductCard