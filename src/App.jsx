import { preload } from 'react-dom';
import Layout from '@/components/Layout';
import GameScreen from '@/screens/GameScreen';
import MenuScreen from '@/screens/MenuScreen';
import Loading from '@/components/Loading';
import MobileGuard from '@/components/MobileGuard';
import { useGame } from '@/contexts/GameContext';
import { BG_IMAGES } from '@/constants/assets';

function App() {
  const { screen, loading, error, exitGame } = useGame();

  Object.values(BG_IMAGES).forEach((image) => {
    preload(image, { as: 'image', fetchPriority: 'high' });
  });

  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center bg-yellow-400">
        <Loading />
      </div>
    );
  if (error)
    return (
      <div className="flex min-h-screen items-center justify-center bg-yellow-400 text-2xl font-bold text-red-500">
        {error}
      </div>
    );

  return (
    <>
      <MobileGuard />
      <Layout onExit={exitGame}>
        {screen === 'menu' && <MenuScreen />}
        {screen === 'game' && <GameScreen />}
      </Layout>
    </>
  );
}

export default App;
