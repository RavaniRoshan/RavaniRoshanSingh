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
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/3FqtduiaqnFYvBgKuc6QWQ?utm_source=generator" 
            width="100%" 
            height="80" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </div>
        
        {/* Courtside by Karan Aujla */}
        <div className="music-item p-0 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <iframe 
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/5wqMM6wOwXmX4rc1C3lUkd?utm_source=generator" 
            width="100%" 
            height="80" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </div>
        
        {/* Timeless by The Weeknd */}
        <div className="music-item p-0 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <iframe 
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/1Es7AUAhQvapIcoh3qMKDL?utm_source=generator" 
            width="100%" 
            height="80" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </div>
        
        {/* 48 Rhymes by Karan Aujla */}
        <div className="music-item p-0 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <iframe 
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/6voByoJq77rN6FITdRhtLb?utm_source=generator" 
            width="100%" 
            height="80" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </div>
        
        {/* Azizam by Ed Sheeran */}
        <div className="music-item p-0 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <iframe 
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/0GRc3eGTg8HBdWLRGYgqIc?utm_source=generator" 
            width="100%" 
            height="80" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Music;

