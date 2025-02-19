import React from "react";
import Particles from "react-tsparticles";

function About() {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-black to-blue-900 py-20 px-4 sm:px-6 lg:px-8">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0"
        options={{
          particles: {
            number: {
              value: 80, // Number of particles
              density: {
                enable: true,
                value_area: 800,
              },
            },
            shape: {
              type: "polygon", // Change to polygon for hexagonal shapes
              polygon: {
                sides: 6, // Hexagon shape
              },
            },
            size: {
              value: 5,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              attract: {
                enable: true, // To attract particles to mouse
                rotateX: 600,
                rotateY: 1200,
              },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            opacity: {
              value: 0.5,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse", // Make particles repulse when hovered
                },
              },
              modes: {
                repulse: {
                  distance: 100, // Distance for repulsion when hovering
                  duration: 0.4, // Duration of repulsion
                },
              },
            },
          },
        }}
      />

      <div className="relative z-10 flex justify-between items-center gap-12">
        {/* About Paragraph Section */}
        <div className="flex-1.5">
          <h2 className="text-3xl font-semibold mb-6 text-white text-center">About</h2>
          <p className="text-lg leading-relaxed text-gray-200">
            <span className="text-blue-700">Think Grow Media </span>is a forward-thinking digital marketing agency
            that specializes in providing comprehensive solutions to help
            businesses grow and thrive in the digital world. We offer a wide
            range of services designed to meet the diverse needs of our clients,
            including web design and development, e-commerce solutions, ERP
            development, Google AdWords management, search engine optimization
            (SEO), social media marketing, and local SEO. At Think Grow Media,
            we understand that each business is unique, which is why we take a
            customized approach to every project. Our team of experts works
            closely with clients to develop tailored strategies that align with
            their goals, ensuring the best possible results. Whether you need a
            user-friendly website, a powerful online store, or an effective
            marketing campaign, we have the tools and expertise to help you
            succeed. Our commitment to innovation and excellence is reflected in
            the high-quality solutions we deliver. We utilize the latest
            technologies and strategies to ensure that our clients are always
            ahead of the curve. From enhancing website performance to improving
            online visibility, we help brands stay competitive in today’s
            fast-paced digital landscape. We take pride in our ability to blend
            creativity with data-driven insights, allowing us to develop
            strategies that are not only visually appealing but also highly
            effective. Our holistic approach ensures that every aspect of a
            brand’s digital presence is optimized for maximum impact. At Think
            Grow Media, our mission is to empower businesses with the right
            tools and strategies to grow, achieve their objectives, and build
            lasting success in the digital space. Whether you're a small startup
            or an established enterprise, we’re here to help you take your brand
            to the next level.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
