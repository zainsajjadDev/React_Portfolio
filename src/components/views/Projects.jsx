import React from "react";

const projects = [
  { title: "E-commerce App", description: "Built with React and Firebase" },
  { title: "Portfolio Website", description: "Styled with Tailwind CSS" },
  { title: "Blog Platform", description: "Powered by Next.js and MongoDB" },
  { title: "Chat App", description: "Realtime app using Socket.io" },
  { title: "Task Manager", description: "Organize tasks with Django" },
  { title: "Weather App", description: "Live weather data with OpenWeather API" },
];

const Projects = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={`https://picsum.photos/seed/${idx+1}/400/200`}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
