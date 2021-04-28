import React, { createContext, useCallback, useState, useContext } from 'react';
import { ThemeProvider as Theme } from 'styled-components';
import chinesePalette from '../themes/chinesePalette';
import britishPalette from '../themes/britishPalette';

interface ThemeContext {
  changeTheme?(): void;
  theme: string;
  themeSwitchValue: boolean;
}

interface ThemeProviderProps {
  children?: React.ReactNode;
}

const ThemeContext = createContext<ThemeContext>({} as ThemeContext);
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('britishPalette');
  const themeSwitchValue = theme === 'britishPalette';

  const changeTheme = useCallback(() => {
    setTheme(previousState =>
      (previousState === 'britishPalette' ? 'chinesePalette' : 'britishPalette')
    );
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        changeTheme,
        theme,
        themeSwitchValue,
      }}
    >
      <Theme
        theme={theme === 'britishPalette' ? britishPalette : chinesePalette}
      >
        {children}
      </Theme>
    </ThemeContext.Provider>
  );
};
function useThemeContext(): ThemeContext {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext should be used with an ThemeProvider');
  }
  return context;
}

export { useThemeContext, ThemeProvider, ThemeContext };
