/* eslint-disable react/prop-types */
// import React from 'react'

const Login = ({ openSignUp }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* Login Container */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Form Options (Remember Me & Forgot Password) */}
          <div className="flex justify-between items-center">
            {/* Remember Me Checkbox */}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-red-600 rounded focus:ring-red-500"
              />
              <span className="text-sm text-gray-700">Remember Me</span>
            </label>

            {/* Forgot Password Link */}
            <a href="#" className="text-sm text-red-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
          >
            Login
          </button>
        </form>

        {/* Signup Section */}
        <div className="text-center mt-6 text-sm">
          <span>Dont have an account? </span>
          <button
            onClick={openSignUp}
            className="text-red-600 underline hover:no-underline"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
