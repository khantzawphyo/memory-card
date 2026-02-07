import { BG_IMAGES, MUSIC } from '@/constants/assets';
import { FaSkull, FaStar, FaYinYang } from 'react-icons/fa';
import { GiAnkh } from 'react-icons/gi';

export const THEMES = {
  classic: {
    id: 'classic',
    name: 'Classic',
    bgImage: BG_IMAGES.classic,
    music: MUSIC.classic,
    cardVariant: 'classic',
  },
  spooky: {
    id: 'spooky',
    name: 'Spooky',
    bgImage: BG_IMAGES.spooky,
    music: MUSIC.spooky,
    cardVariant: 'spooky',
  },
  oriental: {
    id: 'oriental',
    name: 'Oriental',
    bgImage: BG_IMAGES.oriental,
    music: MUSIC.oriental,
    cardVariant: 'oriental',
  },
  egyptian: {
    id: 'egyptian',
    name: 'Pharaoh’s Curse',
    bgImage: BG_IMAGES.egyptian,
    music: MUSIC.egyptian,
    cardVariant: 'egyptian',
  },
};

export const CARD_THEMES = {
  classic: {
    border: 'border-white',
    hoverBorder: 'hover:border-yellow-400',
    innerBg: 'bg-sky-400',
    starBg: 'bg-yellow-400',
    starIcon: 'text-yellow-950',
    backBg: 'bg-white',
    textColor: 'text-neutral-800',
    icon: FaStar,
  },
  spooky: {
    border: 'border-purple-950',
    hoverBorder: 'hover:border-green-400',
    innerBg: 'bg-purple-800',
    starBg: 'bg-green-500',
    starIcon: 'text-purple-950',
    backBg: 'bg-purple-900',
    textColor: 'text-purple-100',
    icon: FaSkull,
  },
  oriental: {
    border: 'border-yellow-600',
    hoverBorder: 'hover:border-red-400',
    innerBg: 'bg-red-700',
    starBg: 'bg-yellow-500',
    starIcon: 'text-red-900',
    backBg: 'bg-red-800',
    textColor: 'text-yellow-100',
    icon: FaYinYang,
  },
  egyptian: {
    border: 'border-yellow-300',
    hoverBorder: 'hover:border-blue-800',
    innerBg: 'bg-yellow-500',
    starBg: 'bg-blue-700',
    starIcon: 'text-yellow-200',
    backBg: 'bg-yellow-600',
    textColor: 'text-yellow-950',
    icon: GiAnkh,
  },
};