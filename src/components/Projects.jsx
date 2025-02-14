import React from "react";

function Projects() {
  const projects = [
    {
      title: "Gradient Color Generator",
      width: "40%",
      img: "/MyPortfolio/gradient-color-project.png",
      desc: "The Gradient Color Generator is a simple yet interactive web application that allows users to create and preview gradient backgrounds dynamically. Users can select different colors to generate a linear gradient and copy the corresponding CSS code for use in their own projects.",
    },
    {
      title: "Employee Database Management System",
      width: "62%",
      img: "/MyPortfolio/empdatabase-project.webp",
      desc: "A CRUD-based system built with Node.js, Express.js, and MongoDB.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16"
      style={{ backgroundColor: "#21c5d4" }}
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          Projects & Demos
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transition duration-300"
              style={{ width: proj.width }}
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <img
                src={proj.img}
                alt="Project"
                className="w-full rounded mb-4"
              />
              <h3 className="text-2xl font-bold">{proj.title}</h3>
              <p className="mt-2 text-sm">{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
