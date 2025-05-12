import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

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
    <nav className="fixed top-0 left-0 w-full bg-[#212428] border-b border-[#c4cfde]/30 py-4 sm:py-6 px-4 sm:px-6 z-50">
      <div className="w-full flex justify-between items-center h-12">
        <div className="text-[#c4cfde] text-xl sm:text-2xl font-bold">DL</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 lg:space-x-12">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              className="text-gray-400 hover:text-[#ff014f] text-lg sm:text-xl transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-400 hover:text-[#ff014f] text-2xl transition-colors duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-[#1b1b1b] py-4 px-6 border-b border-[#2a2d32] shadow-lg animate-fadeIn">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-2 mb-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  className="block text-gray-300 hover:text-[#ff014f] text-lg transition-colors duration-300 py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className="pt-4 border-t border-[#2a2d32]">
              <p className="text-gray-400 text-sm mb-3">MY SOCIALS</p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      bg-[#212428] rounded-xl
                      hover:shadow-[#ff014f]/20 
                      transition-all duration-300
                      flex items-center justify-center
                      p-2
                      w-10 h-10
                    "
                  >
                    <img 
                      src={link.icon}
                      alt={link.alt}
                      className="w-5 h-5 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;