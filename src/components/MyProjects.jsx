import React from "react";
import { Link } from "react-router-dom";
import workwheels from "../assets/images/Screenshot 2025-07-31 013955.png"
import startUps from "../assets/images/image.png"
import TheProfessions from "../assets/images/Gemini_Generated_Image_uccqy2uccqy2uccq.png"
import { useTheme } from "../context/ThemeContext"; // ✅ theme support

function Projects() {
  const { isDarkMode } = useTheme();

  // Example project data (with descriptions + images)
  const projects = [
    {
      id: 1,
      name: "Tic Tac Toe",
      route: "/projects/tic-tac-toe",
      description:
        "A fun, interactive Tic Tac Toe game built with React. Features include player vs player mode, responsive design, and smooth animations.",
      image: "/images/tictactoe.png",
    },
    {
      id: 2,
      name: "The Start UPS",
      route: "/projects/weather-app",
      description:
        "A platform designed for startup enthusiasts to share ideas, collaborate, and find resources. Built using MERN stack with authentication and real-time updates.",
      image: startUps,
    },
    {
      id: 3,
      name: "WorkWheels",
      route: "/projects/portfolio",
      description:
        "A taxi service app for corporate employees. Includes ride-booking, scheduling, and route optimization. Backend powered by Node.js and MongoDB.",
      image: workwheels,
    },
    {
      id: 4,
      name: "THE Profession",
      route: "/projects/chat-app",
      description:
        "A professional networking platform to find people like you and fuel your passion. Supports profiles, chat, and content sharing.",
      image: TheProfessions,
    },
    {
      id: 5,
      name: "Videotube",
      route: "/projects/task-manager",
      description:
        "A YouTube clone where users can upload, view, and manage videos. Features include playlists, comments, and recommendations powered by AI.",
      image: "/images/videotube.png",
    },
  ];

  return (
    <div
      className={`min-h-screen py-12 px-6 transition-colors duration-500 overflow-y-auto ${
        isDarkMode ? "bg-black" : "bg-gray-100"
      }`}
    >
      <h1
        className={`text-center text-3xl font-bold mb-10 ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={project.route}
            className={`p-6 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl flex flex-col ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="rounded-xl mb-4 object-cover h-40 w-full"
            />

            {/* Project Title */}
            <h2 className="text-xl font-semibold">{project.name}</h2>

            {/* Project Description */}
            <p className="mt-2 text-sm opacity-80">{project.description}</p>

            <p className="mt-3 text-blue-500 font-medium">
              Click to explore →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
