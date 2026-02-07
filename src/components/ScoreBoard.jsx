// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { useGame } from '@/contexts/GameContext';

export default function ScoreBoard() {
  const { score, bestScore } = useGame();

  return (
    <div className="rounded-full border-2 border-yellow-950 bg-linear-to-b from-yellow-400 to-yellow-600 p-1 shadow-[0_4px_0_0_#78350f]">
      <div className="border-inner flex items-center gap-3 rounded-full bg-yellow-950 px-4 py-1.5">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold tracking-tight text-yellow-500 uppercase font-stretch-condensed">
            Score:
          </span>
          <motion.span
            key={score}
            initial={{ scale: 1.3, y: -2 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 15 }}
            className="text-stroke-2 text-stroke-yellow-950 text-2xl leading-none font-bold text-yellow-400"
          >
            {score}
          </motion.span>
        </div>

        <div className="h-4 w-0.5 rounded-full bg-white/10" />

        <div className="flex items-center gap-2">
          <span className="text-sm font-bold tracking-tight text-yellow-500 uppercase font-stretch-condensed">
            Best:
          </span>
          <motion.span
            key={bestScore}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            className="text-lg leading-none font-bold text-yellow-400"
          >
            {bestScore}
          </motion.span>
        </div>
      </div>
    </div>
  );
}
