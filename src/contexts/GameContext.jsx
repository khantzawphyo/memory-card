import { createContext, useContext, useState } from 'react';
import useSimpsons from '@/hooks/useSimpsons';
import useLocalStorage from '@/hooks/useLocalStorage';
import { shuffleArray } from '@/utils/shuffle';

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const { characters, loading, error } = useSimpsons();

  const [screen, setScreen] = useState('menu');
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useLocalStorage('bestScore', 0);
  const [gameCards, setGameCards] = useState([]);

  const startGame = (difficulty) => {
    const preparedCards = shuffleArray([...characters]).slice(0, difficulty);
    setGameCards(preparedCards);
    setScore(0);
    setScreen('game');
  };

  const exitGame = () => {
    setScreen('menu');
    setGameCards([]);
    setScore(0);
  };

  const updateScore = (newScore) => {
    setScore(newScore);
    if (newScore > bestScore) {
      setBestScore(newScore);
    }
  };

  return (
    <GameContext.Provider
      value={{
        screen,
        score,
        bestScore,
        gameCards,
        loading,
        error,
        startGame,
        exitGame,
        updateScore,
        setGameCards,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within GameProvider');
  return context;
};
