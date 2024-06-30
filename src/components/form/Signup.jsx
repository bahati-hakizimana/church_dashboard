import React from 'react'
import HeroPng from "../../assets/website/hero_advent.jpg";
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div
        className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
        {/* left side  */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome</span>
          <span className="font-light text-gray-400 mb-8">
            Register Hire
          </span>

          <div className=' grid grid-cols-2 gap-5'>
            <div className="py-4">
              <span className="mb-2 text-md">First name</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="first_name"
                id="firstname"
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Last name</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="last_name"
                id="lastname"
              />
            </div>
          </div>

          <div className=' grid grid-cols-2 gap-5'>
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
            <span className="mb-2 text-md">Location</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="location"
              id="location"
            />
          </div>
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
          <button
            className="w-full bg-blue-800 text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Sign up
          </button>
          <div className="text-center text-gray-400">
            have an account?
            <Link to="/login" className="font-bold text-black hover:text-green-600">Login</Link>
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

    //   <div class="min-h-screen py-40" style="background-image: linear-gradient(115deg, #9F7AEA, #FEE2FE)">
    //   <div class="container mx-auto">
    //     <div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
    //       <div class="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style="background-image: url('images/Register-Background.png');">
    //         <h1 class="text-white text-3xl mb-3">Welcome</h1>
    //         <div>
    //           <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" class="text-purple-500 font-semibold">Learn more</a></p>
    //         </div>
    //       </div>
    //       <div class="w-full lg:w-1/2 py-16 px-12">
    //         <h2  class="text-3xl mb-4">Register</h2>
    //         <p class="mb-4">
    //           Create your account. It’s free and only take a minute
    //         </p>
    //         <form action="#">
    //           <div class="grid grid-cols-2 gap-5">
    //             <input type="text" placeholder="Firstname" class="border border-gray-400 py-1 px-2" />
    //             <input type="text" placeholder="Surname" class="border border-gray-400 py-1 px-2" />
    //           </div>
    //           <div class="mt-5">
    //             <input type="text" placeholder="Email" class="border border-gray-400 py-1 px-2 w-full" />
    //           </div>
    //           <div class="mt-5">
    //             <input type="password" placeholder="Password" class="border border-gray-400 py-1 px-2 w-full" />
    //           </div>
    //           <div class="mt-5">
    //             <input type="password" placeholder="Confirm Password" class="border border-gray-400 py-1 px-2 w-full" />
    //           </div>
    //           <div class="mt-5">
    //             <input type="checkbox" class="border border-gray-400" />
    //             <span>
    //               I accept the <a href="#" class="text-purple-500 font-semibold">Terms of Use</a> &  <a href="#" class="text-purple-500 font-semibold">Privacy Policy</a> 
    //             </span>
    //           </div>
    //           <div class="mt-5">
    //             <button class="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Signup


