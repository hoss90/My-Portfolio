import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
function Banner() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <nav className="bg-sky-600 font-['Times'] font-bold-700 " >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <img
                    className="h-16 w-16 mr-6 hover:opacity-60"
                    src={logo}
                    alt="logo"
                  />
                </div>
                <div className="hidden md:block">
                  <ul className="ml-10 flex content-center items-center space-x-16 ">
  
                    <li
                    
                      className="text-indigo-200 hover:bg-indigo-800 hover:text-white px-3 py-2 rounded-md text-xl font-bold ml-12"
                    >
                      <Link to="/">Home</Link>
                    </li>
  
                    <li
                      
                      className="text-indigo-200 hover:bg-indigo-800 hover:text-white px-3 py-2 rounded-md text-xl font-bold"
                    >
                      <Link to="/About">About</Link>
                    </li>
  
                    <li
                      
                      className="text-indigo-200 hover:bg-indigo-800 hover:text-white px-3 py-2 rounded-md text-xl font-bold"
                    >
                      <Link to="/skills">Skills</Link>
                    </li>
  
                    <li
                    
                      className="text-indigo-200 hover:bg-indigo-800 hover:text-white px-3 py-2 rounded-md text-xl font-bold"
                    >
                      <Link to="/contact">Contacts</Link>
                    </li>
                  </ul>
     
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-sky-900 inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
  
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden h-screen z-10" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <ul>
                  <li
                    className="hover:bg-indigo-700 text-white block px-3 py-2 rounded-md text-xl text-center font-medium"
                  >
                    <Link to="/">Home</Link>
                  </li>
  
                  <li
                    className="text-indigo-300 hover:bg-indigo-700 hover:text-white block px-3 py-2 rounded-md text-xl text-center font-medium"
                  >
                    <Link to="/about">About</Link>
                  </li>
  
                  <li
                    className="text-indigo-300 hover:bg-indigo-700 hover:text-white block px-3 py-2 rounded-md text-xl text-center font-medium"
                  >
                    <Link to="/skills">Skills</Link>
                  </li>
  
                  <li
                    className="text-indigo-300 hover:bg-indigo-700 hover:text-white block px-3 py-2 rounded-md text-xl text-center font-medium"
                  >
                    <Link to="/contact">Contacts</Link>
                  </li>
                  </ul>
                 
                </div>
              </div>
            )}
          </Transition>
        </nav>

      </div>
    );
  }
  
  
  export default Banner;
  