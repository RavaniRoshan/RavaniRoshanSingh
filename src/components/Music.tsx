import React from 'react';

const Music: React.FC = () => {
  return (
    <section>
      <h2 className="text-lg font-medium mb-2 flex items-center">
        <span className="mr-1">♫</span> top songs
      </h2>
      <p className="mb-4">Music that fuels my coding sessions and creative thinking</p>
      
      <div className="grid grid-cols-1 gap-4">
        {/* Winning Speech by Karan Aujla */}
        <div className="music-item p-0 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <iframe 
            src="https://open.spotify.com/embed/track/3FqtduiaqnFYvBgKuc6QWQ" 
            width="100%" 
            height="80" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Winning Speech by Karan Aujla"
          ></iframe>
        </div>
        
        {/* Courtside by Karan Aujla */}
        <div className="music-item p-0 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <iframe 
            src="https://open.spotify.com/embed/track/5wqMM6wOwXmX4rc1C3lUkd" 
            width="100%" 
            height="80" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Courtside by Karan Aujla"
          ></iframe>
        </div>
        
        {/* Timeless by The Weeknd */}
        <div className="music-item p-0 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <iframe 
            src="https://open.spotify.com/embed/track/1Es7AUAhQvapIcoh3qMKDL" 
            width="100%" 
            height="80" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Timeless by The Weeknd"
          ></iframe>
        </div>
        
        {/* Popular by The Weeknd */}
        <div className="music-item p-0 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <iframe 
            src="https://open.spotify.com/embed/track/5xP9lQYA8YQmQh6BOxcAnR" 
            width="100%" 
            height="80" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Popular by The Weeknd"
          ></iframe>
        </div>
        
        {/* 48 Rhymes by Karan Aujla */}
        <div className="music-item p-0 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <iframe 
            src="https://open.spotify.com/embed/track/6voByoJq77rN6FITdRhtLb" 
            width="100%" 
            height="80" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="48 Rhymes by Karan Aujla"
          ></iframe>
        </div>
        
        {/* Azizam by Ed Sheeran */}
        <div className="music-item p-0 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <iframe 
            src="https://open.spotify.com/embed/track/0GRc3eGTg8HBdWLRGYgqIc" 
            width="100%" 
            height="80" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Azizam by Ed Sheeran"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Music;

