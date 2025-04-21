import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full py-6 mt-16"
      style={{
        background: "linear-gradient(135deg, rgba(56, 40, 121, 1) 0%, rgba(98, 59, 163, 1) 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto text-center text-white">
        <p>&copy; 2025 Opitien Ejiroghene. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/Opitien" className="hover:text-gray-200">
            <i className="bi bi-github text-2xl"></i> {/* GitHub icon */}
          </a>
          <a href="https://twitter.com/OpitienEdison" className="hover:text-gray-200">
            <i className="bi bi-twitter text-2xl"></i> {/* Twitter icon */}
          </a>
          <a href="https://twitter.com/Opitieneddy" className="hover:text-gray-200">
            <i className="bi bi-instagram text-2xl"></i> {/* Instagram icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
