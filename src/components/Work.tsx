import React, { useState, useEffect, useRef } from 'react';

const Work: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: 'CrewHub',
      description: 'A collaborative platform for AI agent orchestration and workflow management that empowers teams.',
      period: 'now',
      color: 'orange',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      gradient: 'from-orange-400 to-red-500',
      bgGradient: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
    },
    {
      id: 2,
      title: 'BlendTools',
      description: 'A curated collection of tools designed to enhance and streamline workflows in Blender, the open-source 3D creation suite.',
      period: 'Jan 2024 - Apr 2025',
      color: 'purple',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
      gradient: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    {
      id: 3,
      title: 'Markcode-t1',
      description: 'Next-gen coding companion designed to supercharge development workflow with a sleek interface and powerful features.',
      period: 'Jul 2022 - Nov 2023',
      color: 'blue',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      gradient: 'from-blue-400 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
    },
    {
      id: 4,
      title: 'Wardrobify',
      description: 'AI-powered personal stylist web application that leverages artificial intelligence to provide personalized fashion recommendations.',
      period: 'Sept 2018 - Dec 2023',
      color: 'yellow',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
      gradient: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, cardIndex]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.project-card-animated');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div className="flex items-center mb-6">
        <h2 className="text-lg font-medium relative">
          work
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000 delay-300 animate-pulse"></div>
        </h2>
        <div className="ml-4 flex space-x-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-index={index}
            className={`project-card-animated group relative overflow-hidden rounded-xl bg-gradient-to-br ${project.bgGradient} border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
              visibleCards.includes(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              transitionDelay: `${index * 150}ms`,
              animationDelay: `${index * 150}ms`
            }}
          >
            {/* Animated background overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            
            {/* Floating particles */}
            <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full opacity-60 animate-ping"></div>
            <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-white rounded-full opacity-40 animate-ping delay-300"></div>
            
            <div className="relative z-10 p-6">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {project.icon}
              </div>
              
              <h3 className="text-lg font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-300">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white shadow-sm`}>
                  {project.period}
                </span>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                    <path d="M7 17L17 7"></path>
                    <path d="M7 7h10v10"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Hover effect border */}
            <div className={`absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
          </div>
        ))}
      </div>
      
      {/* Background decoration */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-yellow-500/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default Work;

