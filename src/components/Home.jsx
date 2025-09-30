// import { useTheme } from "../context/ThemeContext";
import {useTheme} from "../context/ThemeContext"
import bgImg from "../assets/images/WhatsApp Image 2025-09-30 at 6.56.19 PM.png"

export default function Home() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`w-full min-h-screen flex items-center justify-center transition-colors duration-500 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl p-8">
        
        {/* Left Side - Image */}
        <div className="flex justify-center items-center">
          <img
            src={bgImg} // replace with your image path
            alt="Profile"
            className="rounded-2xl shadow-lg max-w-sm w-full object-cover"
          />
        </div>

        {/* Right Side - Introduction */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Arpit</h1>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            I am a passionate developer who loves building creative and impactful
            applications. My focus areas are{" "}
            <span className={isDarkMode ? "text-purple-400" : "text-purple-600"}>
              MERN
            </span>
            ,{" "}
            <span className={isDarkMode ? "text-purple-400" : "text-purple-600"}>
              C++
            </span>,{" "}
            <span className={isDarkMode ? "text-purple-400" : "text-purple-600"}>
              Genarative AI
            </span>,{" "}
            <span className={isDarkMode ? "text-purple-400" : "text-purple-600"}>
              Devops
            </span>{" "}
            and modern web development.
          </p>

          {/* Toggle Button */}
          {/* <button
            onClick={toggleTheme}
            className="px-6 py-2 rounded-2xl font-semibold shadow-md transition duration-300
                       bg-purple-500 text-white hover:bg-purple-600"
          >
            Switch to {isDarkMode ? "Light" : "Dark"} Mode
          </button> */}
        </div>
      </div>
    </div>
  );
}
