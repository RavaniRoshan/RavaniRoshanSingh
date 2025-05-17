import React from 'react';

const Work: React.FC = () => {
  return (
    <section>
      <h2 className="text-lg font-medium mb-4">work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* BlendTools Project */}
        <div className="project-card purple">
          <div className="project-icon purple">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <h3 className="text-lg font-medium">BlendTools</h3>
          <p className="mt-1">A curated collection of tools designed to enhance and streamline workflows in Blender, the open-source 3D creation suite.</p>
          <p className="date-range mt-2">now</p>
        </div>

        {/* CrewHub Project */}
        <div className="project-card orange">
          <div className="project-icon orange">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <h3 className="text-lg font-medium">CrewHub</h3>
          <p className="mt-1">A collaborative platform for AI agent orchestration and workflow management that empowers teams.</p>
          <p className="date-range mt-2">Sep 2022 - Dec 2023</p>
        </div>

        {/* Markcode-t1 Project */}
        <div className="project-card blue">
          <div className="project-icon blue">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <h3 className="text-lg font-medium">Markcode-t1</h3>
          <p className="mt-1">Next-gen coding companion designed to supercharge development workflow with a sleek interface and powerful features.</p>
          <p className="date-range mt-2">Jul 2022 - Nov 2023</p>
        </div>

        {/* Wardrobify Project */}
        <div className="project-card yellow">
          <div className="project-icon yellow">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <h3 className="text-lg font-medium">Wardrobify</h3>
          <p className="mt-1">AI-powered personal stylist web application that leverages artificial intelligence to provide personalized fashion recommendations.</p>
          <p className="date-range mt-2">Sept 2018 - now</p>
        </div>
      </div>
    </section>
  );
};

export default Work;
