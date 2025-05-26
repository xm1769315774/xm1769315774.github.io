declare module 'docusaurus-player' {
  import { ComponentType } from 'react';

  export interface Song {
    name: string;
    artist: string;
    url: string;
    cover: string;
    lrc?: string;
  }

  export interface MusicPlayerProps {
    songs: Song[];
    autoplay?: boolean;
    loop?: 'all' | 'one' | 'none';
    order?: 'list' | 'random';
    preload?: 'auto' | 'metadata' | 'none';
    theme?: string;
    mini?: boolean;
    fixed?: boolean;
    listFolded?: boolean;
    listMaxHeight?: string;
    currentSong?: Song | null;
    onSongChange?: (song: Song) => void;
    onPlayStateChange?: (isPlaying: boolean) => void;
    volume?: number;
    onVolumeChange?: (volume: number) => void;
  }

  export interface MusicProviderProps {
    songs: Song[];
    children: React.ReactNode;
  }

  export const MusicPlayer: ComponentType<MusicPlayerProps>;
  export const MusicProvider: ComponentType<MusicProviderProps>;
} 