import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 

export default function OrderCompletePage() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const navigate = useNavigate(); 

  const paymentIntent = query.get("payment_intent");
  const redirectStatus = query.get("redirect_status");

  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    let newStatus = "Checking...";
    if (redirectStatus === "succeeded") {
      newStatus = "✅ Payment successful!";
    } else if (redirectStatus === "failed") {
      newStatus = "❌ Payment failed. Please try again.";
    } else if (redirectStatus === "canceled") {
      newStatus = "🛑 Payment canceled.";
    }

    setStatus(newStatus);
    const timer = setTimeout(() => {
      navigate("/order_tracking");
    }, 3000); 

    return () => clearTimeout(timer);
  }, [redirectStatus, paymentIntent, navigate]);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
      <div className="p-10 text-center bg-white rounded-lg shadow-xl animate-fade-in">
        <h2 className="text-3xl font-bold mb-4">Payment Result</h2>
        <p className="text-xl text-gray-700">{status}</p>
        <div className="mt-6">
          {redirectStatus === "succeeded" && (
            <svg
              className="w-16 h-16 mx-auto text-green-500 animate-pulse"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          {redirectStatus === "failed" && (
            <svg
              className="w-16 h-16 mx-auto text-red-500 animate-pulse"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}