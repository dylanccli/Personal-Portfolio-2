import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-[#212428] text-white px-4 sm:px-6">
      {/* Divider line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#ff014f] to-transparent my-12"></div>
      
      <div className="max-w-7xl mx-auto py-12 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          About <span className="text-[#ff014f]">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm Dylan Li, a passionate computer engineer with expertise in full-stack development, 
              machine learning, and system design. My journey in technology began...
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me hiking, contributing to open-source projects, 
              or exploring new frameworks and technologies.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-[#1b1b1b] p-8 rounded-xl shadow-lg max-w-md w-full">
              <h3 className="text-xl font-semibold mb-4 text-[#c4cfde]">My Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {['React', 'Node.js', 'Python', 'TensorFlow', 'AWS', 'Docker'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-[#ff014f] rounded-full mr-2"></span>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;