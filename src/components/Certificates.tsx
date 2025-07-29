import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Certificates: React.FC = () => {
  const [, setVisibleCards] = useState<number[]>([]);
  const [currentRotatingIndex, setCurrentRotatingIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const certificates = [
    {
      id: 1,
      title: "Front End Development Libraries",
      issuer: "freeCodeCamp",
      date: "Feb 2025",
      credentialId: "fccfa059490-3d19-4491-a271-f6d4b517d582-fedl",
      link: "https://freecodecamp.org/certification/fccfa059490-3d19-4491-a271-f6d4b517d582/front-end-development-libraries",
      skills: ["React.js"],
      category: "Frontend Development",
      color: "blue",
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      id: 2,
      title: "Machine Learning with Python",
      issuer: "freeCodeCamp",
      date: "Dec 2024",
      credentialId: "fccfa059490-3d19-4491-a271-f6d4b517d582-mlwp",
      link: "https://freecodecamp.org/certification/fccfa059490-3d19-4491-a271-f6d4b517d582/machine-learning-with-python-v7",
      skills: ["Machine Learning", "Python"],
      category: "Machine Learning",
      color: "purple",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    },
    {
      id: 3,
      title: "Prompt Engineering for Vision Models",
      issuer: "DeepLearning.AI",
      date: "Dec 2024",
      credentialId: "",
      link: "https://learn.deeplearning.ai/accomplishments/75befc5c-d9f3-42f0-b1fd-70a1384c0fac?usp=sharing",
      skills: ["Prompt Engineering", "Computer Vision"],
      category: "AI/ML",
      color: "green",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      id: 4,
      title: "Introduction to Generative AI",
      issuer: "Google",
      date: "Nov 2024",
      credentialId: "12849044",
      link: "https://www.cloudskillsboost.google/public_profiles/66247599-bda3-4997-a75c-5146258d420d/badges/12849044",
      skills: ["Generative AI", "Google Cloud"],
      category: "AI/ML",
      color: "orange",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20"
    },
    {
      id: 5,
      title: "Foundational C# with Microsoft",
      issuer: "freeCodeCamp",
      date: "Nov 2024",
      credentialId: "fccfa059490-3d19-4491-a271-f6d4b517d582-fcswm",
      link: "https://freecodecamp.org/certification/fccfa059490-3d19-4491-a271-f6d4b517d582/foundational-c-sharp-with-microsoft",
      skills: ["C#", "Microsoft"],
      category: "Programming",
      color: "indigo",
      gradient: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20"
    },
    {
      id: 6,
      title: "Computer Vision",
      issuer: "Kaggle",
      date: "Nov 2024",
      credentialId: "",
      link: "https://www.linkedin.com/in/roshan-ravani-3a79882a3/details/certifications/1.731159323007e+12/single-media-viewer",
      skills: ["Computer Vision", "Deep Learning"],
      category: "AI/ML",
      color: "teal",
      gradient: "from-teal-500 to-cyan-600",
      bgGradient: "from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20"
    }
  ];



  // Rotating animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRotatingIndex((prev) => (prev + 1) % certificates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [certificates.length]);

  // Intersection observer for scroll animations
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

    const cards = document.querySelectorAll('.certificate-card-animated');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const getCertificateIcon = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
        );
      case 'Frontend Development':
      case 'Web Development':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        );
      case 'Programming':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14,2 14,8 20,8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10,9 9,9 8,9"></polyline>
          </svg>
        );
    }
  };

  return (
    <section ref={sectionRef} className="relative">
      <div className="flex items-center mb-6">
        <h2 className="text-lg font-medium relative">
          certificates
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-600 transition-all duration-1000 delay-300 animate-pulse"></div>
        </h2>
        <div className="ml-4 flex space-x-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>

      {/* Rotating certificates preview */}
      <div className="relative mb-8 overflow-hidden">
        <div className="flex transition-transform duration-1000 ease-in-out" 
             style={{ transform: `translateX(-${currentRotatingIndex * 100}%)` }}>
          {certificates.map((cert) => (
            <div key={cert.id} className="w-full flex-shrink-0 px-2">
              <div className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${cert.bgGradient} border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10 p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${cert.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {getCertificateIcon(cert.category)}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {cert.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cert.gradient} text-white shadow-sm`}>
                      {cert.date}
                    </span>
                    
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                        <path d="M7 17L17 7"></path>
                        <path d="M7 7h10v10"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Rotation indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {certificates.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentRotatingIndex 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* See more link */}
      <div className="text-center">
        <Link 
          to="/certificates" 
          className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <span>See All Certificates</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>

      {/* Background decoration */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default Certificates;
