import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type Theme = 'dark' | 'light';

const initialMode = getThemeFromLocalStorage();
if (initialMode === 'dark') document.documentElement.classList.add(initialMode);

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(initialMode);
  function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      setTheme('light');
      return;
    }
    localStorage.setItem('theme', 'dark');
    setTheme('dark');
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);

function getPreferredMode(): Theme {
  const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

function getThemeFromLocalStorage() {
  let item = localStorage.getItem('theme');
  if (!item || (item !== 'dark' && item !== 'light')) {
    const preferredMode = getPreferredMode();
    localStorage.setItem('theme', preferredMode);
    item = preferredMode;
  }

  return item as Theme;
}

export default ThemeContextProvider;
