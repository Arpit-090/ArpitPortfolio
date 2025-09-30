import React from "react";
import { useTheme } from "../context/ThemeContext"; // ✅ Dark/Light mode support

function ContactMe() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`relative flex items-top justify-center min-h-[700px] transition-colors duration-500 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-gray-800"
      } sm:items-center sm:pt-0`}
    >
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div
              className={`p-6 rounded-lg shadow-lg transition ${
                isDarkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Get in touch:
              </h1>
              <p className="text-lg sm:text-xl font-medium mt-2">
                Fill in the form to start a conversation
              </p>

              {/* Address */}
              <div className="flex items-center mt-8">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-orange-500"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="ml-4 text-md font-semibold w-60">
                  3/477/04 Awas-Vikas Hanspuram, Kanpur, Uttar Pradesh
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center mt-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-orange-500"
                >
                  <path d="M3 5a2 2 0 012-2h3.28l1.498 4.493-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257 4.493 1.498V19a2 2 0 01-2 2H17C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="ml-4 text-md font-semibold w-60">
                  +91 7388588522
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center mt-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-orange-500"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="ml-4 text-md font-semibold w-60">
                  arpit.ideal@gmail.com || arpit.kumaaarrr@gmail.com
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              className={`p-6 rounded-lg shadow-lg flex flex-col justify-center transition ${
                isDarkMode ? "bg-gray-900 text-white" : "bg-white"
              }`}
            >
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="mt-2 py-3 px-3 rounded-lg border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="mt-2 py-3 px-3 rounded-lg border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-4">
                <input
                  type="tel"
                  name="tel"
                  placeholder="Telephone Number"
                  className="mt-2 py-3 px-3 rounded-lg border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="md:w-32 bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mt-6 hover:bg-orange-700 transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
