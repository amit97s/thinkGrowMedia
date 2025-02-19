// import React, { useState, useEffect } from 'react';
// import { ExternalLink, ChevronRight, Star, Users, Code, Rocket, Trophy, Target, Zap } from 'lucide-react';

// function PortfolioPages() {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isVisible, setIsVisible] = useState({});

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           setIsVisible(prev => ({
//             ...prev,
//             [entry.target.id]: entry.isIntersecting
//           }));
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('[data-animate]').forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const projects = [
//     {
//       id: 1,
//       title: "E-Commerce Fashion Store",
//       image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
//       description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and seamless payment integration.",
//       technologies: ["React", "Node.js", "MongoDB", "Stripe"],
//       testimonial: {
//         text: "The website has increased our online sales by 200% within the first three months.",
//         author: "Sarah Johnson",
//         role: "CEO, Fashion Hub"
//       },
//       stats: {
//         users: "50K+",
//         conversion: "15%",
//         performance: "98/100"
//       },
//       impact: "Transformed the client's online presence with a 200% increase in sales and 50,000+ active monthly users.",
//       challenges: [
//         "Complex inventory management across multiple warehouses",
//         "Real-time stock synchronization",
//         "Mobile-first shopping experience"
//       ]
//     },
//     {
//       id: 2,
//       title: "Real Estate Platform",
//       image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
//       description: "A comprehensive real estate platform with virtual tours, advanced property filtering, and agent dashboard.",
//       technologies: ["Next.js", "PostgreSQL", "ThreeJS", "AWS"],
//       testimonial: {
//         text: "The virtual tour feature has revolutionized how we showcase properties to international clients.",
//         author: "Michael Chen",
//         role: "Director, Global Realty"
//       },
//       stats: {
//         users: "25K+",
//         conversion: "12%",
//         performance: "95/100"
//       },
//       impact: "Revolutionized property viewings with virtual tours, leading to a 40% increase in international sales.",
//       challenges: [
//         "3D virtual tour implementation",
//         "Multi-language support",
//         "Complex search filters"
//       ]
//     }
//   ];

//   const ProjectCard = ({ project, index }) => (
//     <div 
//       id={`project-${project.id}`}
//       data-animate
//       className={`group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl ${
//         isVisible[`project-${project.id}`] 
//           ? 'translate-x-0 opacity-100' 
//           : 'translate-x-20 opacity-0'
//       }`}
//       style={{ transitionDelay: `${index * 150}ms` }}
//       onClick={() => setSelectedProject(project)}
//     >
//       <div className="aspect-video overflow-hidden">
//         <img 
//           src={project.image} 
//           alt={project.title}
//           className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//       </div>
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
//           {project.title}
//         </h3>
//         <p className="mt-2 text-gray-600 line-clamp-2">{project.description}</p>
//         <div className="mt-4 flex flex-wrap gap-2">
//           {project.technologies.map((tech, index) => (
//             <span 
//               key={index}
//               className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800 transition-transform duration-300 hover:scale-105"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//         <button className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-all duration-300 group-hover:translate-x-2">
//           View Details <ChevronRight className="ml-1 h-4 w-4" />
//         </button>
//       </div>
//     </div>
//   );

//   const ProjectModal = ({ project, onClose }) => {
//     if (!project) return null;

//     return (
//       <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//         <div 
//           className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//           onClick={onClose}
//         ></div>
//         <div className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl bg-white p-6 shadow-2xl animate-modalSlideIn">
//           <button 
//             onClick={onClose}
//             className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-500 hover:bg-gray-200 transition-colors duration-300"
//           >
//             ×
//           </button>
          
//           <div className="relative overflow-hidden rounded-xl">
//             <img 
//               src={project.image} 
//               alt={project.title}
//               className="h-[400px] w-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//             <h2 className="absolute bottom-6 left-6 text-4xl font-bold text-white">{project.title}</h2>
//           </div>
          
//           <div className="mt-8">
//             <p className="text-xl leading-relaxed text-gray-600">{project.description}</p>
            
//             {/* Project Impact */}
//             <div className="mt-8 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
//               <h3 className="flex items-center text-xl font-semibold">
//                 <Rocket className="mr-2 h-6 w-6" />
//                 Project Impact
//               </h3>
//               <p className="mt-2 text-lg">{project.impact}</p>
//             </div>
            
//             {/* Challenges Overcome */}
//             <div className="mt-8">
//               <h3 className="flex items-center text-xl font-semibold text-gray-900">
//                 <Trophy className="mr-2 h-6 w-6 text-yellow-500" />
//                 Challenges Overcome
//               </h3>
//               <ul className="mt-4 space-y-3">
//                 {project.challenges.map((challenge, index) => (
//                   <li 
//                     key={index}
//                     className="flex items-start rounded-lg bg-gray-50 p-4"
//                   >
//                     <Target className="mr-3 h-5 w-5 text-indigo-600" />
//                     <span>{challenge}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             {/* Project Stats */}
//             <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
//               <div className="rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-4 text-white">
//                 <div className="flex items-center">
//                   <Users className="h-6 w-6" />
//                   <span className="ml-2 text-sm">Active Users</span>
//                 </div>
//                 <p className="mt-2 text-2xl font-bold">{project.stats.users}</p>
//               </div>
//               <div className="rounded-xl bg-gradient-to-br from-green-500 to-green-600 p-4 text-white">
//                 <div className="flex items-center">
//                   <Star className="h-6 w-6" />
//                   <span className="ml-2 text-sm">Conversion Rate</span>
//                 </div>
//                 <p className="mt-2 text-2xl font-bold">{project.stats.conversion}</p>
//               </div>
//               <div className="rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 p-4 text-white">
//                 <div className="flex items-center">
//                   <Zap className="h-6 w-6" />
//                   <span className="ml-2 text-sm">Performance Score</span>
//                 </div>
//                 <p className="mt-2 text-2xl font-bold">{project.stats.performance}</p>
//               </div>
//             </div>
            
//             {/* Technologies */}
//             <div className="mt-8">
//               <h3 className="flex items-center text-xl font-semibold text-gray-900">
//                 <Code className="mr-2 h-6 w-6 text-indigo-600" />
//                 Technologies Used
//               </h3>
//               <div className="mt-4 flex flex-wrap gap-2">
//                 {project.technologies.map((tech, index) => (
//                   <span 
//                     key={index}
//                     className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-800 transition-transform duration-300 hover:scale-105"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
            
//             {/* Testimonial */}
//             <div className="mt-8 overflow-hidden rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-white">
//               <div className="relative">
//                 <div className="absolute -left-4 -top-4 text-6xl text-gray-700">"</div>
//                 <p className="relative text-lg italic">{project.testimonial.text}</p>
//                 <div className="mt-4">
//                   <p className="font-semibold">{project.testimonial.author}</p>
//                   <p className="text-sm text-gray-300">{project.testimonial.role}</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="mt-8 flex justify-center">
//               <a 
//                 href="#"
//                 className="group inline-flex items-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:from-indigo-700 hover:to-purple-700"
//               >
//                 Visit Website 
//                 <ExternalLink className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
//       <div className="container mx-auto px-4">
//         {/* Header Section */}
//         <div 
//           id="portfolio-header"
//           data-animate
//           className={`text-center transition-all duration-1000 ${
//             isVisible['portfolio-header'] 
//               ? 'translate-y-0 opacity-100' 
//               : 'translate-y-10 opacity-0'
//           }`}
//         >
//           <h1 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl">
//             Web Design Portfolio
//           </h1>
//           <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-gray-600">
//             Transforming ideas into stunning digital experiences. Each project represents our commitment to excellence, innovation, and measurable results.
//           </p>
//         </div>

//         {/* Stats Section */}
//         <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
//           {[
//             { number: "14+", label: "Projects Completed", color: "from-blue-500 to-blue-600" },
//             { number: "98%", label: "Client Satisfaction", color: "from-green-500 to-green-600" },
//             { number: "250K+", label: "Users Reached", color: "from-purple-500 to-purple-600" },
//             { number: "5", label: "Industry Awards", color: "from-orange-500 to-orange-600" }
//           ].map((stat, index) => (
//             <div
//               key={index}
//               id={`stat-${index}`}
//               data-animate
//               className={`transform rounded-xl bg-gradient-to-br ${stat.color} p-6 text-center text-white shadow-lg transition-all duration-500 hover:scale-105 ${
//                 isVisible[`stat-${index}`] 
//                   ? 'translate-y-0 opacity-100' 
//                   : 'translate-y-10 opacity-0'
//               }`}
//               style={{ transitionDelay: `${index * 100}ms` }}
//             >
//               <p className="text-3xl font-bold">{stat.number}</p>
//               <p className="mt-2 text-sm">{stat.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project, index) => (
//             <ProjectCard key={project.id} project={project} index={index} />
//           ))}
//         </div>

//         {/* Project Modal */}
//         <ProjectModal 
//           project={selectedProject} 
//           onClose={() => setSelectedProject(null)} 
//         />
//       </div>
//     </div>
//   );
// }

// export default PortfolioPages;
import React from 'react'

function PortfolioPages() {
  return (
    <div>PortfolioPages</div>
  )
}

export default PortfolioPages