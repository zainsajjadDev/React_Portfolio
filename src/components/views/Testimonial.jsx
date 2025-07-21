import React from "react";

const testimonials = [
  {
    name: "Alice Johnson",
    feedback: "Great to work with — highly recommended!",
  },
  {
    name: "Michael Lee",
    feedback: "Delivered the project ahead of schedule with top quality.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Client Testimonials</h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-lg shadow">
            <p className="italic mb-4">"{t.feedback}"</p>
            <h4 className="font-semibold text-right">- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
