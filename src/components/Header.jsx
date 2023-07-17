// import React from 'react'

import { useState } from "react";

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div className="bg-white fixed w-full">
        <nav className="flex justify-between md:justify-center  bg-black w-full items-center">
          <div className="px-9 md:pr-6 py-2 items-center flex">
            <span className="md:hidden" onClick={() => setIsClicked(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
            <img
              className="w-24 md:w-28 ml-3"
              src="https://materialdepot.in/images/header/md_main_logo.png"
              alt="logo"
            />
          </div>

          <div className="flex justify-center items-center">
            <div className="md:bg-white rounded-md">
              <form className="">
                <div className="flex h-5 py-3 lg:w-[35rem] xl:w-[55rem] rounded-md items-center">
                  <span className="items-center px-3 py-2 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 md:w-4 md:h-4 text-[#afa9a9] font-extrabold"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </span>
                  <input
                    className="w-[45rem] hidden md:flex outline-none text-xs px-2 md:w-48 lg:w-full "
                    placeholder="Search for products..."
                  />
                  <a className="px-3 hidden md:flex" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-[#afa9a9]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                      />
                    </svg>
                  </a>
                </div>
              </form>
            </div>
            <div className="flex text-white text-xs items-center mx-3">
              <div className="justify-between hidden md:flex md:text-base md:gap-5 md:mr-2">
                <div className="flex items-center">
                  <a className="" href="#">
                    Categories
                  </a>
                  <span className="px-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3 md:w-4 md:h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>
                <div className="flex items-center">
                  <a href="#">Brands</a>
                  <span className="px-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3 md:w-4 md:h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="items-center mr-3 py-1">
                <button className="bg-[#FFDB15] text-sm md:text-xs px-5 font-medium text-black py-3 md:py-2 items-center rounded-md">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className="hidden lg:flex lg:justify-center lg:items-center border-b-2">
          <nav className="py-1">
            <div className="px-5">
              <ul className="flex text-xs font-medium cursor-pointer">
                <li className="flex items-center  px-2">
                  <a href="#">Plywood & Boards</a>
                  <span className="px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </li>
                <li className="flex items-center  px-2">
                  <a href="#">Laminates</a>
                  <span className="px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </li>
                <li className="flex items-center  px-2">
                  <a href="#">Tiles</a>
                  <span className="px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </li>
                <li className="flex items-center  px-2">
                  <a href="#">Louvers & Panels</a>
                  <span className="px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </li>
                <li className="flex items-center  px-2">
                  <a href="#">Quartz</a>
                  <span className="px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </li>
                <li className="flex items-center  px-2">
                  <a href="#">Wooden Flooring</a>
                  <span className="px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </li>
                <li className="flex items-center  px-2">
                  <a href="#">Hardware</a>
                  <span className="px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </li>
                <li className="flex items-center  px-2">
                  <a href="#">Sanitaryware</a>
                  <span className="px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </li>
                <li className="flex items-center  px-2">
                  <a href="#">Wallpaper</a>
                  <span className="px-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {isClicked && (
        <div className="bg-white md:hidden h-[100%] z-10 w-80 fixed">
          <ul>
            <li className="text-2xl px-4 font-[500] py-5 bg-[#F8F9FA] justify-between flex items-center">
              <a href="#">Welcome!</a>
              <span onClick={() => setIsClicked(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </li>
            <li className="px-4 py-7 text-lg border-b border-black font-[500]">
              <a href="#">Home</a>
            </li>
            <li className="flex px-4 py-7 text-lg border-b border-black  items-center justify-between font-[500]">
              <a href="#">Shop By Category</a>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </li>
            <li className="px-4 py-7 text-lg font-[500]">
              <a href="#">All Brands</a>
            </li>
            <li className="px-4 py-7 text-lg">
              <a href="#">Contact Us</a>
            </li>
            <li className="px-4 py-7 text-lg">
              <a href="#">Refund Policy</a>
            </li>
            <li className="px-4 py-7 text-lg">
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
