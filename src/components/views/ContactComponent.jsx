const ContactComponent = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>

      <p className="text-lg text-center mb-8">
        We'd love to hear from you! Whether you have a question, feedback, or just want to say hello — reach out to us anytime.
      </p>

      <div className="mb-8 text-center space-y-2">
        <p><strong>Email:</strong> contact@yourdomain.com</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Address:</strong> 1234 Main Street, City, Country</p>
      </div>

      <form
        className="space-y-6"
        action="https://formspree.io/f/xeozkepa"
        method="POST"
      >
        <div>
          <label className="block mb-1 font-medium">Your Name</label>
          <input
            name="name"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Your Email</label>
          <input
            name="email"
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Your Message</label>
          <textarea
            name="message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactComponent;
