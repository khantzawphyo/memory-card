import { FaChevronLeft } from 'react-icons/fa';
import Button from '@/components/Button';
import ScoreBoard from '@/components/ScoreBoard';
import { useGame } from '@/contexts/GameContext';

export default function GameHeader() {
  const { screen, exitGame } = useGame();

  return (
    <header className="relative z-50 flex shrink-0 items-center justify-between px-6 pt-4">
      <div
        className={`flex items-center gap-3 transition-all duration-500 ${
          screen === 'game'
            ? 'translate-x-0 opacity-100'
            : 'pointer-events-none -translate-x-10 opacity-0'
        }`}
      >
        <Button size="sm" shape="circle" aria-label="Back to menu" onClick={exitGame}>
          <FaChevronLeft />
        </Button>

        <h1 className="text-stroke-6 text-stroke-yellow-950 text-2xl font-bold text-yellow-400 uppercase drop-shadow-md">
          Memory Game
        </h1>
      </div>

      <ScoreBoard />
    </header>
  );
}
