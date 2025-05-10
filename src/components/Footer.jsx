import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/dylanccli/#",
      icon: "/Instagram.svg",
      alt: "Instagram"
    },
    {
      href: "https://www.linkedin.com/in/dylan-li-a949602b9/",
      icon: "/LinkedIn.svg",
      alt: "LinkedIn"
    },
    {
      href: "https://github.com/dylanccli",
      icon: "/Github.svg",
      alt: "GitHub"
    }
  ];

  return (
    <footer className="bg-[#1e2023] border-t border-[#2a2d32] py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Dylan Li. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-[#1b1b1b] rounded-xl overflow-hidden 
                  shadow hover:shadow-[#ff014f]/20 
                  transition-all duration-300 transform 
                  hover:-translate-y-1 hover:scale-105
                  flex items-center justify-center
                  p-3
                  w-12 h-12
                  group
                "
              >
                <img 
                  src={link.icon}
                  alt={link.alt}
                  className="
                    w-6 h-6 object-contain
                    group-hover:brightness-0 group-hover:invert
                    transition-all duration-300
                  "
                />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <div className="mt-4 md:mt-0">
            <a 
              href="#home" 
              className="
                text-gray-400 hover:text-[#ff014f] 
                transition-colors duration-300
                flex items-center
                text-sm
              "
            >
              Back to Top
              <svg 
                className="w-4 h-4 ml-1" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Credits */}
        <div className="mt-6 text-center text-xs text-gray-500">
          Built with React and Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;