import { request } from './request';

export interface Song {
  name?: string;
  title?: string;
  artist?: string;
  author?: string;
  url?: string;
  cover?: string;
  lrc?: string;
  pic?: string;
}

export interface MusicApi {
  searchSongs: (keyword: string, platform: string) => Promise<Song[]>;
  getPlaylist: (id: string, platform: string) => Promise<Song[]>;
  validateAudio: (url: string) => Promise<boolean>;
}

class MusicService implements MusicApi {
  private baseUrl = 'https://api.i-meto.com/meting/api';

  async searchSongs(keyword: string, platform: string): Promise<Song[]> {
    return await request<Song[]>(
      `${this.baseUrl}?server=${platform}&type=search&id=${encodeURIComponent(keyword)}`
    );
  }

  async getPlaylist(id: string, platform: string): Promise<Song[]> {
    return await request<Song[]>(
      `${this.baseUrl}?server=${platform}&type=playlist&id=${id}`
    );
  }

  async validateAudio(url: string): Promise<boolean> {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.status >= 200 && response.status < 300;
    } catch {
      return false;
    }
  }
}

export const musicService = new MusicService();