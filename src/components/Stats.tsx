import React from 'react';

const Stats: React.FC = () => {
  return (
    <section>
      <h2 className="text-lg font-medium mb-2 flex items-center">
        <span className="mr-1">░</span> STATS
      </h2>
      <div className="space-y-1 text-gray-800 dark:text-gray-200">
        <p>languages<span className="ml-2 text-gray-500 dark:text-gray-400">Python, JavaScript, Rust</span></p>
        <p>contributions<span className="ml-2 text-gray-500 dark:text-gray-400">1,200+ commits</span></p>
        <p>AI models<span className="ml-2 text-gray-500 dark:text-gray-400">fine-tuned 8</span></p>
        <p>typing speed<span className="ml-2 text-gray-500 dark:text-gray-400">120 WPM</span></p>
        <p>coffee intake<span className="ml-2 text-gray-500 dark:text-gray-400">4 cups/day</span></p>
        <p>hackathons<span className="ml-2 text-gray-500 dark:text-gray-400">won 3</span></p>
      </div>
    </section>
  );
};

export default Stats;
