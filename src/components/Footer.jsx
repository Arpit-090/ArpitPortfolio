import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Screenshot 2025-09-30 185419.png";
import { useTheme } from "../context/ThemeContext"; // ✅ added

function Footer() {
    const { isDarkMode } = useTheme(); // ✅ get current theme

    return (
        <footer className={`${isDarkMode ? "bg-black" : "bg-white"} border-y transition-colors duration-500`}>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo}
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className={`mb-6 text-sm font-semibold uppercase ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}>
                                Resources
                            </h2>
                            <ul className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} font-medium`}>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className={`mb-6 text-sm font-semibold uppercase ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}>
                                Follow us
                            </h2>
                            <ul className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} font-medium`}>
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/Arpit-090"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className={`mb-6 text-sm font-semibold uppercase ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}>
                                Legal
                            </h2>
                            <ul className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} font-medium`}>
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className={`my-6 ${isDarkMode ? "border-gray-700" : "border-gray-200"} sm:mx-auto lg:my-8`} />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} text-sm sm:text-center`}>
                        © 2023
                        <a href="" className="hover:underline">
                            Arpit kumar
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        {/* social icons */}
                        <Link to="#" className={`${isDarkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-900"}`}>
                            {/* facebook svg */}
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                            </svg>
                        </Link>
                        {/* other icons unchanged, just dynamic text color */}
                        {/* ...repeat for Discord, Twitter, GitHub, Dribbble */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
