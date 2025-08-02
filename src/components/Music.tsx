import React from 'react';
import SpotifyEmbed from './SpotifyEmbed';

const songs = [
  {
    title: "Winning Speech by Karan Aujla",
    src: "https://open.spotify.com/embed/track/3FqtduiaqnFYvBgKuc6QWQ"
  },
  {
    title: "Courtside by Karan Aujla",
    src: "https://open.spotify.com/embed/track/5wqMM6wOwXmX4rc1C3lUkd"
  },
  {
    title: "Timeless by The Weeknd",
    src: "https://open.spotify.com/embed/track/1Es7AUAhQvapIcoh3qMKDL"
  },
  {
    title: "Popular by The Weeknd",
    src: "https://open.spotify.com/embed/track/5xP9lQYA8YQmQh6BOxcAnR"
  },
  {
    title: "48 Rhymes by Karan Aujla",
    src: "https://open.spotify.com/embed/track/6voByoJq77rN6FITdRhtLb"
  },
  {
    title: "Azizam by Ed Sheeran",
    src: "https://open.spotify.com/embed/track/0GRc3eGTg8HBdWLRGYgqIc"
  }
];

const Music: React.FC = () => {
  return (
    <section>
      <h2 className="text-lg font-medium mb-2 flex items-center">
        <span className="mr-1">♫</span> top songs
      </h2>
      <p className="mb-4">Music that fuels my coding sessions and creative thinking</p>

      <div className="grid grid-cols-1 gap-4">
        {songs.map((song) => (
          <SpotifyEmbed key={song.title} src={song.src} title={song.title} />
        ))}
      </div>
    </section>
  );
};

export default Music;
