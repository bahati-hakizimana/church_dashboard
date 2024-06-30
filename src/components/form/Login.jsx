import React from 'react'
import HeroPng from "../../assets/website/hero_advent.jpg";
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">

        <div
          className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
        >
          {/* left side  */}
          <div className="flex flex-col justify-center p-8 md:p-14">
          <Link to="/" className=' text-2xl capitalize text-green-600 flex justify-start mb-2 hover:text-black '>Home</Link>
          <hr />
            <span className="mb-3 text-4xl font-bold">Welcome back</span>
            
            <span className="font-light text-gray-400 mb-8">
              Welcom back! Please enter your details
            </span>
            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                id="email"
              />
            </div>
            <div className="py-4">
              <span class="mb-2 text-md">Password</span>
              <input
                type="password"
                name="pass"
                id="pass"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
            </div>
            <div className="flex justify-between w-full py-4">
              <div className="mr-24">
                <input type="checkbox" name="ch" id="ch" class="mr-2" />
                <span className="text-md">Remember for 30 days</span>
              </div>
              <Link className="font-bold text-md">Forgot password</Link>
            </div>
            <button
              className="w-full bg-blue-800 text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            >
              Sign in
            </button>
            <button
              className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-blue-800 hover:text-white"
            >
              {/* <img src="google.svg" alt="img" class="w-6 h-6 inline mr-2" /> */}
              <FaGoogle className='w-6 h-6 inline mr-2' />
              Sign in with Google
            </button>
            <div className="text-center text-gray-400">
              Dont'have an account?
              <Link to="/signup" className="font-bold text-black hover:text-green-600">Sign up for free</Link>
            </div>
          </div>
          {/* right side */}
          <div className="relative">
            <img
              src={HeroPng}
              alt="img"
              className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
            />

          </div>
        </div>
      </div>
    </>

  )
}

export default Login
