import React from "react";

const FloatingWhatsapp: React.FC = () => {
  return (
    <a
      href="https://wa.me/2347057261372?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch" // Replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          width="32"
          height="32"
        >
          <path d="M20.52 3.48a11.95 11.95 0 0 0-20.04 9.62c0 2.11.55 4.13 1.59 5.93L.01 24l5.15-1.36a11.93 11.93 0 0 0 5.92 1.51h.01c6.62 0 12-5.38 12-12 0-3.2-1.25-6.21-3.49-8.44zm-8.49 17.1h-.01a9.94 9.94 0 0 1-5.07-1.39l-.36-.21-3.06.8.81-2.99-.23-.38a9.96 9.96 0 0 1 1.52-11.9 9.9 9.9 0 0 1 7.06-2.93c5.51 0 10 4.49 10 10 0 5.51-4.49 10-10 10zm5.48-7.37c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.19.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.62-.91-2.23-.24-.58-.5-.5-.67-.5h-.57c-.2 0-.53.08-.8.38-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.2 4.55.73.32 1.3.51 1.74.65.73.23 1.4.2 1.93.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35z" />
        </svg>
      </div>
    </a>
  );
};

export default FloatingWhatsapp;
