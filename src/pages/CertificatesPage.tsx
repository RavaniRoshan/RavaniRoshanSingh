import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { allCertificates } from '@/data/certificates';
import { useToast } from '@/hooks/use-toast';

const CertificatesPage: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('date-desc');
  const { toast } = useToast();

  const categories = ['All', ...Array.from(new Set(allCertificates.map(cert => cert.category)))];

  const sortedAndFilteredCertificates = useMemo(() => {
    const filtered = allCertificates
      .filter(cert => selectedCategory === 'All' || cert.category === selectedCategory)
      .filter(cert => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
          cert.title.toLowerCase().includes(searchTermLower) ||
          cert.issuer.toLowerCase().includes(searchTermLower) ||
          cert.skills.some(skill => skill.toLowerCase().includes(searchTermLower))
        );
      });

    const getSortValue = (cert: typeof allCertificates[0], sortOrder: string) => {
      if (sortOrder.includes('date')) {
        const dateStr = cert.date;
        // A simple way to handle "Feb 2025" and "2024"
        const date = new Date(dateStr.includes(' ') ? dateStr : `Jan 1, ${dateStr}`);
        return date.getTime();
      }
      return cert.title.toLowerCase();
    };

    return [...filtered].sort((a, b) => {
      const aValue = getSortValue(a, sortOrder);
      const bValue = getSortValue(b, sortOrder);

      if (sortOrder.endsWith('-asc')) {
        if (aValue < bValue) return -1;
        if (aValue > bValue) return 1;
        return 0;
      } else {
        if (aValue > bValue) return -1;
        if (aValue < bValue) return 1;
        return 0;
      }
    });
  }, [selectedCategory, searchTerm, sortOrder]);

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

    const cards = document.querySelectorAll('.certificate-card-animated');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [sortedAndFilteredCertificates]);

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

      {/* Search and Sort Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-grow">
            <div className="relative">
              <input
                type="text"
                placeholder="Search certificates..."
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 font-medium hover:border-blue-400 dark:hover:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <div className="relative min-w-max">
              <select
                  className="px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 font-medium appearance-none cursor-pointer hover:border-blue-400 dark:hover:border-blue-500 pr-10"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
              >
                  <option value="date-desc">📅 Newest</option>
                  <option value="date-asc">📅 Oldest</option>
                  <option value="title-asc">🔤 A-Z</option>
                  <option value="title-desc">🔤 Z-A</option>
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-900 dark:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
        </div>
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
        {sortedAndFilteredCertificates.map((cert, index) => (
          <div
            key={cert.id}
            data-index={index}
            className={`certificate-card-animated group relative overflow-hidden rounded-xl bg-gradient-to-br ${cert.bgGradient} border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
              visibleCards.includes(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              transitionDelay: `${index * 100}ms`,
              animationDelay: `${index * 100}ms`
            }}
          >
            {/* Animated background overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            
            {/* Reduced floating particles */}
            <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-white rounded-full opacity-30 animate-pulse delay-300"></div>
            
            <div className="relative z-10 p-6">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${cert.gradient} text-white mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
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
                
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(cert.link);
                      toast({ title: "Link copied!", description: "The certificate link has been copied to your clipboard." });
                    }}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                      <polyline points="16 6 12 2 8 6"></polyline>
                      <line x1="12" y1="2" x2="12" y2="15"></line>
                    </svg>
                  </button>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {cert.credentialId && (
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    ID: {cert.credentialId}
                  </p>
                </div>
              )}
            </div>
            
            {/* Simplified hover effect border */}
            <div className={`absolute inset-0 rounded-xl border border-transparent group-hover:border-gray-300 dark:group-hover:border-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
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

