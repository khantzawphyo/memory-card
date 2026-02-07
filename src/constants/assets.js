import bgClassic from '@/assets/images/bg-classic.avif';
import bgSpooky from '@/assets/images/bg-spooky.avif';
import bgOriental from '@/assets/images/bg-oriental.avif';
import bgEgyptian from '@/assets/images/bg-egyptian.avif';

import musicClassic from '@/assets/sounds/classic.mp3';
import musicSpooky from '@/assets/sounds/spooky.mp3';
import musicOriental from '@/assets/sounds/oriental.mp3';
import musicEgyptian from '@/assets/sounds/egyptian.mp3';

import clickSfx from '@/assets/sounds/click.mp3';
import flickSfx from '@/assets/sounds/flick.mp3';
import winSfx from '@/assets/sounds/win.mp3';
import loseSfx from '@/assets/sounds/lose.mp3';

export const SOUNDS = {
  click: clickSfx,
  flick: flickSfx,
  win: winSfx,
  lose: loseSfx,
};

export const BG_IMAGES = {
  classic: bgClassic,
  spooky: bgSpooky,
  oriental: bgOriental,
  egyptian: bgEgyptian,
};

export const MUSIC = {
  default: musicClassic,
  classic: musicClassic,
  spooky: musicSpooky,
  oriental: musicOriental,
  egyptian: musicEgyptian,
};
