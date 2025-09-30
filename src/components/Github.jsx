import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext"; // ✅ theme support

function Github() {
  const [data, setData] = useState(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    fetch("https://api.github.com/users/Arpit-090")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return (
      <div
        className={`flex items-center justify-center min-h-screen text-2xl ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Loading GitHub Data...
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-500 ${
        isDarkMode ? "bg-black" : "bg-gray-100"
      }`}
    >
      <div
        className={`max-w-md w-full rounded-2xl shadow-xl p-6 text-center transition ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          className="w-32 h-32 rounded-full mx-auto border-4 border-orange-500"
        />
        <h1 className="mt-4 text-2xl font-bold">{data.name || data.login}</h1>
        <p className="text-gray-400 text-sm">@{data.login}</p>
        <p className="mt-3 text-sm">{data.bio || "No bio available"}</p>

        <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-semibold">{data.public_repos}</p>
            <p className="text-gray-400">Repos</p>
          </div>
          <div>
            <p className="font-semibold">{data.followers}</p>
            <p className="text-gray-400">Followers</p>
          </div>
          <div>
            <p className="font-semibold">{data.following}</p>
            <p className="text-gray-400">Following</p>
          </div>
        </div>

        <a
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block bg-orange-500 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600 transition"
        >
          Visit GitHub Profile →
        </a>
      </div>
    </div>
  );
}

export default Github;
