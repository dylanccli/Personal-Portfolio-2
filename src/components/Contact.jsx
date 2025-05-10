import React from 'react';

const Contact = () => {
  const contactMethods = [
    {
      icon: "/Email.svg",
      title: "Email",
      value: "dylan.ccli2002@gmail.com"
    },
    {
      icon: "/Phone.svg",
      title: "Phone",
      value: "(417) 786-8720"
    },
    {
      icon: "/Location.svg",
      title: "Location",
      value: "Toronto, Ontario"
    }
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
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-[#212428] text-white px-4 sm:px-6">
      {/* Divider line */}
      <div className="w-full h-[0.5px] sm:h-[1px] bg-gradient-to-r from-transparent via-[#ff014f] to-transparent my-10 sm:my-12" />
      
      <div className="max-w-7xl mx-auto py-10 md:py-20">
        {/* Section title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">
          Get In <span className="text-[#ff014f]">Touch</span>
        </h2>
        
        <div className="grid md:grid-cols-5 gap-8 md:gap-12">
          {/* Contact information with subtle background */}
          <div className="md:col-span-2 bg-[#1e2023] p-6 rounded-xl border border-[#2a2d32]">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#c4cfde]">
              Contact Information
            </h3>
            
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Feel free to reach out to me for any questions or opportunities.
            </p>
            
            <div className="space-y-6 mb-10">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-[#1b1b1b] p-3 rounded-lg mr-4">
                    <img 
                      src={method.icon} 
                      alt={method.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-medium text-gray-300">
                      {method.title}
                    </h4>
                    <p className="text-base text-gray-400">
                      {method.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Boxes */}
            <div className="mt-8">
              <h4 className="text-lg sm:text-xl font-medium text-[#c4cfde] mb-4">
                My Socials
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      bg-[#1b1b1b] rounded-xl overflow-hidden 
                      shadow-lg hover:shadow-xl hover:shadow-[#ff014f]/20 
                      transition-all duration-300 transform 
                      hover:-translate-y-1 hover:scale-105 hover:z-10
                      flex items-center justify-center
                      p-4
                      w-16 h-16
                      group
                    "
                  >
                    <img 
                      src={link.icon}
                      alt={link.alt}
                      className="
                        w-9 h-9 object-contain
                        group-hover:brightness-0 group-hover:invert
                        transition-all duration-300
                      "
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact form - with subtle white glow */}
          <div className="md:col-span-3 bg-[#1b1b1b] p-8 rounded-xl shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#c4cfde]">
              Send Me a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[#212428] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ff014f]"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-[#212428] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ff014f]"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-[#212428] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ff014f]"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="w-full bg-[#212428] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#ff014f]"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#ff014f] to-[#ff014f]/90 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-[#ff014f]/30 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;