import React from 'react';

const Places: React.FC = () => {
  return (
    <section>
      <h2 className="text-lg font-medium mb-2 flex items-center">
        <span className="mr-1">♥</span> places
      </h2>
      <p className="mb-4">
        Here are some of my favorite places in Gujarat and India where I find inspiration and recharge. From the vibrant tech hubs to peaceful natural landscapes that fuel my creativity.
      </p>
      <div className="photo-gallery">
        <img src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220" alt="Ahmedabad cityscape" className="shadow-md" />
        <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96" alt="Gujarat architecture" className="shadow-md" />
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4" alt="Tech workspace" className="shadow-md" />
        <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" alt="Modern office space" className="shadow-md" />
        <img src="https://images.unsplash.com/photo-1497486751825-1233686d5d80" alt="Coding environment" className="shadow-md" />
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Innovation hub" className="shadow-md" />
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" alt="Development workspace" className="shadow-md" />
      </div>
    </section>
  );
};

export default Places;

