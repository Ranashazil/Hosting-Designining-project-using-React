import React from 'react';

function Header() {
  return (
    <div className="absolute inset-0 top-16 bg-gradient-to-r from-purple-400 to-purple-800 text-white flex flex-col md:flex-row items-center justify-between p-8 md:p-16">


      <div className="md:w-1/2 space-y-4">
        <h5 className="text-lg md:text-xl font-semibold text-red-400">
          You are my everything <span className="text-pink-400 font-bold">You Should Have</span>
        </h5>
        <h1 className="text-3xl md:text-5xl font-bold  text-blue-500  leading-tight">
          The listener <br /> of <span className="text-purple-700">UI/UX</span><br /> design
        </h1>
        <p className="text-gray-200 mt-4">
          lorem ipsum is the text of website
        </p>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
        <img 
          src="https://plus.unsplash.com/premium_photo-1681511753256-8a9e855eb6ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D" 
          alt="SpeakerImage" 
          className="rounded-lg shadow-lg shadow-purple-500/50 w-full max-w-xs md:max-w-md"
        />
      </div>
    </div>
  );
}

export default Header;
