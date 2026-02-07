import { useState, useEffect, createContext, useContext } from 'react';
import { MUSIC, SOUNDS } from '@/constants/assets';
import { useTheme } from '@/contexts/ThemeContext';
import useSound from 'use-sound';

const AudioContext = createContext(null);

export function AudioProvider({ children }) {
  const { theme } = useTheme();
  const [isMusicOn, setMusicOn] = useState(false);
  const [isSoundOn, setSoundOn] = useState(false);

  const [playClick] = useSound(SOUNDS.click, {
    volume: 0.5,
    // soundEnabled: isSoundOn,
    interrupt: true,
  });
  const [playFlick] = useSound(SOUNDS.flick, {
    volume: 0.5,
    soundEnabled: isSoundOn,
    interrupt: true,
  });
  const [playWin] = useSound(SOUNDS.win, {
    volume: 0.5,
    soundEnabled: isSoundOn,
  });
  const [playLose] = useSound(SOUNDS.lose, {
    volume: 0.5,
    soundEnabled: isSoundOn,
  });

  const currentSoundTrack = MUSIC[theme?.id] || MUSIC.default;

  const [playMusic, { stop }] = useSound(currentSoundTrack, {
    volume: 0.05,
    soundEnabled: isMusicOn,
    loop: true,
  });

  useEffect(() => {
    if (isMusicOn) {
      playMusic();
    } else {
      stop();
    }

    return () => stop();
  }, [isMusicOn, currentSoundTrack, playMusic, stop]);

  const toggleMusic = () => setMusicOn((prev) => !prev);
  const toggleSound = () => setSoundOn((prev) => !prev);

  return (
    <AudioContext.Provider
      value={{
        isMusicOn,
        isSoundOn,
        toggleMusic,
        toggleSound,
        playClick,
        playFlick,
        playWin,
        playLose,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error('useAudio must be used inside AudioProvider');
  return ctx;
}
