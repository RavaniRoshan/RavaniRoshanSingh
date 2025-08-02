import React, { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { Music as MusicIcon } from 'lucide-react'; // Using Music icon as a placeholder for Spotify icon

const songData = [
  {
    title: "Winning Speech",
    artist: "Karan Aujla",
    url: "https://open.spotify.com/track/3FqtduiaqnFYvBgKuc6QWQ",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273e0b96c2d1653f3a759c3d4f4"
  },
  {
    title: "Courtside",
    artist: "Karan Aujla",
    url: "https://open.spotify.com/track/5wqMM6wOwXmX4rc1C3lUkd",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273d7453d8f8a8ea1f7e34eda77"
  },
  {
    title: "Timeless",
    artist: "The Weeknd",
    url: "https://open.spotify.com/track/1Es7AUAhQvapIcoh3qMKDL",
    albumArt: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa82b56852e2e8"
  },
  {
    title: "Popular",
    artist: "The Weeknd",
    url: "https://open.spotify.com/track/5xP9lQYA8YQmQh6BOxcAnR",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273b5b34a683a4cc7bbf9c6de8f"
  },
  {
    title: "48 Rhymes",
    artist: "Karan Aujla",
    url: "https://open.spotify.com/track/6voByoJq77rN6FITdRhtLb",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273e0b96c2d1653f3a759c3d4f4"
  },
  {
    title: "Azizam",
    artist: "Ed Sheeran",
    url: "https://open.spotify.com/track/0GRc3eGTg8HBdWLRGYgqIc",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273f3d9ba472a5a5cf2155c5936"
  }
];

interface Song {
  title: string;
  artist: string;
  url: string;
  albumArt: string;
}

const SongCard: React.FC<{ song: Song }> = ({ song }) => (
  <a
    href={song.url}
    target="_blank"
    rel="noopener noreferrer"
    className="no-underline text-current"
  >
    <div className="bg-white dark:bg-zinc-800/50 p-2 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center space-x-4 h-[80px]">
      <img src={song.albumArt} alt={`${song.title} album art`} className="w-16 h-16 rounded-md" />
      <div className="flex-1 min-w-0">
        <p className="font-semibold truncate text-zinc-900 dark:text-zinc-100">{song.title}</p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 truncate">{song.artist}</p>
      </div>
      <MusicIcon className="w-6 h-6 text-green-500" />
    </div>
  </a>
);

const SongSkeleton: React.FC = () => (
  <div className="bg-white dark:bg-zinc-800/50 p-2 rounded-lg shadow-md flex items-center space-x-4 h-[80px]">
    <Skeleton className="w-16 h-16 rounded-md" />
    <div className="flex-1">
      <Skeleton className="h-5 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  </div>
);

const Music: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSongs(songData);
      setIsLoading(false);
    }, 500); // Simulate network delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <h2 className="text-lg font-medium mb-2 flex items-center">
        <span className="mr-1">♫</span> top songs
      </h2>
      <p className="mb-4">Music that fuels my coding sessions and creative thinking</p>

      <div className="grid grid-cols-1 gap-4">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, index) => <SongSkeleton key={index} />)
        ) : (
          songs.map((song) => <SongCard key={song.title} song={song} />)
        )}
      </div>
    </section>
  );
};

export default Music;
