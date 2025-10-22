import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const blogPosts = [
    {
      id: 9,
      title: "Building agent-X: The Vision-Based Web AI Revolutionizing Digital Automation",
      date: "October 22, 2025",
      excerpt: "A deep dive into agent-X, an open-source project combining vision-language models with browser automation to create truly autonomous web agents.",
      readTime: "15 min read",
      tags: ["AI", "Automation", "Open Source", "Vision Models"],
      link: "/blog/building-agent-x"
    },
    {
      id: 1,
      title: "Demystifying AI Agent Orchestration: A Deep Dive into CrewHub",
      date: "June 25, 2025",
      excerpt: "Explore the architecture and challenges behind building collaborative AI agent systems, drawing insights from the development of CrewHub.",
      readTime: "7 min read",
      tags: ["AI", "Agents", "Orchestration", "Software Architecture"],
      link: "/blog/demystifying-ai-agents"
    },
    {
      id: 2,
      title: "From Concept to Code: Building a Modern Full-Stack Application",
      date: "June 18, 2025",
      excerpt: "A comprehensive guide to developing robust and scalable full-stack applications, covering frontend (React), backend (Node.js/Python), and database integration.",
      readTime: "12 min read",
      tags: ["Full-Stack", "Web Development", "React", "Backend"],
      link: "/blog/full-stack-development"
    },
    {
      id: 3,
      title: "Leveraging AI for Personalized Experiences: Lessons from Wardrobify",
      date: "June 10, 2025",
      excerpt: "Discover how AI and machine learning can be applied to create highly personalized user experiences, using the Wardrobify project as a case study.",
      readTime: "9 min read",
      tags: ["AI", "Machine Learning", "Personalization", "UX"],
      link: "/blog/ai-personalization"
    },
    {
      id: 4,
      title: "Optimizing Performance in Large-Scale Applications",
      date: "March 30, 2025",
      excerpt: "Techniques and strategies for maintaining performance in complex, data-intensive applications at scale.",
      readTime: "10 min read",
      tags: ["Performance", "Optimization", "Architecture"],
      link: "/blog/optimizing-performance"
    },
    {
      id: 5,
      title: "Machine Learning Fundamentals: A Developer's Practical Guide",
      date: "May 15, 2025",
      excerpt: "Essential machine learning concepts every developer should master, from data preprocessing to model deployment.",
      readTime: "11 min read",
      tags: ["Machine Learning", "Python", "Data Science", "AI"],
      link: "/blog/machine-learning-fundamentals"
    },
    {
      id: 6,
      title: "Ethical AI Development: Building Systems Users Can Trust",
      date: "April 22, 2025",
      excerpt: "Exploring the principles and practices for developing responsible AI systems that prioritize fairness, transparency, and user trust.",
      readTime: "8 min read",
      tags: ["Ethics", "AI", "Responsibility", "Trust"],
      link: "/blog/ethical-ai-development"
    },
    {
      id: 7,
      title: "Data Structures & Algorithms: Mastering Technical Interviews",
      date: "March 8, 2025",
      excerpt: "A comprehensive guide to the fundamental DSA concepts and problem-solving strategies essential for technical interviews.",
      readTime: "13 min read",
      tags: ["DSA", "Algorithms", "Interview Prep", "Computer Science"],
      link: "/blog/data-structures-algorithms"
    },
    {
      id: 8,
      title: "Cloud Architecture Patterns: Designing Scalable Systems",
      date: "February 14, 2025",
      excerpt: "Essential patterns and practices for designing robust, scalable cloud architectures that handle modern application demands.",
      readTime: "14 min read",
      tags: ["Cloud", "Architecture", "Scalability", "DevOps"],
      link: "/blog/cloud-architecture"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`min-h-screen px-4 py-8 md:px-8 lg:px-16 max-w-4xl mx-auto transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Blog
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Thoughts, insights, and explorations in AI, machine learning, and cutting-edge product development.
        </p>
        <div className="flex justify-center mt-4 space-x-2">
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
          <span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-100"></span>
          <span className="w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-200"></span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <div 
            key={post.id} 
            className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                {post.title}
              </h2>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <Link 
                to={post.link} 
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-base font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300"
              >
                Read more 
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

