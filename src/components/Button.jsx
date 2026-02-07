// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { useAudio } from '@/contexts/AudioContext';

const VARIANTS = {
  primary:
    'bg-linear-to-b from-yellow-400 via-yellow-500 to-yellow-600 text-yellow-950 [--shadow:#d97706]',
  success:
    'bg-linear-to-b from-green-400 via-green-500 to-green-600 text-green-950 [--shadow:#15803d]',
  danger: 'bg-linear-to-b from-red-400 via-red-500 to-red-600 text-red-950 [--shadow:#b91c1c]',
};

const SHAPES = {
  circle: 'rounded-full aspect-square',
  rect: 'rounded-2xl',
};

function Button({
  children,
  onClick,
  variant = 'primary',
  shape = 'circle',
  size = 'md',
  className = '',
  ...props
}) {
  const { playClick } = useAudio();

  const sizeMap = {
    sm:
      shape === 'circle'
        ? 'size-8 shadow-[0_3px_0_0_var(--shadow)]'
        : 'px-4 py-2 text-sm shadow-[0_4px_0_0_var(--shadow)]',
    md:
      shape === 'circle'
        ? 'size-12 shadow-[0_4px_0_0_var(--shadow)]'
        : 'px-8 py-4 text-md shadow-[0_6px_0_0_var(--shadow)]',
    lg:
      shape === 'circle'
        ? 'size-16 shadow-[0_6px_0_0_var(--shadow)]'
        : 'px-10 py-5 text-xl shadow-[0_8px_0_0_var(--shadow)]',
  };

  const handleClick = (e) => {
    playClick();
    if (onClick) onClick(e);
  };

  const baseStyles =
    'relative cursor-pointer flex items-center justify-center font-black uppercase select-none';

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{
        y: 4,
        boxShadow: '0 0px 0 0 var(--shadow)',
        filter: 'brightness(0.95)',
      }}
      transition={{
        type: 'spring',
        stiffness: 800,
        damping: 35,
      }}
      className={`${baseStyles} ${VARIANTS[variant]} ${SHAPES[shape]} ${sizeMap[size]} ${className}`}
      {...props}
    >
      {shape === 'rect' && (
        <div className="pointer-events-none absolute inset-1.5 rounded-xl bg-white/20 opacity-30"></div>
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </motion.button>
  );
}

export default Button;
