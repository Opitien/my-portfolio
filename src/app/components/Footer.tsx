import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full py-3 mt-4"
      style={{
        background: "linear-gradient(135deg, rgba(56, 40, 121, 1) 0%, rgba(98, 59, 163, 1) 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto text-center text-white">
        <p>&copy; 2025 Opitien Ejiroghene. All Rights Reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;
