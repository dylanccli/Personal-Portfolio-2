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
                  I'm 23 years old, born on January 26, 2002. I'm Hakka Chinese, and I was born and raised in <span className="text-[#ff014f]"> Toronto, Ontario</span>.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-2">
                  Here are a few hobbies I enjoy:
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 space-y-1 mb-2">
                  <li>Playing Sports</li>
                  <li>Weight Lifting</li>
                  <li>Playing Video Games</li>
                  <li>Travelling</li>
                  <li>Trying New Food</li>
              </ul>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-2">
                A little bit about my coding journey...
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-2">
                My coding journey began in 10th grade when I took my first introductory programming course and built a simple snake game. 
                The following year, I explored robotics using NXT kits, where I programmed a robot to detect color changes to avoid falling off the table. Since then, 
                I’ve completed several full-stack projects using a variety of programming languages and tools. 
                Most recently, I worked on a project focused on body gesture detection and calculated synchronization between two people chatting.
              </p>
            </div>
          </div>
          
          {/* Skills and Tools section */}
          <div className="space-y-6">
            {/* Skills box */}
            <div className="
              bg-[#1b1b1b] p-6 sm:p-8 rounded-xl 
              shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] 
              transition-all duration-300
              relative overflow-hidden
              group
            ">
              {/* Fade overlay on hover */}
              <div className="
                absolute inset-0 bg-gradient-to-b from-transparent to-[#1b1b1b]/80
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                pointer-events-none
              "></div>
              
              <h3 className="
                text-xl sm:text-2xl font-semibold mb-6 text-[#c4cfde]
                transform group-hover:-translate-y-1
                transition-transform duration-300
              ">
                My Skills
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {skills.map((skill) => (
                  <div 
                    key={skill} 
                    className="
                      flex items-center
                      transform group-hover:-translate-y-0.5
                      transition-transform duration-300 hover:duration-150
                      hover:text-[#ff014f]
                    "
                  >
                    <span className="w-2 h-2 bg-[#ff014f] rounded-full mr-3"></span>
                    <span className="text-base sm:text-lg text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tools box */}
            <div className="
              bg-[#1b1b1b] p-6 sm:p-8 rounded-xl 
              shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] 
              transition-all duration-300
              relative overflow-hidden
              group
            ">
              {/* Fade overlay on hover */}
              <div className="
                absolute inset-0 bg-gradient-to-b from-transparent to-[#1b1b1b]/80
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                pointer-events-none
              "></div>
              
              <h3 className="
                text-xl sm:text-2xl font-semibold mb-6 text-[#c4cfde]
                transform group-hover:-translate-y-1
                transition-transform duration-300
              ">
                Tools
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {tools.map((tool) => (
                  <div 
                    key={tool} 
                    className="
                      flex items-center
                      transform group-hover:-translate-y-0.5
                      transition-transform duration-300 hover:duration-150
                      hover:text-[#ff014f]
                    "
                  >
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