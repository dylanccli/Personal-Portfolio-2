import React from 'react';

const About = () => {
  const skills = [
    'React', 'Node.js', 'C', 'Python', 'TensorFlow', 'Java', 'JavaScript',
    'HTML/CSS', 'Tailwind CSS', 'SQL', 'MongoDB'
  ];

  const tools = [
    'Git', 'VS Code', 'Jira', 'Linux', 'Netbeans', 'Trello', 'Docker', 'Azure'
  ];

  return (
    <section id="about" className="min-h-screen bg-[#212428] text-white px-4 sm:px-6">
      {/* Divider line */}
      <div className="w-full h-[0.5px] sm:h-[1px] bg-gradient-to-r from-transparent via-[#ff014f] to-transparent my-10 sm:my-12"></div>
      
      <div className="max-w-7xl mx-auto py-10 md:py-20">
        {/* Section title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">
          About <span className="text-[#ff014f]">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* About text with matching background */}
          <div className="space-y-6">
            <div className="bg-[#1e2023] p-6 sm:p-8 rounded-xl border border-[#2a2d32]">
              <p className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed">
                  Hello, my name is <span className="text-[#ff014f]">Dylan Li</span>, and I graduated from <span className="text-[#ff014f]"> Toronto Metropolitan University </span> in May 2025, with a degree in Computer Engineering.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
                  I'm 23 years old, born on January 26, 2002. I'm Hakka Chinese, and I was born and raised in <span className="text-[#ff014f]"> Toronto, Ontario</span>.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-2">
                  Here are a few hobbies I enjoy:
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 space-y-1">
                  <li>Playing Sports</li>
                  <li>Weight Lifting</li>
                  <li>Playing Video Games</li>
                  <li>Travelling</li>
                  <li>Trying New Food</li>
              </ul>
            </div>
          </div>
          
          {/* Skills and Tools section */}
          <div className="space-y-6">
            {/* Skills box - matching contact form */}
            <div className="bg-[#1b1b1b] p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-[#c4cfde]">
                My Skills
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-[#ff014f] rounded-full mr-3"></span>
                    <span className="text-base sm:text-lg text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tools box - matching contact form */}
            <div className="bg-[#1b1b1b] p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-[#c4cfde]">
                Tools
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {tools.map((tool) => (
                  <div key={tool} className="flex items-center">
                    <span className="w-2 h-2 bg-[#ff014f] rounded-full mr-3"></span>
                    <span className="text-base sm:text-lg text-gray-300">{tool}</span>
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