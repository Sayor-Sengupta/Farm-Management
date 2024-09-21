import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Login() {
  return (
 
      <form className="w-screen h-screen flex items-center justify-center">
        {/* Sign In Form */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Sign In</h1>
         
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="mb-4 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          
          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          
          {/* Forgot Password */}
          <div className="text-right mb-4">
            <a href="#" className="text-purple-600 hover:text-purple-800 text-sm">
              Forgot Your Password?
            </a>
          </div>
          
          {/* Sign In Button */}
          <button className="bg-green-600 text-white py-3 rounded-lg w-full hover:bg-purple-700 transition duration-300">
            Sign In
          </button>
        </div>

        {/* Sign Up Section */}
        <div className="w-1/2 bg-green-600 text-white p-8 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-6">Hey This is me the Mathew!</h1>
          <p className="mb-8 text-center">
            {/* Displaying the imported image */}
            <img src="" alt="logo" className="w-70 h-80 mb-4" />
          </p>
          <button className="bg-white text-purple-600 py-3 rounded-lg w-full max-w-xs hover:bg-gray-100 transition duration-300">
            Sign Up
          </button>
        </div>
      </form>
    
  );
}

export default Login;
