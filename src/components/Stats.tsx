import React from 'react';

const Stats: React.FC = () => {
  return (
    <section>
      <h2 className="text-lg font-medium mb-2 flex items-center">
        <span className="mr-1">░</span> STATS
      </h2>
      <div className="space-y-1 text-gray-800 dark:text-gray-200">
        <p>bouldering</p>
        <p>sport climbing<span className="ml-2 text-gray-500 dark:text-gray-400">v5.10B</span></p>
        <p>typing 15s<span className="ml-2 text-gray-500 dark:text-gray-400">85 WPM</span></p>
        <p>typing 10w<span className="ml-2 text-gray-500 dark:text-gray-400">4.25 WPS</span></p>
        <p>keyboard<span className="ml-2 text-gray-500 dark:text-gray-400">QK65</span></p>
        <p>mouse<span className="ml-2 text-gray-500 dark:text-gray-400">Razer Viper V2 Pro</span></p>
      </div>
    </section>
  );
};

export default Stats;
