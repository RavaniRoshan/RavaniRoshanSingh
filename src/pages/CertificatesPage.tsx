import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CertificatesPage: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const allCertificates = [
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
      title: "Electronic Arts - Software Engineering Job Simulation",
      issuer: "Forage",
      date: "Dec 2024",
      credentialId: "cnakTF3k2otWxaKWr",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_5PuCun9rwkcGsmBLf_1733986161123_completion_certificate.pdf",
      skills: ["Software Engineering"],
      category: "Software Engineering",
      color: "purple",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    },
    {
      id: 3,
      title: "Machine Learning with Python",
      issuer: "Cognitive Class",
      date: "Dec 2024",
      credentialId: "63023473e8a94725b2061003516ad226",
      link: "https://courses.cognitiveclass.ai/certificates/63023473e8a94725b2061003516ad226",
      skills: ["Machine Learning"],
      category: "Machine Learning",
      color: "green",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      id: 4,
      title: "Machine Learning with Python",
      issuer: "freeCodeCamp",
      date: "Dec 2024",
      credentialId: "fccfa059490-3d19-4491-a271-f6d4b517d582-mlwp",
      link: "https://freecodecamp.org/certification/fccfa059490-3d19-4491-a271-f6d4b517d582/machine-learning-with-python-v7",
      skills: ["Neuro-Linguistic Programming (NLP)"],
      category: "Machine Learning",
      color: "orange",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20"
    },
    {
      id: 5,
      title: "Prompt Engineering for Vision Models",
      issuer: "DeepLearning.AI",
      date: "Dec 2024",
      credentialId: "",
      link: "https://learn.deeplearning.ai/accomplishments/75befc5c-d9f3-42f0-b1fd-70a1384c0fac?usp=sharing",
      skills: ["Prompt Engineering"],
      category: "AI/ML",
      color: "indigo",
      gradient: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20"
    },
    {
      id: 6,
      title: "Statistics 101",
      issuer: "Cognitive Class",
      date: "Dec 2024",
      credentialId: "188eef7ca02f446284d17486baddd303",
      link: "https://courses.cognitiveclass.ai/certificates/188eef7ca02f446284d17486baddd303",
      skills: ["Statistics"],
      category: "Data Science",
      color: "teal",
      gradient: "from-teal-500 to-cyan-600",
      bgGradient: "from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20"
    },
    {
      id: 7,
      title: "Walmart USA - Advanced Software Engineering Job Simulation",
      issuer: "Forage",
      date: "Dec 2024",
      credentialId: "Hmbg4wircK6uNmPk2",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_5PuCun9rwkcGsmBLf_1733989829566_completion_certificate.pdf",
      skills: ["Software Engineering"],
      category: "Software Engineering",
      color: "yellow",
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
    },
    {
      id: 8,
      title: "Computer Vision",
      issuer: "Kaggle",
      date: "Nov 2024",
      credentialId: "",
      link: "https://www.linkedin.com/in/roshan-ravani-3a79882a3/details/certifications/1.731159323007e+12/single-media-viewer?type=IMAGE&profileId=ACoAAElLHC8BoKlidQKxMIO-ZuUiCq0sBbaCxss",
      skills: ["Computer Vision"],
      category: "AI/ML",
      color: "pink",
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20"
    },
    {
      id: 9,
      title: "Foundational C# with Microsoft",
      issuer: "freeCodeCamp",
      date: "Nov 2024",
      credentialId: "fccfa059490-3d19-4491-a271-f6d4b517d582-fcswm",
      link: "https://freecodecamp.org/certification/fccfa059490-3d19-4491-a271-f6d4b517d582/foundational-c-sharp-with-microsoft",
      skills: ["C#"],
      category: "Programming",
      color: "emerald",
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20"
    },
    {
      id: 10,
      title: "Goldman Sachs - Software Engineering Job Simulation",
      issuer: "Forage",
      date: "Nov 2024",
      credentialId: "h6gJo9d3pLZRCQEBf",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/NPdeQ43o8P9HJmJzg_MBA4MnZTNFEoJZGnk_5PuCun9rwkcGsmBLf_1731675288028_completion_certificate.pdf",
      skills: ["Software Engineering"],
      category: "Software Engineering",
      color: "violet",
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20"
    },
    {
      id: 11,
      title: "Introduction to Generative AI",
      issuer: "Google",
      date: "Nov 2024",
      credentialId: "12849044",
      link: "https://www.cloudskillsboost.google/public_profiles/66247599-bda3-4997-a75c-5146258d420d/badges/12849044?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      skills: ["Generative AI"],
      category: "AI/ML",
      color: "blue",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
    },
    {
      id: 12,
      title: "Intro to Game AI and Reinforcement Learning",
      issuer: "Kaggle",
      date: "Nov 2024",
      credentialId: "",
      link: "https://www.linkedin.com/in/roshan-ravani-3a79882a3/details/certifications/1.731498208524e+12/single-media-viewer?type=IMAGE&profileId=ACoAAElLHC8BoKlidQKxMIO-ZuUiCq0sBbaCxss",
      skills: ["Game AI", "Reinforcement Learning"],
      category: "AI/ML",
      color: "red",
      gradient: "from-red-500 to-pink-600",
      bgGradient: "from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20"
    },
    {
      id: 13,
      title: "Webflow 101",
      issuer: "Webflow",
      date: "Nov 2024",
      credentialId: "",
      link: "https://www.linkedin.com/in/roshan-ravani-3a79882a3/details/certifications/1.730964986537e+12/single-media-viewer?type=DOCUMENT&profileId=ACoAAElLHC8BoKlidQKxMIO-ZuUiCq0sBbaCxss",
      skills: ["Web Design", "Responsive Web Design"],
      category: "Web Development",
      color: "cyan",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20"
    },
    {
      id: 14,
      title: "LangChain for LLM Application Development",
      issuer: "DeepLearning.AI",
      date: "2024",
      credentialId: "",
      link: "https://learn.deeplearning.ai/accomplishments/06d9afa2-4db9-4085-a8e9-b81c1b7dc343?usp=sharing",
      skills: ["LangChain", "LLM"],
      category: "AI/ML",
      color: "lime",
      gradient: "from-lime-500 to-green-600",
      bgGradient: "from-lime-50 to-green-50 dark:from-lime-900/20 dark:to-green-900/20"
    },
    {
      id: 15,
      title: "ACP: Agent Communication Protocol",
      issuer: "DeepLearning.AI",
      date: "2024",
      credentialId: "",
      link: "https://learn.deeplearning.ai/accomplishments/4e46f175-9b1d-4605-bd4b-17003928e532?usp=sharing",
      skills: ["Artificial Intelligence (AI)"],
      category: "AI/ML",
      color: "amber",
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20"
    },
    {
      id: 16,
      title: "AI Agents in LangGraph",
      issuer: "DeepLearning.AI",
      date: "2024",
      credentialId: "",
      link: "https://learn.deeplearning.ai/accomplishments/ebe94656-8e70-4b8e-afd0-384d7046c9c6?usp=sharing",
      skills: ["Agents"],
      category: "AI/ML",
      color: "rose",
      gradient: "from-rose-500 to-pink-600",
      bgGradient: "from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20"
    },
    {
      id: 17,
      title: "Building AI Browser Agents",
      issuer: "DeepLearning.AI",
      date: "2024",
      credentialId: "",
      link: "https://learn.deeplearning.ai/accomplishments/4ad74d27-d86f-4a31-a9f8-71692b72e2e7?usp=sharing",
      skills: ["AI Agents"],
      category: "AI/ML",
      color: "sky",
      gradient: "from-sky-500 to-blue-600",
      bgGradient: "from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20"
    },
    {
      id: 18,
      title: "Finetuning Large Language Models",
      issuer: "DeepLearning.AI",
      date: "2024",
      credentialId: "",
      link: "https://learn.deeplearning.ai/accomplishments/06e5affd-51ae-4932-bcb4-767f94bc926c?usp=sharing",
      skills: ["Fine Tuning", "Large Language Models (LLM)"],
      category: "AI/ML",
      color: "slate",
      gradient: "from-slate-500 to-gray-600",
      bgGradient: "from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20"
    },
    {
      id: 19,
      title: "How Business Thinkers Can Start Building AI Plugins With Semantic Kernel",
      issuer: "DeepLearning.AI",
      date: "2024",
      credentialId: "",
      link: "https://learn.deeplearning.ai/accomplishments/3ab44294-7086-43ed-8fb8-363e871b2c9c?usp=sharing",
      skills: ["AI Plugins"],
      category: "AI/ML",
      color: "stone",
      gradient: "from-stone-500 to-gray-600",
      bgGradient: "from-stone-50 to-gray-50 dark:from-stone-900/20 dark:to-gray-900/20"
    },
    {
      id: 20,
      title: "LLMs as Operating Systems: Agent Memory",
      issuer: "DeepLearning.AI",
      date: "2024",
      credentialId: "",
      link: "https://learn.deeplearning.ai/accomplishments/8799ff39-6bdc-4028-b393-f7ef00584b20?usp=sharing",
      skills: ["Large Language Models (LLM)", "Retrieval-Augmented Generation (RAG)"],
      category: "AI/ML",
      color: "neutral",
      gradient: "from-neutral-500 to-gray-600",
      bgGradient: "from-neutral-50 to-gray-50 dark:from-neutral-900/20 dark:to-gray-900/20"
    }
  ];

  const categories = ['All', ...Array.from(new Set(allCertificates.map(cert => cert.category)))];

  const filteredCertificates = selectedCategory === 'All' 
    ? allCertificates 
    : allCertificates.filter(cert => cert.category === selectedCategory);

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
  }, [filteredCertificates]);

  const getCertificateIcon = (category: string) => {
    switch (category) {
      case 'AI/ML':
      case 'Machine Learning':
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
      case 'Software Engineering':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
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
    <div className="min-h-screen px-4 py-8 md:px-8 lg:px-16 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200 mb-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
          Back to Home
        </Link>
        
        <h1 className="text-3xl font-bold mb-2">All Certificates</h1>
        <p className="text-gray-600 dark:text-gray-400">
          A comprehensive collection of my professional certifications and achievements
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCertificates.map((cert, index) => (
          <div
            key={cert.id}
            data-index={index}
            className={`certificate-card-animated group relative overflow-hidden rounded-xl bg-gradient-to-br ${cert.bgGradient} border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
              visibleCards.includes(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              transitionDelay: `${index * 100}ms`,
              animationDelay: `${index * 100}ms`
            }}
          >
            {/* Animated background overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            
            {/* Floating particles */}
            <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full opacity-60 animate-ping"></div>
            <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-white rounded-full opacity-40 animate-ping delay-300"></div>
            
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

              {cert.credentialId && (
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    ID: {cert.credentialId}
                  </p>
                </div>
              )}
            </div>
            
            {/* Hover effect border */}
            <div className={`absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${cert.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center space-x-8 px-6 py-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <div>
            <div className="text-2xl font-bold text-blue-600">{allCertificates.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Certificates</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">{categories.length - 1}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {Array.from(new Set(allCertificates.flatMap(cert => cert.skills))).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Skills</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;

