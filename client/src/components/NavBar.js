import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import api from '../api';

const NavBar = ({ user, setUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" p-4">
      <nav className="container  flex flex-col md:flex-row items-center justify-between">
      <div className="flex mx-auto items-center justify-between w-full md:w-auto mb-4 md:mb-0 gap-4 sm:gap-20 lg:gap-40 xl:gap-72">
          <div className="  p-1 pr-10 font-extrabold text-2xl flex items-center gap-1 text-black-400">
            <img 
              src="/pdf.svg" 
              alt="PDF Vault"
              className="cursor-pointer w-10 h-10 hover:scale-125 transition-transform origin-right duration-300"
            />
            <span className="cursor-pointer hover:scale-125 transition-transform origin-left duration-300">
              Vault
            </span>
          </div>
          <div className="relative  flex-grow flex justify-center gap-8 ">
            <Link
              to="/"
              className={`text-black hidden md:flex p-0.5 text-lg font-bold relative group ${
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
              className={`text-black hidden md:flex p-0.5 text-lg font-bold relative group ${
                location.pathname === '/aboutus'
                  ? 'border-4 border-black rounded-md'
                  : ''
              }`}
            >
              About us
              <span className="block h-[3px] bg-black absolute left-0 bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          </div>
        
          <div className=" bg-neutral-400 hidden md:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto rounded-full p-1 ">
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
        <button
          className="md:hidden text-black hover:text-gray-500 transition-colors duration-300"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <Link
            to="/"
            className={`text-lg font-bold ${
              location.pathname === '/' ? 'border-b-4 border-black' : ''
            }`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className={`text-lg font-bold ${
              location.pathname === '/aboutus' ? 'border-b-4 border-black' : ''
            }`}
            onClick={toggleMenu}
          >
            About Us
          </Link>
          {user ? (
            <button
              onClick={() => {
                handleLogout();
                toggleMenu();
              }}
              className="bg-white font-bold text-red-500 px-2 py-1 rounded-full hover:bg-red-500 hover:text-white"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-gray-200 text-black font-bold px-2 py-1 rounded-full hover:bg-gray-400 hover:text-white"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-gray-200 font-bold text-black px-2 py-1 rounded-full hover:bg-gray-400 hover:text-white"
                onClick={toggleMenu}
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default NavBar;
