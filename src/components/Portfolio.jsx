import React from 'react';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.jpeg';
import project3 from '../assets/images/project3.png';

const Portfolio = () => {
  const projects = [
       {
      title: "Employee Management System",
      category: "Information System, Backend",
      image: project1,  
      description: "Factory employee management system with attendance tracking and payroll features"
    },
    {
      title: "Lisku - Todo List App",
      category: "Mobile App Development",
      image: project2,  
      description: "Android task management application to help organize daily activities efficiently"
    },
    {
      title: "Personal Portfolio Website",
      category: "Frontend Development",
      image: project3,  
      description: "Responsive portfolio website showcasing skills and projects built with React and Tailwind CSS"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
            >
              <div className="h-64 relative overflow-hidden bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-purple-600 text-sm font-medium mb-3">{project.category}</p>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* More on Dribbble Button */}
        <div className="text-center">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition font-medium inline-flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.32 8.834c4.022-.015 6.775-.389 9.119-1.122.239.477.455.959.617 1.479-3.483.885-6.185 2.947-8.106 6.184-1.579-1.521-2.668-3.534-2.83-5.541zm3.873 7.524c1.626-2.678 3.965-4.39 7.024-5.138.614 1.606 1.072 3.245 1.379 4.915-2.082.867-4.354 1.298-6.703 1.298-1.02 0-2.015-.106-2.991-.307zm9.655-.256c-.294-1.652-.739-3.276-1.337-4.864 1.916-.32 4.082-.32 6.491 0-.393 2.16-1.591 4.033-3.154 5.457z"/>
            </svg>
            More on Dribbble
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;