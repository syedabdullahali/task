import { useMutation } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { postPrivateData } from '../../api/apiPrivate';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const [isShowPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()


  const { mutate: handleLogin } = useMutation({
    mutationFn: (obj: { email: string; password: string }) =>
      postPrivateData("/user/login/", obj),
    onMutate: () => {
      toast.loading("Logging in...", { id: "loginToast" });
    },
    onSuccess: (data) => {
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      localStorage.setItem("userInfo", JSON.stringify(data.user));

      toast.success(data.message || "Login successful!", {
        id: "loginToast",
        className:
          "bg-green-100 text-green-700 font-medium border border-green-300 rounded-lg",
      });

      // Redirect after short delay
      const redirectPath = data.user.role === "admin" ? "/admin" : "/product-shop/0";
      setTimeout(() => {
        navigate(redirectPath);
      }, 2000);
      
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong...", {
        id: "loginToast",
        className:
          "bg-red-100 text-red-700 font-medium border border-red-300 rounded-lg",
      });
    },
  });
  const handleLoginForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    handleLogin({ email, password });
  };

  return (
    <div className="flex items-start justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="text-gray-500 text-sm font-medium mb-1">
          Please enter your details
        </div>
        <h1 className="text-2xl font-bold mb-6">
          Welcome  To  <span className="font-bold text-blue-800">Fresh<span className="font-normal">Cart</span></span>
        </h1>

        <form onSubmit={handleLoginForm} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type={isShowPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                className="rounded text-blue-600 focus:ring-blue-500"
                checked={isShowPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              <span className="ml-2">Show Password</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">
              <div className="text-gray-400">or</div>
            </span>
          </div>
        </div>
        <span className="text-gray-500">Don't have an account? </span>

        <Link to={'/signup'}
          className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition duration-300"
          onClick={() => console.log('Sign in with Google')}
        >

          <span>SignUp Your Account</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
