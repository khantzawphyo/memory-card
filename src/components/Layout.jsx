import { useTheme } from '@/contexts/ThemeContext';
import GameHeader from './GameHeader';
import GameFooter from './GameFooter';

function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-fixed bg-center transition-all duration-700 select-none"
      style={{ backgroundImage: `url(${theme.bgImage})` }}
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-black/25" />

      <div className="relative z-10 grid min-h-screen grid-rows-[auto_1fr_auto]">
        <GameHeader />

        <main className="flex flex-col overflow-hidden">{children}</main>

        <GameFooter />
      </div>
    </div>
  );
}

export default Layout;
