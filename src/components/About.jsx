import React from "react";
import myPic from "../assets/images/ARPIT IMAGE.png";
import { useTheme } from "../context/ThemeContext"; // ✅ add theme hook

export default function About() {
    const { isDarkMode } = useTheme(); // ✅ current theme

    const skills = [
        "HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB",
        "C++", "OpenAI", "GitHub", "Postman", "Selenium"
    ];

    return (
        <div className={`py-16 transition-colors duration-500 ${isDarkMode ? "bg-black" : "bg-white"}`}>
            <div className="container m-auto px-6 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    {/* image */}
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src={myPic}
                            alt="About"
                            className="rounded-xl"
                        />
                    </div>
                    {/* text */}
                    <div className="md:7/12 lg:w-6/12">
                        <h2
                            className={`text-2xl font-bold md:text-4xl ${
                                isDarkMode ? "text-white" : "text-gray-900"
                            }`}
                        >
                            My name is Arpit Kumar and I am a passionate developer.
                        </h2>
                        <p
                            className={`mt-6 ${
                                isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                        >
                            I have built a strong foundation in web development using the MERN stack which includes
                            MongoDB, Express, React and Node.js. I have also built AI-integrated applications with the help of 
                            generative AI, and recently I have taken a step towards DevOps so I can better understand the 
                            workflow of applications from beginner to advanced, aiming to move forward as a FULLSTACK Developer.
                        </p>
                        <p
                            className={`mt-4 ${
                                isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                        >
                          I have solved many Data Structures and Algorithms problems using C++, which helps me 
                          improve backend logic and problem-solving skills. I also explored how software is created using C++ 
                          and came across the QT Framework, so in future I plan to learn QML to build software using my 
                          favourite language: C++.
                        </p>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-12">
                    <h2
                        className={`text-2xl font-bold md:text-4xl mb-6 ${
                            isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                    >
                        Technologies I work on
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className={`px-4 py-2 rounded-full text-sm font-medium shadow transition-colors duration-300 ${
                                    isDarkMode
                                        ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                }`}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
