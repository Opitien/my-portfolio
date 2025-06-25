import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center text-gray-800 rounded-xl shadow-2xl p-8 md:p-12">
          
          {/* Image Column */}
          <div className="flex justify-center">
            <Image
              src="/profilepic.jpg"
              alt="Opitien Ejiro"
              width={350}
              height={350}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Text Column */}
          <div className="space-y-6 text-white">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Hi, I&apos;m <span className="font-semibold">Opitien Ejiro</span>, a front-end developer passionate about crafting responsive and intuitive web applications. I build using <strong>TypeScript</strong>, <strong>JavaScript</strong>, and <strong>Next.js</strong>, turning ideas into clean, functional user experiences.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Currently, I’m working on <em>Medify</em>—a health-focused blog and care app designed to support users with emergency services and health tracking.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              I enjoy contributing to open-source, learning new tools, and collaborating on impactful digital products.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
