import React from 'react';

const Places: React.FC = () => {
  return (
    <section>
      <h2 className="text-lg font-medium mb-2 flex items-center">
        <span className="mr-1">♥</span> places
      </h2>
      <p className="mb-4">
        Here are some of my favorite places to go when I need to recharge. Lots of these photos are along the California coast. Mainly San Francisco, San Diego, and Orange County.
      </p>
      <div className="photo-gallery">
        <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29" alt="San Francisco building" className="shadow-md" />
        <img src="https://images.unsplash.com/photo-1506146332389-18140dc7b2fb" alt="Bridge in San Francisco" className="shadow-md" />
        <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29" alt="Golden Gate Bridge" className="shadow-md" />
        <img src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad" alt="California coastline" className="shadow-md" />
        <img src="https://images.unsplash.com/photo-1470093851219-69951fcbb533" alt="Beach sunset" className="shadow-md" />
        <img src="https://images.unsplash.com/photo-1505245208761-ba872912fac0" alt="Ocean waves" className="shadow-md" />
        <img src="https://images.unsplash.com/photo-1518473352243-e26e3d76c6f0" alt="Sunset at beach" className="shadow-md" />
      </div>
    </section>
  );
};

export default Places;
