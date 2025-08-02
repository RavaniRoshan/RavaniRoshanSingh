import type { VercelRequest, VercelResponse } from '@vercel/node';
import { songs } from '../src/data/songs';

export default function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  const randomSong = songs[Math.floor(Math.random() * songs.length)];

  res.status(200).json({
    isPlaying: true,
    ...randomSong,
  });
}
