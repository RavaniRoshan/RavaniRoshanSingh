import React, { useEffect, useRef, useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

interface SpotifyEmbedProps {
  src: string;
  title: string;
}

const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({ src, title }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && ref.current) {
      // Clear any existing content (like the skeleton)
      ref.current.innerHTML = '';

      const iframe = document.createElement('iframe');
      iframe.src = src;
      iframe.width = '100%';
      iframe.height = '80';
      iframe.frameBorder = '0';
      iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
      iframe.loading = 'lazy';
      iframe.title = title;

      ref.current.appendChild(iframe);
    }
  }, [isMounted, src, title]);

  return (
    <div ref={ref} className="music-item p-0 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-[80px]">
      <Skeleton className="w-full h-full" />
    </div>
  );
};

export default SpotifyEmbed;
