import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-3 px-6 text-center bg-white">
      <h2 className="text-3xl text-black font-bold mb-6">Get In Touch</h2>
      <p className="text-gray-700 mb-4">
        Feel free to reach out via email or connect on social media!
      </p>
      <div className="flex justify-center space-x-4 mt-4 text-3xl text-black">
          <a href="https://github.com/Opitien" className="hover:text-purple-800">
            <i className="bi bi-github text-2xl"></i> {/* GitHub icon */}
          </a>
          <a href="https://twitter.com/OpitienEdison" className="hover:text-purple-800">
            <i className="bi bi-twitter text-2xl"></i> {/* Twitter icon */}
          </a>
          <a href="https://twitter.com/Opitiens" className="hover:text-purple-800">
            <i className="bi bi-instagram text-2xl"></i> {/* Instagram icon */}
          </a>
        </div>
    </section>
  );
};

export default Contact;
