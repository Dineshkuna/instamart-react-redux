/* eslint-disable react/prop-types */
const SignUp = ({ openLogin }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* Sign Up Container */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
            />
          </div>

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

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Login Section */}
        <div className="text-center mt-6 text-sm">
          <span>Already have an account? </span>
          <button
            onClick={openLogin}
            className="text-red-600 underline hover:no-underline"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
  
