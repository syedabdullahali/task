import React, { useState } from 'react';
import { CartItem } from '../../types/cart.s';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Spinner from '../ui/Spin';

const CartList = ({
  data,
  handleQuantity,
  handleRemove,
}: {
  data: { items: CartItem[] };
  handleQuantity: (id: number, qnt: number) => Promise<void>;
  handleRemove: (id: number) => Promise<void>;
}) => {
  const navigate = useNavigate();
  const [loadingId, setLoadingId] = useState<number | null>(null);

  if (!data?.items?.length) {
    return <div>
        <p className="text-center text-gray-500 mt-8">Your cart is empty.</p>
        <Link className='block m-auto py-1 px-4 rounded-md bg-blue-700 text-white w-fit text-md' to={"/product-shop/0"}>Go to Shop</Link>
    </div>;
  }

  const updateQuantity = async (id: number, qnt: number) => {
    if (qnt < 1) return;
    setLoadingId(id);
    const toastId = toast.loading('Updating quantity...');
    try {
      await handleQuantity(id, qnt);
      toast.success('Quantity updated', { id: toastId });
    } catch (err) {
      toast.error('Failed to update quantity', { id: toastId });
    } finally {
      setLoadingId(null);
    }
  };

  const removeItem = async (id: number) => {
    setLoadingId(id);
    const toastId = toast.loading('Removing item...');
    try {
      await handleRemove(id);
      toast.success('Item removed', { id: toastId });
    } catch (err) {
      toast.error('Failed to remove item', { id: toastId });
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <>
      {data.items.map((el: CartItem) => (
        <div
          key={el.product.id}
          className="flex flex-col sm:flex-row p-4 sm:p-6 md:p-8 border-b border-gray-200 last:border-b-0 items-center"
        >
          <div className="flex-shrink-0 w-32 h-32 sm:w-48 sm:h-48 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center mb-4 sm:mb-0">
            <img
              src={el.product.image.url}
              alt={el.product.title}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex-1 ml-0 sm:ml-8 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-2">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                {el.product.title}
              </h2>
            </div>
            <p className="text-sm text-gray-600 mb-2">Quantity: {el.quantity}</p>
            <p className="text-red-500 font-semibold">
              {el.product.discount > 0 ? (
                <>
                  <del className="text-gray-600">${el.product.price}</del>
                  <span className="ml-2 text-red-500">
                    ${(el.product.price - (el.product.discount / 100) * el.product.price)}
                  </span>
                </>
              ) : (
                <span className="ml-2 text-gray-600">${el.product.price}</span>
              )}
            </p>

            <div className="flex items-center justify-center sm:justify-start space-x-4 text-sm text-gray-500 mt-4">
              <button
                onClick={() => navigate(`/product-shop/${el.product.category.id}`)}
                className="text-gray-900 font-medium hover:underline transition-colors"
              >
                {el.product.category.title}
              </button>
              <div className="w-px h-4 bg-gray-300"></div>
              <button
                onClick={() => removeItem(el.product.id)}
                className="text-red-500 font-medium hover:underline transition-colors"
                disabled={loadingId === el.product.id}
              >
                REMOVE
              </button>
            </div>
          </div>

          <div className="flex items-center mt-4 sm:mt-0">
            <button
              aria-label={`Decrease quantity of ${el.product.title}`}
              onClick={() => updateQuantity(el.product.id, el.quantity - 1)}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
              disabled={loadingId === el.product.id}
            >
              
             {loadingId===el.product.id ? <Spinner size={10}/>:'-'}

            </button>
            <span className="mx-2 w-8 text-center text-lg font-medium">
                { el.quantity}
            </span>
            <button
              aria-label={`Increase quantity of ${el.product.title}`}
              onClick={() => updateQuantity(el.product.id, el.quantity + 1)}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:bg-gray-200 transition-colors"
              disabled={loadingId === el.product.id}
            >
               {loadingId===el.product.id ? <Spinner size={10}/>:'+'}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartList;
