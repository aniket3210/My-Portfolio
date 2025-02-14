import React from "react";

function Skills() {
  const skills = [
    { name: "HTML5", img: "/MyPortfolio/Html.webp", width: "40%" },
    { name: "CSS3", img: "/MyPortfolio/CSS.jpg", width: "58%" },
    { name: "JavaScript", img: "/MyPortfolio/javascript.png", width: "40%" },
    { name: "Node.js", img: "/MyPortfolio/node.jpg", width: "35%" },
    { name: "Express.js", img: "/MyPortfolio/express.png", width: "52%" },
    { name: "MySQL", img: "/MyPortfolio/mysql.jpg", width: "41%" },
    { name: "Java", img: "/MyPortfolio/java.jpg", width: "46%" },
    { name: "MongoDB", img: "/MyPortfolio/mongo.png", width: "55%" },
    { name: "Git & Github", img: "/MyPortfolio/git-github.png", width: "33%" },
    { name: "VS Code", img: "/MyPortfolio/vscode.png", width: "50%" },
  ];

  return (
    <section
      id="skills"
      className="py-16"
      style={{ backgroundColor: "#f5c534" }}
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          My Skills & Technologies
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-xl transition-all duration-300 transform-gpu"
              style={{
                width: skill.width,
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="relative w-full h-full transition-transform duration-300 hover:rotate-x-6 hover:rotate-y-6 hover:scale-105 hover: rounded-2xl overflow-hidden">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-full rounded-2xl mb-4"
                />
                <h3 className="text-2xl font-bold text-center">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
