import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-white px-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(56, 40, 121, 1) 0%, rgba(98, 59, 163, 1) 100%)",
      }}
    >
      {/* Floating Icons */}
      <i className="bi bi-code-slash text-white text-6xl absolute top-10 left-8 animate-bounce-slow opacity-30" />
      <i className="bi bi-terminal text-white text-6xl absolute top-20 right-16 animate-spin-slow opacity-30" />
      <i className="bi bi-braces text-white text-6xl absolute bottom-12 left-10 animate-pulse opacity-30" />
      <i className="bi bi-laptop text-white text-6xl absolute bottom-16 right-8 animate-bounce-slow opacity-30" />
      <i className="bi bi-file-code text-white text-6xl absolute top-1/4 left-1/2 animate-bounce-slow opacity-30" />
      <i className="bi bi-hdd-network text-white text-6xl absolute top-2/3 right-1/3 animate-pulse opacity-30" />
      <i className="bi bi-lightning-charge text-white text-6xl absolute bottom-1/4 left-1/4 animate-spin-slow opacity-30" />
      <i className="bi bi-window-stack text-white text-6xl absolute bottom-20 right-1/2 animate-bounce-slow opacity-30" />

      <div className="max-w-4xl text-center z-10">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Hi, I&apos;m <span className="text-yellow-300">Opitien Ejiro</span> 👋
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          A passionate front-end developer crafting beautiful, accessible, and performant web experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition"
          >
            Get Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
