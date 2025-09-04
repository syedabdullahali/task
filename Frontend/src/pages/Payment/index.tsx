import React, { useState, FormEvent, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Link, useParams } from "react-router-dom";
import signUp from "../../assets/paymentBanner.png"
import Skeleton from "react-loading-skeleton";

const CheckoutForm: React.FC<{ clientSecret: string }> = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    try {
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setErrorMessage(submitError.message ?? "Validation failed");
        return;
      }

      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `http://localhost:3000/order/${ id }/complete`,
        },
      });

      if (error) {
        setErrorMessage(error.message ?? "Payment failed");
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <div className=" py-2 ">
        <button
          type="submit"
          disabled={!stripe || !elements}
          className={`px-6 py-3 rounded text-white font-semibold  transition-all duration-300 w-full mb-2
      ${ !stripe || !elements
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-800 hover:opacity-90" }`}
        >
           Checkout Payment
        </button>

        <Link
          to={'/order_tracking'}
          type="button"
          className="px-6 py-3 rounded border border-gray-300 text-gray-700 font-semibold  w-full 
      hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
        >
          Skip & Pay Later
        </Link>
      </div>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!);

const Payment: React.FC = () => {
  const [clientSecret, setClientSecret] = useState<string | null>('');
  const { id } = useParams();

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const res = await fetch(`${ process.env.REACT_APP_API_BASE_URL }/payment/create-intent/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ order_id: id }),
        });
        console.log(res)

        if (!res.ok) {
          throw new Error(`Failed to create payment intent: ${ res.statusText }`);
        }

        const data = await res.json();
        if (!data?.data?.client_secret) {
          throw new Error("No client_secret returned from backend");
        }

        setClientSecret(data?.data?.client_secret);
      } catch (err: any) {
        console.error("Error creating payment intent:", err.message || err);
      }
    };

    if (id) {
      createPaymentIntent();
    }
  }, [id]);



  if (!clientSecret) {
    return (
      <div className="w-96 m-auto mb-4">
        <div className="w-96 bg-white shadow-xl rounded-xl p-2 border border-gray-200">
          <Skeleton width={"100%"} height={"13rem"} borderRadius={12} />

          <div className="mt-4 h-[22rem] space-y-4 overflow-hidden">
            <Skeleton height={45} borderRadius={8} />
            <Skeleton height={45} borderRadius={8} />
            <Skeleton height={45} borderRadius={8} />
            <Skeleton height={50} borderRadius={8} />
            <Skeleton height={45} borderRadius={8} />
            <Skeleton height={50} borderRadius={8} />
          </div>
        </div>
      </div>
    );
  }

  const options = { clientSecret, appearance: {} };

  return (

    <div className="m-auto   bg-white w-full justify-center   flex flex-col lg:flex-row mb-4">
      <div className="w-96 bg-white shadow-xl rounded-xl p-2  rounded border border-gray-200">
        <input className="text-green-300" />
        <img src={signUp} className="w-full h-[13rem] " />
        <div className="h-[28rem] overflow-y-scroll overflow-x-hidden">
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm clientSecret={clientSecret} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
