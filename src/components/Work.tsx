import React, { useState, useEffect, useRef } from 'react';
import { Bot, Search, BookOpen, Brain, Github, ExternalLink } from 'lucide-react';

const Work: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: 'Agent-X',
      description: 'AI agent that automates browser tasks using vision-language models. Interacts with websites from plain English instructions, leveraging Python, FastAPI, Playwright, React, and Gemini 2.5. Open-source, safety-first, and fully browser-native for hands-free web automation.',
      period: 'Oct 2024 - Dec 2024',
      link: 'https://github.com/RavaniRoshan/Agent-X',
      tags: ['Python', 'FastAPI', 'Playwright', 'React'],
      icon: <Bot className="w-6 h-6" />,
      gradient: 'from-blue-400 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
    },
    {
      id: 2,
      title: 'LegacyLens',
      description: 'The AI Archaeologist. Turn 1M+ lines of legacy spaghetti code into a living dependency map using Gemini 3.0 Pro. Visualize fragility, trace logic, and chat with your monolith. Built with Next.js to transform how we understand legacy systems.',
      period: 'Nov 2024 - Dec 2024',
      link: 'https://github.com/RavaniRoshan/LegacyLens',
      tags: ['Next.js', 'Gemini 3.0', 'AI Analysis'],
      icon: <Search className="w-6 h-6" />,
      gradient: 'from-purple-400 to-indigo-500',
      bgGradient: 'from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20'
    },
    {
      id: 3,
      title: 'RAG Course Project',
      description: 'Comprehensive RAG course covering theory, production-ready code, and 15 modules—reranking, chunking, embeddings, vector DBs, hybrid search, query optimization, agentic workflows, and deployment. Suited for AI/ML developers seeking advanced RAG knowledge.',
      period: 'Jun 2024 - Sep 2024',
      link: 'https://github.com/RavaniRoshan/Rag-course',
      tags: ['RAG', 'Vector DB', 'AI Agents'],
      icon: <BookOpen className="w-6 h-6" />,
      gradient: 'from-red-400 to-orange-500',
      bgGradient: 'from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20'
    },
    {
      id: 4,
      title: 'AXiOM-ONE',
      description: 'A Research-Grade Reasoning System (Not a Chatbot). A thinking-first research agent that decomposes problems, runs multi-step reasoning loops, validates its own outputs, and exposes the entire thought pipeline. Optimizes for correctness under pressure.',
      period: 'Aug 2024 - Dec 2024',
      link: 'https://github.com/RavaniRoshan/AXiOM',
      tags: ['Next.js', 'FastAPI', 'Gemini 3 Pro'],
      icon: <Brain className="w-6 h-6" />,
      gradient: 'from-pink-400 to-rose-500',
      bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20'
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
      { threshold: 0.05, rootMargin: '50px' }
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
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-700 delay-200 animate-pulse"></div>
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
            className={`project-card-animated group relative overflow-hidden rounded-xl bg-gradient-to-br ${project.bgGradient} border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col ${
              visibleCards.includes(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              transitionDelay: `${index * 100}ms`,
              animationDelay: `${index * 100}ms`
            }}
          >
            {/* Simplified background overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            
            {/* Reduced floating particles */}
            <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-white rounded-full opacity-30 animate-pulse delay-300 pointer-events-none"></div>
            
            <div className="relative z-10 p-6 flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                 <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} text-white group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                  {project.icon}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium italic">
                  {project.period}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-300 flex-grow">
                {project.description}
              </p>
              
              <div className="mt-auto space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs rounded bg-white/50 dark:bg-black/20 border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW PROJECT</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
            
            {/* Simplified hover effect border */}
            <div className={`absolute inset-0 rounded-xl border border-transparent group-hover:border-gray-300 dark:group-hover:border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
          </div>
        ))}
      </div>
      
      {/* Reduced background decoration */}
      <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-lg pointer-events-none"></div>
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-pink-500/5 to-yellow-500/5 rounded-full blur-lg pointer-events-none"></div>
    </section>
  );
};

export default Work;
