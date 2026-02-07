import { createContext, useContext, useState } from 'react';
import { THEMES } from '@/constants/themes';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEMES.classic);

  const toggleTheme = () => {
    const values = Object.values(THEMES);
    const index = values.findIndex((t) => t.id === theme.id);
    const next = (index + 1) % values.length;
    setTheme(values[next]);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }
  return ctx;
}
