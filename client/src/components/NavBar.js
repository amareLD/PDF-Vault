// src/components/Header.js
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import api from '../api';


const NavBar = ({ user, setUser }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post('/users/logout');
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header className=" p-4">
      <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex m-auto items-center justify-between w-full md:w-auto mb-4 md:mb-0 gap-96">
          <div className="  p-1 pr-20 font-extrabold text-2xl flex items-center gap-1 text-black-400">
            <img
              src="/pdf.svg" // Reference to the SVG in the public folder
              alt="PDF Vault"
              className="cursor-pointer w-10 h-10 text-yellow-700"
            />
            <span className="cursor-pointer hover:text-orange-600">Vault</span>
          </div>
          <div className="relative  flex-grow flex justify-center gap-8 ">
            <Link
              to="/"
              className={`text-black p-0.5 text-lg font-bold relative group ${
                location.pathname === '/'
                  ? 'border-4 border-black rounded-md'
                  : ''
              }`}
            >
              Home
              <span className="block h-[3px] bg-black absolute left-0 bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
            <Link
              to="/aboutus"
              className={`text-black p-0.5 text-lg font-bold relative group ${
                location.pathname === '/aboutus'
                  ? 'border-4 border-black rounded-md'
                  : ''
              }`}
            >
              About us
              <span className="block h-[3px] bg-black absolute left-0 bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          </div>
          <button className="text-black md:hidden">Menu</button>
          <div className="flex bg-neutral-400 flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto rounded-full p-1 ">
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-white font-bold text-red-500 px-2 py-1 rounded-full hover:bg-red-500 hover:text-white"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className=" text-black font-bold px-2 py-1 rounded-full hover:text-white"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-white font-bold text-black px-2 py-1 rounded-full hover:bg-black hover:text-white"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;