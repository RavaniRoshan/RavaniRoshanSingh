import React, { useState, useEffect, useRef } from 'react';
import { ABOUT_TEXT, SKILLS } from '../lib/constants';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const timer = setInterval(() => {
        if (index < ABOUT_TEXT.length) {
          setTypedText(ABOUT_TEXT.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 30);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="relative">
        <h2 className="text-lg font-medium mb-4 relative inline-block">
          about
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000 delay-300 group-hover:w-full"></div>
        </h2>
        
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
          </div>
          
          <div className="relative z-10">
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-base">
              {typedText}
              {isVisible && typedText.length < ABOUT_TEXT.length && (
                <span className="animate-pulse">|</span>
              )}
            </p>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
          <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/2 right-8 w-1 h-1 bg-pink-500 rounded-full animate-bounce delay-500"></div>
        </div>
        
        {/* Skills highlight */}
        <div className={`mt-6 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill, index) => (
              <button
                key={skill}
                className={`px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-default`}
                style={{ animationDelay: `${index * 100}ms` }}
                tabIndex={0}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

