import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-6 text-center bg-white">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <p className="text-gray-700 mb-4">
        Feel free to reach out via email or connect on social media!
      </p>
      <div className="flex justify-center space-x-6 text-blue-600">
        <a href="mailto:opitiene@gmail.com" className="hover:underline">Email</a>
        <a href="https://github.com/opitienejiro" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
        <a href="https://linkedin.com/in/opitienejiro" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;
