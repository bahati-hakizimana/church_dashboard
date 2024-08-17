import React, { useState } from 'react';
import axios from 'axios';
import HeroPng from "../../assets/website/hero_advent.jpg";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', {
        username: formData.username,
        password: formData.password,
      });

      const { access, refresh, role } = response.data;

      // Store tokens if needed
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);

      // Navigate based on user role
      if (role === 'admin') {
        navigate('/admin');
      } else if (role === 'staff') {
        navigate('/staff');
      } else if (role === 'user') {
        navigate('/members');
      }
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <Link to="/" className=' text-2xl capitalize text-green-600 flex justify-start mb-2 hover:text-black '>Home</Link>
          <hr />
          <span className="mb-3 text-4xl font-bold">Welcome back</span>
          <span className="font-light text-gray-400 mb-8">Welcome back! Please enter your details</span>

          {error && <p className="text-red-500 mb-4">{error}</p>}
          
          <form onSubmit={handleSubmit}>
            <div className="py-4">
              <span className="mb-2 text-md">Username</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Password</span>
              <input
                type="password"
                name="password"
                id="pass"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between w-full py-4">
              <div className="mr-24">
                <input type="checkbox" name="remember" id="remember" className="mr-2" />
                <span className="text-md">Remember for 30 days</span>
              </div>
              <Link className="font-bold text-md">Forgot password</Link>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-800 text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            >
              Sign in
            </button>
          </form>

          <button
            className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-blue-800 hover:text-white"
          >
            <FaGoogle className='w-6 h-6 inline mr-2' />
            Sign in with Google
          </button>

          <div className="text-center text-gray-400">
            Don't have an account?
            <Link to="/signup" className="font-bold text-black hover:text-green-600"> Sign up for free</Link>
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
  );
};

export default Login;
