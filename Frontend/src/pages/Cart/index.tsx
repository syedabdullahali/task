import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPrivateData, patchPrivateData, postPrivateData } from "../../api/apiPrivate";
import { CartP, CartItem } from "../../types/cart.s";
import { PlaceOrder } from "../../types/order.s";
import Skeleton from "react-loading-skeleton";
import CartList from "../../components/Cart/CartList";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/ui/Spin";
import toast from "react-hot-toast";

const Cart = () => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const [destination, setDestination] = useState('')
  const navigate = useNavigate();
  const { data: { data } = { data: null }, isLoading, isError } = useQuery({
    queryKey: ["cartData"],
    queryFn: () => getPrivateData("/cart/cart_list/"),
    refetchOnWindowFocus: true,
    staleTime: 0,
  });

  const { mutate: updateCartItem } = useMutation({
    mutationFn: (obj: { product_id: number; quantity: number }) =>
      patchPrivateData("/cart/update/", obj),
  });

  const { mutate: placeCartItem } = useMutation({
    mutationFn: (obj: PlaceOrder) => postPrivateData("/order/create/", obj),
  });

  const handleQuantity = async (product_id: number, quantity: number): Promise<void> => {
    if (quantity < 1) return;

    try {
      await new Promise((resolve, reject) => {
        updateCartItem({ product_id, quantity }, {
          onSuccess: () => resolve(true),
          onError: (err: any) => reject(err),
        });
      });
      queryClient.invalidateQueries({ queryKey: ["cartData"] });
    } catch (err) {
      console.error("Failed to update quantity", err);
    }
  };

  const handleRemove = async (product_id: number): Promise<void> => {
    try {
      await new Promise((resolve, reject) => {
        updateCartItem({ product_id, quantity: 0 }, {
          onSuccess: () => resolve(true),
          onError: (err: any) => reject(err),
        });
      });
      queryClient.invalidateQueries({ queryKey: ["cartData"] });
    } catch (err) {
      console.error("Failed to remove item", err);
    }
  };

  const handlePlaceCartItem = async (cartData: CartP): Promise<void> => {
    setLoading(true)
    const toastId = toast.loading('Placing order....');

    if (!cartData.items.length) return;

    const payload: PlaceOrder = {
      items: cartData.items.map((el) => ({
        product_id: el.product.id,
        quantity: el.quantity,
      })),
      destination
    };

    try {
      await new Promise((resolve, reject) => {
        placeCartItem(payload, {
          onSuccess: (res: any) => {
            resolve(true);
            queryClient.invalidateQueries({ queryKey: ["cartData"] });
            navigate(`/payment/${ res.data.id }`);

          },
          onError: (err: any) => reject(err),
        });
      });
      toast.success('Order placed', { id: toastId });
      setLoading(false)
    } catch (err) {
      console.error("Failed to place order", err);
      setLoading(false)
      toast.error('Failed to Placing order', { id: toastId });
    }
  };


  if (isLoading) {
    return (
      <div className="bg-gray-100 min-h-screen p-4 sm:p-8 md:p-12 lg:p-16 flex items-start justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col sm:flex-row p-4 sm:p-6 md:p-8 border-b border-gray-200 last:border-b-0 items-center">
                <div className="flex-shrink-0 w-32 h-32 sm:w-48 sm:h-48 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center mb-4 sm:mb-0">
                  <Skeleton width="100%" height="100%" />
                </div>
                <div className="flex-1 ml-0 sm:ml-8 text-center sm:text-left">
                  <Skeleton width={200} height={30} className="mb-2" />
                  <Skeleton width={150} height={20} className="mb-2" />
                  <Skeleton width={100} height={20} />
                </div>
                <div className="flex items-center mt-4 sm:mt-0 space-x-2">
                  <Skeleton width={30} height={30} circle />
                  <Skeleton width={30} height={30} circle />
                </div>
              </div>
            ))}
            <div className="p-4 sm:p-6 md:p-8 flex justify-end">
              <Skeleton width={200} height={50} />
            </div>
          </div>
          <div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-8 sticky top-16 h-fit">
            <Skeleton width={150} height={30} className="mb-4" />
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-between mb-4">
                <Skeleton width={80} height={20} />
                <Skeleton width={50} height={20} />
              </div>
            ))}
            <Skeleton width="100%" height={30} className="mt-6" />
          </div>
        </div>
      </div>
    );
  }

  if (isError) return <div>Error loading cart</div>;

  const totalItems = data?.items?.length || 0;
  const totalAmount =
    data?.items?.reduce((sum: number, item: CartItem) => {
      const discountedPrice = item.product.price - (item.product.discount / 100) * item.product.price;
      return sum + discountedPrice * item.quantity;
    }, 0) || 0;

  const totaDiscountAmount =
    data?.items?.reduce((sum: number, item: CartItem) => {
      const discountedPrice = (item.product.discount / 100) * item.product.price;
      return sum + (discountedPrice * item.quantity);
    }, 0) || 0;

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8 md:p-12 lg:p-16 flex items-start justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
          <CartList data={data} handleQuantity={handleQuantity} handleRemove={handleRemove} />


          {totalItems ? <div className="p-4 sm:p-6 md:p-8 flex justify-end ">
            <form onSubmit={(e) => {
              e.preventDefault()
              handlePlaceCartItem(data)
            }} className="flex items-center w-full  gap-4">
              <div className="w-full">
                <label className="font-bold ">Enter destination</label>
                <input value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Enter destination" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              <button
                type="submit"
                disabled={totalItems === 0}
                className="px-10 self-end  shrink-0 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors text-lg disabled:bg-gray-300"
              >
                PLACE ORDER
              </button>{loading ?
                <div><Spinner className="text-white ml-2  shrink-0" /></div>
                : <></>}
            </form>

          </div> : <></>}

        </div>

        <div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-8 sticky top-16 h-fit">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            PRICE DETAILS
          </h2>
          <div className="space-y-4 text-gray-600">
            <div className="flex justify-between items-center border-b pb-4">
              <span>Total Item ({totalItems})</span>
              <span> ${totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center border-b pb-4 text-green-500">
              <span>Price Discount ({totalItems})</span>
              <span>${totaDiscountAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center border-b pb-4">
              <span>Platform Fee</span>
              <span>${totalItems ? 5 : 0}</span>
            </div>
          </div>

          {totalItems > 0 && (
            <>
              <div className="flex justify-between items-center text-lg md:text-xl font-semibold text-gray-800 my-6 pt-6">
                <span>Total Amount</span>
                <span>₹{(totalAmount + 5).toFixed(2)}</span>
              </div>
              <p className="text-green-500 text-sm font-medium mb-6">
                You saved ₹{(data.items.reduce(
                  (sum: number, item: CartItem) => sum + (item.product.discount / 100) * item.product.price * item.quantity,
                  0
                )).toFixed(2)} on this order
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
