const AboutComponent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h2 className="text-4xl font-bold mb-6 text-center">About Us</h2>

      <p className="text-lg mb-6 text-center">
        Welcome to <span className="font-semibold">Your Company Name</span>, where innovation meets dedication.
        We specialize in delivering high-quality products and exceptional customer service.
      </p>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
        <p>
          Our mission is to empower individuals and businesses by providing reliable and affordable
          solutions that enhance productivity and success. We believe in continuous improvement
          and long-term partnerships with our clients.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">What We Do</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Custom Web & Mobile Development</li>
          <li>UI/UX Design and Branding</li>
          <li>Cloud and DevOps Solutions</li>
          <li>Technical Consulting and Support</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Why Choose Us?</h3>
        <p>
          With years of experience and a team of passionate professionals, we aim to exceed
          expectations on every project. We value transparency, innovation, and customer satisfaction.
        </p>
      </div>

      <p className="text-center mt-10 italic">
        “Thank you for choosing us. Let’s build something great together!”
      </p>
    </div>
  );
};

export default AboutComponent;
