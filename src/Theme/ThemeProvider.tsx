import React, { createContext, useState, useContext, ReactNode} from 'react';

type Theme = 'light-theme' | 'dark-theme';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [theme, setTheme] = useState<Theme>('light-theme'); 
  const toggleTheme = () => {
    const themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    console.log(themeLink.href)
      if (theme === 'dark-theme') {
          setTheme('light-theme');
          if (themeLink) {
            themeLink.href = "./src/Theme/light-theme.scss";
            console.log(themeLink.href)
          }
      } else {
          setTheme('dark-theme');
          if (themeLink) {
            themeLink.href = "./src/Theme/dark-theme.scss";
          }
      }
  };

console.log('theme',theme)

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
