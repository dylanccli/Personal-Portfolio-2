import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-[#212428] text-white px-4 sm:px-6">
      {/* Divider line - slightly thinner */}
      <div className="w-full h-[0.5px] sm:h-[1px] bg-gradient-to-r from-transparent via-[#ff014f] to-transparent my-10 sm:my-12"></div>
      
      <div className="max-w-7xl mx-auto py-10 md:py-20">
        {/* Slightly smaller heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-10">
          About <span className="text-[#ff014f]">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div>
            {/* Smaller paragraph text */}
            <p className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed">
                Hello, my name is <span className="text-[#ff014f]">Dylan Li</span>, and I graduated from <span className="text-[#ff014f]"> Toronto Metropolitan University </span>(formerly known as Ryerson University) in May 2025, with a degree in Computer Engineering.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-2">
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
          
          <div className="flex justify-center">
            {/* Compact skills card */}
            <div className="bg-[#1b1b1b] p-4 sm:p-6 rounded-xl shadow-lg max-w-md w-full">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#c4cfde]">My Skills</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {['React', 'Node.js', 'Python', 'TensorFlow', 'AWS', 'Docker'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-[#ff014f] rounded-full mr-2"></span>
                    <span className="text-base sm:text-lg text-gray-300">{skill}</span>
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