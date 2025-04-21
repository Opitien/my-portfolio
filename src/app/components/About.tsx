import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center bg-white rounded-lg shadow-xl p-6 md:p-10 text-gray-800">
          
          {/* Image Section */}
          <div className="w-full flex justify-center">
            <Image
              src="/profilepic.jpg"
              alt="Opitien Ejiro"
              width={350}
              height={350}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">About Me</h2>
            <p className="text-lg mb-4">
              Hi, I&apos;m <span className="font-bold">Opitien Ejiro</span>, a front-end developer passionate about crafting responsive and intuitive web apps. I work with <strong>TypeScript</strong>, <strong>JavaScript</strong>, and <strong>Next.js</strong>, and enjoy turning ideas into clean user interfaces.
            </p>
            <p className="text-lg mb-4">
              I’m currently developing <em>Medify</em>—a medical blog and care app that helps track health and provide emergency support. I also explore new technologies and contribute to open-source in my free time.
            </p>
            <p className="text-lg">
              Let’s connect and build something impactful!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
