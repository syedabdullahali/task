import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e:ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password, rememberMe });
    // Add your login logic here
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

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                className="rounded text-blue-600 focus:ring-blue-500"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="ml-2">Remember for 30 days</span>
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password
            </a>
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
