import React from 'react';

function Navbar() {
  return (
    <nav className="bg-purple-800 text-white p-4 shadow-lg shadow-blue-500/50 w-full fixed top-0 left-0 z-10">

      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-2xl flex font-bold">
           <span> <img src="https://t3.ftcdn.net/jpg/04/34/55/64/240_F_434556442_li6QefMnrALu1blgFWPGqWvgfhbMsqFU.jpg" width={40} className='rounded-lg mr-1' /></span>
          <h3>Volumistics</h3>
        </div>
        
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><a href="#" className="hover:text-purple-300 transition">Home</a></li>
          <li><a href="#" className="hover:text-purple-300 transition">About</a></li>
          <li><a href="#" className="hover:text-purple-300 transition">Contact</a></li>
          <li><a href="#" className="hover:text-purple-300 transition">Blog</a></li>
          <li><a href="#" className="hover:text-purple-300 transition">Profile</a></li>
        </ul>

        {/* Buttons */}
        <div className="space-x-3">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition">
            Sign Up
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
