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

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#212428] border-b border-[#c4cfde]/30 py-4 sm:py-6 px-4 sm:px-6 z-50">
      <div className="w-full flex justify-between items-center h-12">
        <div className="text-[#c4cfde] text-xl sm:text-2xl font-bold">DL</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 lg:space-x-12">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-gray-400 hover:text-[#ff014f] text-lg sm:text-xl transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-400 hover:text-[#ff014f] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#212428] py-4 px-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block text-gray-400 hover:text-[#ff014f] text-lg transition-colors duration-300 py-2"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;