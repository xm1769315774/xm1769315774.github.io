import React, { createContext, useContext, useState, useRef } from 'react';
import { MusicProvider } from 'docusaurus-player';
import type { Song } from 'docusaurus-player';
import { defaultSongs } from '../components/MusicPlayer/data';

interface MusicContextType {
  songs: Song[];
  setSongs: (songs: Song[]) => void;
  currentTime: number;
  setCurrentTime: (time: number) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  currentSong: Song | null;
  setCurrentSong: (song: Song | null) => void;
  audioRef: React.RefObject<HTMLAudioElement>;
}


const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};

export const MusicProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [songs, setSongs] = useState<Song[]>(defaultSongs);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <MusicContext.Provider value={{
      songs,
      setSongs,
      currentTime,
      setCurrentTime,
      isPlaying,
      setIsPlaying,
      currentSong,
      setCurrentSong,
      audioRef
    }}>
      <MusicProvider songs={songs} autoPlay={true}>
        {children}
      </MusicProvider>
    </MusicContext.Provider>
  );
}; 