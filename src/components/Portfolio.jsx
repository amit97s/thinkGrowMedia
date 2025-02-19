import React from "react";
import { dl, g, learnLab, maac2, tgm } from "../assets";

const projects = [
  { title: "MAAC CP", url: "https://maaccp.com/", image: maac2 },
  { title: "Galena Global", url: "https://galenaglobal.com/", image: g },
  { title: "Think Grow Media", url: "https://thinkgrowmedia.com/", image: tgm },
  { title: "The Glimmer World", url: "https://www.theglimmerworld.com/", image: g },
  { title: "MAAC GZB", url: "https://www.maacgzb.com/", image: maac2 },
  { title: "MAAC Karol Bagh", url: "https://maackarolbagh.com/", image: maac2 },
  { title: "LearnZ Lab", url: "https://learnzlab.in/", image: learnLab },
  { title: "MAAC Paschim Vihar", url: "https://maacpaschimvihar.com/", image: maac2 },
  { title: "LearnZ Lab (Alt)", url: "https://learnzlab.com/", image: learnLab },
  { title: "Diogo Louis", url: "http://diogolouis.com/", image: dl }
];

function Portfolio() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-blue-900 py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <h2 className="text-4xl font-bold text-white text-center mb-12">My Portfolios</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-80 h-80 bg-slate-00 rounded-2xl shadow-lg shadow-gray-600 overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-gray-500"
          >
            <div className="w-full h-3/4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain bg-black"
              />
            </div>
            <div className="h-1/4 bg-black bg-opacity-70 flex flex-col justify-center items-center pb-10">
              <h3 className="text-lg font-semibold text-white text-center">{project.title}</h3>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-2 border w-full text-center border-white text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                Preview →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
