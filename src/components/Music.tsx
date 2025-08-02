import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { songs, Song } from '../data/songs';
import { Skeleton } from "@/components/ui/skeleton";

interface CurrentlyPlaying extends Song {
  isPlaying: boolean;
}

const Music: React.FC = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<CurrentlyPlaying | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      try {
        const response = await fetch('/api/spotify');
        if (!response.ok) {
          throw new Error('Failed to fetch currently playing song');
        }
        const data = await response.json();
        setCurrentlyPlaying(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentlyPlaying();
  }, []);

  return (
    <section>
      <h2 className="text-lg font-medium mb-2 flex items-center">
        <span className="mr-1">♫</span> top songs
      </h2>
      <p className="mb-4">Music that fuels my coding sessions and creative thinking</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {songs.map((song) => (
          <a key={song.title} href={song.url} target="_blank" rel="noopener noreferrer" className="no-underline">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-base">{song.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{song.artist}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      <h2 className="text-lg font-medium mt-8 mb-2 flex items-center">
        <span className="mr-1">🎧</span> now playing
      </h2>

      {loading && (
        <Card>
          <CardHeader>
            <Skeleton className="h-5 w-3/5" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-4/5" />
          </CardContent>
        </Card>
      )}

      {error && (
        <Card>
          <CardHeader>
            <CardTitle>Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-500">{error.message}</p>
          </CardContent>
        </Card>
      )}

      {!loading && !error && currentlyPlaying && currentlyPlaying.isPlaying && (
        <a href={currentlyPlaying.url} target="_blank" rel="noopener noreferrer" className="no-underline">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-base">{currentlyPlaying.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{currentlyPlaying.artist}</p>
            </CardContent>
          </Card>
        </a>
      )}

      {!loading && !error && currentlyPlaying && !currentlyPlaying.isPlaying && (
        <Card>
          <CardContent>
            <p className="text-zinc-500 dark:text-zinc-400 p-6">Not currently playing anything.</p>
          </CardContent>
        </Card>
      )}
    </section>
  );
};

export default Music;
