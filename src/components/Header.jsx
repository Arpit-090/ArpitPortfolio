import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/Screenshot 2025-09-30 185419.png";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false); // ✅ added

  return (
    <>
      <header
        className={`shadow sticky z-50 top-0 ${
          isDarkMode ? "bg-black" : "bg-white"
        }`}
      >
        <nav
          className={`${
            isDarkMode ? "bg-black" : "bg-white"
          } border-gray-200 px-4 lg:px-6 py-2.5`}
        >
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} className="mr-3 h-12" alt="Logo" />
            </Link>

            {/* Right side buttons */}
            <div className="flex items-center lg:order-2">
              {/* Dark/Light Toggle */}
              <button
                onClick={toggleTheme}
                className="mr-3 px-4 py-2 rounded-lg font-medium transition
                                       bg-orange-600 text-white hover:bg-orange-700"
              >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>

              {/* Hamburger (Mobile only) */}
              <button
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden 
                           hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Links */}
            <div
              className={`${
                isOpen ? "flex" : "hidden"
              } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    onClick={() => setIsOpen(false)} // close on click
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b
                      ${
                        isActive
                          ? "text-orange-500"
                          : isDarkMode
                          ? "text-gray-300"
                          : "text-gray-600"
                      }
                      border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                      hover:text-orange-700 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/About"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b
                      ${
                        isActive
                          ? "text-orange-500"
                          : isDarkMode
                          ? "text-gray-300"
                          : "text-gray-600"
                      }
                      border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                      hover:text-orange-700 lg:p-0`
                    }
                  >
                    About Me
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Contact-Me"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b
                      ${
                        isActive
                          ? "text-orange-500"
                          : isDarkMode
                          ? "text-gray-300"
                          : "text-gray-600"
                      }
                      border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                      hover:text-orange-700 lg:p-0`
                    }
                  >
                    Contact Me
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/My-Projects"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b
                      ${
                        isActive
                          ? "text-orange-500"
                          : isDarkMode
                          ? "text-gray-300"
                          : "text-gray-600"
                      }
                      border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                      hover:text-orange-700 lg:p-0`
                    }
                  >
                    My Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Git-Hub"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b
                      ${
                        isActive
                          ? "text-orange-500"
                          : isDarkMode
                          ? "text-gray-300"
                          : "text-gray-600"
                      }
                      border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                      hover:text-orange-700 lg:p-0`
                    }
                  >
                    Git Hub
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
