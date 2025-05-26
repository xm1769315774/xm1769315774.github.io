import React, { useState, useCallback, useEffect } from 'react';
import { musicService, type Song } from '@site/src/services/music';
import styles from './styles.module.css';
import { useMusic } from '@site/src/context/MusicContext';

const LocalMusicPlayer = () => {
  const {
    songs,
    setSongs,
    currentTime,
    setCurrentTime,
    isPlaying,
    setIsPlaying,
    currentSong,
    setCurrentSong,
    audioRef
  } = useMusic();

  const [playerState, setPlayerState] = useState({
    searchTerm: '',
    platform: 'netease',
    searchType: 'keyword',
    isSearching: false,
    error: '',
  });

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      audioRef.current.currentTime = currentTime;
    }
  }, [isPlaying, currentTime]);

  const handleSearch = useCallback(async () => {
    if (!playerState.searchTerm.trim()) {
      setPlayerState(prev => ({ ...prev, error: '请输入搜索内容' }));
      return;
    }
    setPlayerState(prev => ({ ...prev, isSearching: true, error: '' }));
    try {
      let newSongs: Song[] = [];
      if (playerState.searchType === 'playlist') {
        newSongs = await musicService.getPlaylist(playerState.searchTerm, playerState.platform);
      } else {
        newSongs = await musicService.searchSongs(playerState.searchTerm, playerState.platform);
      }
      if (newSongs.length === 0) {
        setPlayerState(prev => ({ ...prev, error: '未找到相关歌曲', isSearching: false }));
        return;
      }
      setSongs(newSongs);
      setPlayerState(prev => ({ ...prev, isSearching: false, error: '' }));
    } catch (error) {
      setPlayerState(prev => ({ ...prev, error: '搜索失败，请稍后重试', isSearching: false }));
    }
  }, [playerState.searchTerm, playerState.platform, playerState.searchType, setSongs]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  }, [handleSearch]);

  return (
    <div className={styles.musicPlayerContainer}>
      <div className={styles.searchSection}>
        <select
          className={styles.select}
          value={playerState.platform}
          onChange={(e) => setPlayerState(prev => ({ ...prev, platform: e.target.value }))}
        >
          <option value="netease">网易云音乐</option>
          <option value="tencent">QQ音乐</option>
          <option value="kugou">酷狗音乐</option>
        </select>
        <select
          className={styles.select}
          value={playerState.searchType}
          onChange={(e) => setPlayerState(prev => ({
            ...prev,
            searchType: e.target.value,
            searchTerm: e.target.value === 'playlist' ? '8976741686' : ''
          }))}
        >
          <option value="keyword">歌曲/歌手搜索</option>
          <option value="playlist">歌单ID搜索</option>
        </select>
        <input
          type="text"
          className={styles.input}
          value={playerState.searchTerm}
          onChange={(e) => setPlayerState(prev => ({ ...prev, searchTerm: e.target.value }))}
          onKeyPress={handleKeyPress}
          placeholder={playerState.searchType === 'playlist' ? '请输入歌单ID' : '请输入歌曲名称或歌手名称'}
        />
        <button
          className={styles.button}
          onClick={handleSearch}
          disabled={playerState.isSearching}
        >
          {playerState.isSearching ? '搜索中...' : '搜索'}
        </button>
      </div>
      {playerState.error && <div className={styles.errorMessage}>{playerState.error}</div>}
    </div>
  );
};

export default React.memo(LocalMusicPlayer);