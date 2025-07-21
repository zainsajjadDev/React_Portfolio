import React from "react";
import { FaLightbulb, FaCode, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: <FaLightbulb size={32} className="text-yellow-400" />,
    title: "Planning",
    text: "Understand your goals and define a clear roadmap.",
  },
  {
    icon: <FaCode size={32} className="text-blue-400" />,
    title: "Development",
    text: "Write clean and efficient code to bring ideas to life.",
  },
  {
    icon: <FaRocket size={32} className="text-green-400" />,
    title: "Launch",
    text: "Deploy and support your product for real-world use.",
  },
];

const WorkProcess = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">My Work Process</h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition duration-300"
          >
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
