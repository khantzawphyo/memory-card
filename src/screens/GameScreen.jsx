// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import Card from '@/components/Card';
import Modal from '@/components/Modal';
import { shuffleArray } from '@/utils/shuffle';
import { useAudio } from '@/contexts/AudioContext';
import { useGame } from '@/contexts/GameContext';

const GAME_STATUS = { PLAYING: 'playing', WON: 'won', LOST: 'lost' };

function GameScreen() {
  const { gameCards, updateScore, exitGame } = useGame();
  const { playFlick, playWin, playLose } = useAudio();

  const [cards, setCards] = useState([]);
  const [clickedIds, setClickedIds] = useState([]);
  const [status, setStatus] = useState(GAME_STATUS.PLAYING);
  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCards(gameCards);
    setClickedIds([]);
    setStatus(GAME_STATUS.PLAYING);
  }, [gameCards]);

  const handleCardClick = (id) => {
    if (status !== GAME_STATUS.PLAYING || isShuffling) return;

    playFlick();

    if (clickedIds.includes(id)) {
      setStatus(GAME_STATUS.LOST);
      playLose();
      return;
    }

    const nextClicked = [...clickedIds, id];
    setClickedIds(nextClicked);
    updateScore(nextClicked.length);

    if (nextClicked.length === gameCards.length) {
      setStatus(GAME_STATUS.WON);
      playWin();
      return;
    }

    setIsShuffling(true);
    setTimeout(() => {
      setCards((prev) => shuffleArray([...prev]));
      setIsShuffling(false);
    }, 600);
  };

  const handleRestart = () => {
    setCards(shuffleArray([...gameCards]));
    setClickedIds([]);
    setStatus(GAME_STATUS.PLAYING);
    updateScore(0);
  };

  return (
    <div className="relative flex w-full flex-1 flex-col items-center justify-center px-6 py-8">
      <motion.div
        layout
        className="grid w-fit justify-center gap-4 sm:gap-6 lg:gap-8"
        style={{
          gridTemplateRows: '1fr',
          gridTemplateColumns: `repeat(${cards.length}, minmax(150px, 250px))`,
        }}
      >
        <AnimatePresence mode="popLayout">
          {cards.map((char) => (
            <motion.div
              key={char.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <Card char={char} onClick={() => handleCardClick(char.id)} isFaceUp={!isShuffling} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {isShuffling && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          >
            <motion.p
              animate={{ scale: [1, 1.1, 1], rotate: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 0.4 }}
              className="text-stroke-8 text-stroke-yellow-950 text-5xl font-bold tracking-tighter text-yellow-400 uppercase italic drop-shadow-2xl sm:text-9xl"
            >
              Shuffling!
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <Modal
        isOpen={status !== GAME_STATUS.PLAYING}
        title={status === GAME_STATUS.WON ? 'Woo-hoo!' : "D'oh!"}
        message={
          status === GAME_STATUS.WON
            ? 'Perfect memory! You cleared the board.'
            : 'You already clicked that one!'
        }
        onRestart={handleRestart}
        onExit={exitGame}
      />
    </div>
  );
}

export default GameScreen;
