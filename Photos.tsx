import React from 'react';

const Photos: React.FC = () => {
  const photos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      alt: "San Francisco architecture",
      location: "San Francisco, CA"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb",
      alt: "Golden Gate Bridge",
      location: "San Francisco, CA"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad",
      alt: "California coastline",
      location: "Big Sur, CA"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1470093851219-69951fcbb533",
      alt: "Beach sunset",
      location: "San Diego, CA"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1505245208761-ba872912fac0",
      alt: "Ocean waves",
      location: "Laguna Beach, CA"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1518473352243-e26e3d76c6f0",
      alt: "Sunset at beach",
      location: "Newport Beach, CA"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da",
      alt: "National Park landscape",
      location: "Yosemite National Park, CA"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1475066392170-59d55d96fe51",
      alt: "Mountain view",
      location: "Sierra Nevada, CA"
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1432889490240-84df33d47091",
      alt: "Forest path",
      location: "Redwood National Park, CA"
    }
  ];

  return (
    <div className="min-h-screen px-4 py-8 md:px-8 lg:px-16 max-w-4xl mx-auto">
      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Photos</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Here are some of my favorite places to go when I need to recharge. Lots of these photos are along the California coast. Mainly San Francisco, San Diego, and Orange County.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map(photo => (
          <div key={photo.id} className="relative group overflow-hidden rounded-lg">
            <img 
              src={photo.url} 
              alt={photo.alt} 
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm">{photo.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
