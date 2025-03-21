import React from "react";

const Signup = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 p-10 bg-gray-200 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-gray-600">
            Log in to manage your shipments and deliveries seamlessly.
          </p>
        </div>

        {/* Right Section (Login Form) */}
        <div className="w-1/2 p-10">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>

          {/* Input Fields */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Phone no./ Email"
              className="w-full px-4 py-3 border rounded-md bg-gray-100 text-gray-700 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-md bg-gray-100 text-gray-700 focus:outline-none"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Forgot your password?
            </a>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-gray-300 text-gray-700 py-3 rounded-md text-lg font-semibold">
            Sign in
          </button>

          {/* Signup Link */}
          <div className="text-center mt-4">
            <span className="text-gray-600">Don’t have an account?</span>{" "}
            <a href="#" className="font-semibold text-gray-900 hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
