import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section 
      id="about" // Added id here for linking
      className="flex items-center justify-center py-16 bg-gradient-to-r from-purple-500 to-indigo-600"
      style={{
        background: "linear-gradient(135deg, rgba(56, 40, 121, 1) 0%, rgba(98, 59, 163, 1) 100%)"
      }}
    >
      <div className="flex max-w-7xl mx-auto p-4 bg-white rounded-lg shadow-lg">
        {/* Left side: Image */}
        <div className="w-1/3 mr-8">
          <Image 
            src="/profilepic.jpg"
            alt="Opitien Ejiro"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Right side: Bio card */}
        <div className="w-2/3">
          <div className="bg-gray-50 p-6 rounded-lg shadow-xl">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-700 mb-4">
              Hi, I&apos;m <span className="font-bold">Opitien Ejiro</span>, a passionate software developer with a deep interest in front-end development. With expertise in modern technologies such as <span className="font-bold">TypeScript</span>, <span className="font-bold">JavaScript</span>, and <span className="font-bold">Next.js</span>, I love creating dynamic and responsive web applications. I have experience working with frameworks like <span className="font-bold">Bootstrap</span> and <span className="font-bold">Node.js</span>, and I am always eager to learn new skills to improve my craft.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Currently, I&apos;m working on projects like a medical blog called <span className="italic">Medify</span>, and a medic care app designed to provide medical assistance, track health status, and offer emergency services. I aim to create simple, intuitive designs that provide real value to users.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              When I&apos;m not coding, you can find me exploring new technologies, building my portfolio, and contributing to open-source projects. My mission is to continue growing as a developer and to build solutions that make a difference in people’s lives.
            </p>
            <p className="text-lg text-gray-700">
              Feel free to check out my portfolio and connect with me to collaborate on exciting projects!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
