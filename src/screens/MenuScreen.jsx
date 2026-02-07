// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import Button from '@/components/Button';
import LogoImage from '@/assets/images/logo.svg';
import { useGame } from '@/contexts/GameContext';

const DIFFICULTIES = [
  { name: 'Easy', cards: 4, variant: 'success' },
  { name: 'Medium', cards: 5, variant: 'primary' },
  { name: 'Hard', cards: 6, variant: 'danger' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120 },
  },
};

function MenuScreen() {
  const { startGame } = useGame();

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex w-full flex-1 flex-col items-center justify-center gap-4 px-4 py-2"
    >
      <motion.div variants={itemVariants} className="flex items-center justify-center">
        <img
          src={LogoImage}
          alt="The Simpsons Logo"
          draggable={false}
          className="w-42 object-contain"
        />
      </motion.div>

      <div className="flex flex-col items-center gap-6">
        <motion.h1
          variants={itemVariants}
          className="text-stroke-24 text-stroke-yellow-950 mb-2 text-center text-8xl font-bold tracking-tight text-yellow-400 uppercase drop-shadow-[-2px_4px_0px_#432004]"
        >
          Memory Game
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="relative rounded-2xl border-4 border-yellow-800 bg-yellow-100 px-10 py-4 shadow-xl"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="rounded-md bg-red-600 px-3 py-1">
              <span className="text-sm font-bold text-white">INSTRUCTION</span>
            </div>
          </div>

          <p className="text-center text-base font-bold tracking-wider text-yellow-950 font-stretch-condensed sm:text-lg">
            Click every card, but <span className="text-red-600">never the same one twice!</span>
          </p>
        </motion.div>
      </div>

      <div className="mt-2 flex flex-wrap justify-center gap-3">
        {DIFFICULTIES.map((level) => (
          <motion.div
            key={level.name}
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              shape="rect"
              size="lg"
              variant={level.variant}
              onClick={() => startGame(level.cards)}
            >
              {level.name}
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default MenuScreen;
