import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "BookStore Application",
      description: [
        "Created a JavaFX-based bookstore management system that allows customers to purchase books and earn rewards.",
        "Customers can select books using checkboxes and earn points that determine their membership status (Silver/Gold).",
        "Admins (owners) can add new books to the catalog and update book prices through a built-in interface.",
        "Book and customer data are stored using plain text files with read/write operations handled via Java I/O."
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/Project.svg",
      githubLink: "https://github.com/yourusername/bookstore-app"
    },
    {
      title: "Machine Learning Model",
      description: [
        "Predictive model for stock market trends",
        "Uses historical market data",
        "Implemented with TensorFlow",
        "Achieved 85% prediction accuracy"
      ],
      technologies: ["Python", "TensorFlow", "Pandas", "NumPy"],
      image: "/project2.jpg",
      githubLink: "https://github.com/yourusername/ml-stock-predictor"
    },
    {
      title: "Portfolio Website",
      description: [
        "Responsive personal portfolio",
        "Modern UI with animations",
        "Showcases projects and skills",
        "Optimized for performance"
      ],
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      image: "/project3.jpg",
      githubLink: "https://github.com/yourusername/portfolio-website"
    },
    {
      title: "Task Management App",
      description: [
        "Collaborative task management",
        "Real-time updates with WebSockets",
        "Drag-and-drop interface",
        "User roles and permissions"
      ],
      technologies: ["React", "Firebase", "Material UI"],
      image: "/project4.jpg",
      githubLink: "https://github.com/yourusername/task-manager"
    },
    {
      title: "Weather Dashboard",
      description: [
        "Current and forecasted weather data",
        "Location-based services",
        "Interactive charts",
        "Mobile-responsive design"
      ],
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      image: "/project5.jpg",
      githubLink: "https://github.com/yourusername/weather-dashboard"
    },
    {
      title: "Social Media Analytics",
      description: [
        "Dashboard for engagement metrics",
        "Data visualization with D3.js",
        "Custom reporting tools",
        "Scheduled data exports"
      ],
      technologies: ["Python", "Django", "PostgreSQL", "D3.js"],
      image: "/project6.jpg",
      githubLink: "https://github.com/yourusername/social-media-analytics"
    }
  ];

  const isSvg = (filename) => filename?.endsWith('.svg');

  return (
    <section id="projects" className="min-h-screen bg-[#212428] text-white px-4 sm:px-6">
      {/* Divider line */}
      <div className="w-full h-[0.5px] sm:h-[1px] bg-gradient-to-r from-transparent via-[#ff014f] to-transparent my-10 sm:my-12" />
      
      <div className="max-w-7xl mx-auto py-10 md:py-20">
        {/* Section title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">
          My <span className="text-[#ff014f]">Projects</span>
        </h2>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="bg-[#1b1b1b] rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#ff014f]/20 transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              {/* Image container */}
              <div className={`h-52 w-full ${isSvg(project.image) ? 'flex items-center justify-center p-6' : 'overflow-hidden relative'}`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={
                    isSvg(project.image) 
                      ? "h-auto max-h-full w-auto max-w-full object-contain" 
                      : "absolute w-full h-full object-cover"
                  }
                  loading="lazy"
                />
              </div>
              
              {/* Project details */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                {/* Title and GitHub icon */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#ff014f]">
                    {project.title}
                  </h3>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#ff014f] transition-colors duration-300"
                    aria-label="GitHub repository"
                  >
                    <svg 
                      className="w-6 h-6" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  </a>
                </div>
                
                {/* Description */}
                <ul className="text-gray-300 text-sm sm:text-base mb-6 space-y-2 list-disc list-inside flex-grow">
                  {project.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs sm:text-sm bg-[#212428] text-[#ff014f] px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;