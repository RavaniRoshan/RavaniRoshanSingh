import React, { useState, useEffect, useRef } from 'react';

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    contributions: 0,
    aiModels: 0,
    typingSpeed: 0,
    coffeeIntake: 0,
    hackathons: 0
  });
  const sectionRef = useRef<HTMLElement>(null);

  const finalValues = {
    contributions: 1200,
    aiModels: 8,
    typingSpeed: 120,
    coffeeIntake: 4,
    hackathons: 3
  };

  const stats = [
    {
      label: 'languages',
      value: 'Python, JavaScript, Rust',
      icon: '💻',
      color: 'from-blue-500 to-cyan-500',
      isAnimated: false
    },
    {
      label: 'contributions',
      value: `${animatedValues.contributions}+ commits`,
      icon: '📊',
      color: 'from-green-500 to-emerald-500',
      isAnimated: true
    },
    {
      label: 'AI models',
      value: `fine-tuned ${animatedValues.aiModels}`,
      icon: '🤖',
      color: 'from-purple-500 to-pink-500',
      isAnimated: true
    },
    {
      label: 'typing speed',
      value: `${animatedValues.typingSpeed} WPM`,
      icon: '⚡',
      color: 'from-yellow-500 to-orange-500',
      isAnimated: true
    },
    {
      label: 'coffee intake',
      value: `${animatedValues.coffeeIntake} cups/day`,
      icon: '☕',
      color: 'from-amber-600 to-yellow-600',
      isAnimated: true
    },
    {
      label: 'hackathons',
      value: `won ${animatedValues.hackathons}`,
      icon: '🏆',
      color: 'from-red-500 to-pink-500',
      isAnimated: true
    }
  ];

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

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateValue = (key: keyof typeof finalValues, finalValue: number, duration: number) => {
        let startTime: number | null = null;
        
        const animate = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const currentValue = Math.floor(progress * finalValue);
          
          setAnimatedValues(prev => ({
            ...prev,
            [key]: currentValue
          }));
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        requestAnimationFrame(animate);
      };

      // Animate each value with different durations and delays
      setTimeout(() => animateValue('contributions', finalValues.contributions, 2000), 300);
      setTimeout(() => animateValue('aiModels', finalValues.aiModels, 1000), 600);
      setTimeout(() => animateValue('typingSpeed', finalValues.typingSpeed, 1500), 900);
      setTimeout(() => animateValue('coffeeIntake', finalValues.coffeeIntake, 800), 1200);
      setTimeout(() => animateValue('hackathons', finalValues.hackathons, 600), 1500);
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
        <h2 className="text-lg font-medium mb-6 flex items-center group">
          <span className="mr-2 text-2xl animate-pulse">░</span> 
          <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent font-bold tracking-wider">
            STATS
          </span>
          <div className="ml-4 flex space-x-1">
            <div className="w-1 h-1 bg-blue-500 rounded-full animate-ping"></div>
            <div className="w-1 h-1 bg-green-500 rounded-full animate-ping delay-100"></div>
            <div className="w-1 h-1 bg-purple-500 rounded-full animate-ping delay-200"></div>
          </div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Animated border */}
              <div className={`absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-lg mr-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                      {stat.label}
                    </span>
                  </div>
                  <div className={`text-sm font-semibold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                </div>
                
                {stat.isAnimated && (
                  <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${stat.color} animate-pulse`}></div>
                  </div>
                )}
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-1 right-1 w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-ping delay-100"></div>
              <div className="absolute bottom-1 left-1 w-0.5 h-0.5 bg-white rounded-full opacity-40 animate-ping delay-300"></div>
            </div>
          ))}
        </div>
        
        {/* Terminal-style footer */}
        <div className={`mt-6 p-4 bg-gray-900 dark:bg-gray-950 rounded-lg border border-gray-700 font-mono text-sm transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <div className="flex items-center mb-2">
            <div className="flex space-x-1 mr-3">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400">~/portfolio/stats</span>
          </div>
          <div className="text-green-400">
            <span className="text-gray-500">$</span> cat achievements.txt
          </div>
          <div className="text-gray-300 mt-1 text-xs leading-relaxed">
            ✓ Building innovative AI solutions<br/>
            ✓ Contributing to open-source projects<br/>
            ✓ Winning hackathons and competitions<br/>
            ✓ Continuous learning and growth
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

