import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from '@/contexts/ThemeContext.jsx';
import { AudioProvider } from '@/contexts/AudioContext.jsx';
import { GameProvider } from '@/contexts/GameContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AudioProvider>
        <GameProvider>
          <App />
        </GameProvider>
      </AudioProvider>
    </ThemeProvider>
  </StrictMode>
);
