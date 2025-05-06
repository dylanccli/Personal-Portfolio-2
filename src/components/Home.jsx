import React, { useState, useEffect } from 'react';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const texts = ["A Computer Engineer.", "Looking for New Grad Opportunities.", "Feel Free to Contact Me :)"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const typingSpeed = 120;
  const deletingSpeed = 50;
  const pauseDuration = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];
      const currentIndex = isDeleting ? displayText.length - 1 : displayText.length + 1;
      const text = fullText.substring(0, currentIndex);
      setDisplayText(text);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setLoopNum(loopNum + 1);
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, currentTextIndex]);

  const socialButtonClass = `
  bg-gradient-to-br from-[#1b1b1b] to-[#0f0f0f]
  hover:from-[#ff014f] hover:to-[#d40042]
  border border-[#2a2a2a]
  transition-all duration-300 
  w-14 h-14 md:w-16 md:h-16 
  rounded-lg
  flex items-center justify-center
  shadow-lg hover:shadow-xl hover:shadow-[#ff014f]/20
  transform hover:-translate-y-1
  group
  `;

  const socialIconClass = `
  w-8 h-8 md:w-10 md:h-10
  object-contain
  group-hover:brightness-0 group-hover:invert
  `;

  // Social links data
  const socialLinks = [
    {
      href: "https://www.instagram.com/dylanccli/#", // Update with your actual resume path
      icon: "/Instagram.svg",
      alt: "Instagram"
    },
    {
      href: "https://www.linkedin.com/in/dylan-li-a949602b9/", // Update with your LinkedIn
      icon: "/LinkedIn.svg",
      alt: "LinkedIn"
    },
    {
      href: "https://github.com/dylanccli", // Update with your GitHub
      icon: "/Github.svg",
      alt: "GitHub"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#212428] text-white px-4 sm:px-6 pt-24">
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8">
        <div className="space-y-4 w-full md:pl-4 lg:pl-8">
          {/* Welcome text */}
          <p className="text-lg sm:text-xl text-[#c4cfde] font-medium mb-2">
            WELCOME TO MY PORTFOLIO
          </p>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-[#ff014f]">Dylan Li</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white h-16 md:h-20">
            {displayText}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-[36rem]">
            I'm a computer engineer, looking for new grad positions and exciting opportunities in the computer engineering world. I am learning new coding techniques that will help me in the future.
          </p>
          
          {/* FIND ME section */}
          <div className="mt-10">
            <p className="text-lg sm:text-lg text-[#c4cfde] font-small mb-6">
              FIND ME
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialButtonClass}
                >
                  <img 
                    src={link.icon}
                    alt={link.alt}
                    className={socialIconClass}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-[500px] md:w-[120%] lg:w-[140%] aspect-[4/5] overflow-hidden rounded-lg md:rounded-xl shadow-xl">
            <img 
              src="/HomeIMG.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;