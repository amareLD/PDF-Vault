import React from 'react';
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaPinterest,
} from 'react-icons/fa';
//import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineFacebook } from 'react-icons/ai';
import '../styles/global.css';

const Footer = () => {
  return (
    <>
      <div className="bg-neutral-700 h-96">
        <div className="z-30 p-5 rounded-xl shadow-xl flex flex-col sm:flex-row w-auto relative h-auto sm:h-[20rem] mx-[2rem] justify-around bg-black">
          {/* PDFVault */}
          <div className="basis-full sm:basis-[35] w-full h-full flex flex-col mr-0 sm:mr-[4rem] mb-4 sm:mb-0">
            <p className="flex items-center justify-center sm:justify-start">
              <span className="text-[2.5rem] font-semibold whitespace-nowrap text-white font-[Lobster] tracking-[2px]">
                PDFVault
              </span>
            </p>
            <p className="text-[#828282] tracking-[1.5px] text-[0.8rem] mb-4 mt-2 mx-1 font-bold text-center sm:text-left">
              Welcome To PDFVault
            </p>
          </div>

          {/* Quick Links */}
          <div className="basis-full sm:basis-[15] w-full h-full mt-4 sm:mt-0">
            <p className="flex items-center justify-center sm:justify-start">
              <span className="text-[1rem] font-semibold whitespace-nowrap text-white tracking-[2px]">
                QUICK LINKS
              </span>
            </p>
            <ul className="text-[#828282] tracking-[1.5px] text-[0.8rem] text-center sm:text-left">
              <li className="mb-4 mt-2">About</li>
              <li className="mb-4 mt-2">Blog</li>
              <li className="mb-4 mt-2">Contact</li>
              <li className="mb-4 mt-2">FAQ</li>
            </ul>
          </div>

          {/* Account */}
          <div className="basis-full sm:basis-[15] w-full h-full mt-4 sm:mt-0">
            <p className="flex items-center justify-center sm:justify-start">
              <span className="text-[1rem] font-semibold whitespace-nowrap text-white tracking-[2px]">
                ACCOUNT
              </span>
            </p>
            <ul className="text-[#828282] tracking-[1.5px] text-[0.8rem] text-center sm:text-left">
              <li className="mb-4 mt-2">My Account</li>
              <li className="mb-4 mt-2">Security</li>
              <li className="mb-4 mt-2">Privacy Policy</li>
              <li className="mb-4 mt-2">Cookie Policy</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="basis-full sm:basis-[35] w-full h-full flex flex-col mr-0 sm:mr-[4rem] leading-[4rem]">
            <p className="flex items-center justify-center sm:justify-start">
              <span className="text-[1rem] font-semibold whitespace-nowrap text-white tracking-[2px]">
                NEWSLETTER
              </span>
            </p>
            <div className="relative mb-8">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
              <input
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-black rounded-[0.5rem] text-left"
                placeholder="Email"
                required=""
              />
              <button
                type="submit"
                className="w-28 h-9 text-white absolute bottom-2 end-2 bg-[#e15b1c] hover:bg-[#bd6f3e] font-medium rounded-[0.2rem] text-sm dark:bg-[#00FFFF] dark:focus:ring-[#00FFFF]"
              >
                Subscribe
              </button>
            </div>
            <div className="flex flex-row justify-between">
              <div className="w-[2.5rem] h-[2.5rem] border-transparent rounded-[50%] bg-white dark:bg-[#f4f4f4] flex items-center justify-center relative">
                <span className="block">
                  <FaFacebook />
                </span>
              </div>
              <div className="w-[2.5rem] h-[2.5rem] border-transparent rounded-[50%] bg-white dark:bg-[#f4f4f4] flex items-center justify-center relative">
                <span className="block">
                  <FaTwitter />
                </span>
              </div>
              <div className="w-[2.5rem] h-[2.5rem] border-transparent rounded-[50%] bg-white dark:bg-[#f4f4f4] flex items-center justify-center relative">
                <span className="block">
                  <FaYoutube />
                </span>
              </div>
              <div className="w-[2.5rem] h-[2.5rem] border-transparent rounded-[50%] bg-white dark:bg-[#f4f4f4] flex items-center justify-center relative">
                <span className="block">
                  <FaInstagram />
                </span>
              </div>
              <div className="w-[2.5rem] h-[2.5rem] border-transparent rounded-[50%] bg-white dark:bg-[#f4f4f4] flex items-center justify-center relative">
                <span className="block">
                  <FaPinterest />
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-[75%] bg-[#000] h-[1px] items-center justify-center block m-auto" />
        <p className="text-[#96969f] tracking-[1px] text-[0.8rem] mb-4 mt-2 text-center">
          PDFVault Copyright © 2024 All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
