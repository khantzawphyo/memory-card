// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import donutImage from '@/assets/images/donut.png';
import Button from '@/components/Button';
import Tooltip from '@/components/Tooltip';
import { useAudio } from '@/contexts/AudioContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useEffect, useState } from 'react';
import { MdMusicNote, MdMusicOff, MdPalette, MdVolumeOff, MdVolumeUp } from 'react-icons/md';

export default function GameFooter() {
  const { toggleTheme } = useTheme();
  const { isMusicOn, isSoundOn, toggleMusic, toggleSound } = useAudio();
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const pulseVariants = {
    flashing: {
      scale: [1, 1.05, 1],
      filter: [
        'brightness(1) drop-shadow(0 0 0px rgba(255,255,255,0))',
        'brightness(1.2) drop-shadow(0 0 12px rgba(255,255,255,0.8))',
        'brightness(1) drop-shadow(0 0 0px rgba(255,255,255,0))',
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    none: {
      scale: 1,
      filter: 'brightness(1) drop-shadow(0 0 0px rgba(255,255,255,0))',
    },
  };

  return (
    <footer className="flex shrink-0 items-end justify-between gap-6 px-6 pb-4">
      <Tooltip show={showTooltip} onClose={() => setShowTooltip(false)} />
      <motion.div
        variants={pulseVariants}
        animate={showTooltip ? 'flashing' : 'none'}
        className="flex items-center gap-3 rounded-full border-2 border-white/10 bg-white/5 p-2 pb-3 backdrop-blur-sm"
      >
        <Button
          shape="circle"
          aria-label="Toggle Sound"
          onClick={() => {
            toggleSound();
            setShowTooltip(false);
          }}
        >
          {isSoundOn ? <MdVolumeUp size={26} /> : <MdVolumeOff size={26} />}
        </Button>
        <Button
          shape="circle"
          aria-label="Toggle Music"
          onClick={() => {
            toggleMusic();
            setShowTooltip(false);
          }}
        >
          {isMusicOn ? <MdMusicNote size={26} /> : <MdMusicOff size={26} />}
        </Button>
        <Button
          shape="circle"
          aria-label="Toggle Theme"
          onClick={() => {
            toggleTheme();
            setShowTooltip(false);
          }}
        >
          <MdPalette size={26} />
        </Button>
      </motion.div>

      <div className="text-stroke-4 text-stroke-zinc-950 flex items-center gap-2 text-sm font-semibold text-white uppercase">
        <p>Built with</p>
        <img src={donutImage} alt="Donut" className="h-5 w-5 object-contain" />
        <p>
          by{' '}
          <a
            href="https://github.com/khantzawphyo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 decoration-wavy decoration-[1.1px] underline-offset-2 hover:underline"
          >
            Khant Zaw Phyo
          </a>
        </p>
      </div>
    </footer>
  );
}
