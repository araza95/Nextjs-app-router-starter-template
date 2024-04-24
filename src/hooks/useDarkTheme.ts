import { useState, useEffect } from 'react';

// Custom hook to manage dark theme state
export const useDarkTheme = () => {
  // State to track whether dark theme is enabled
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  // Key for storing dark theme preference in local storage
  const DARK_THEME_KEY = 'darkTheme';

  // Function to toggle dark theme
  const toggleDarkTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  // Effect to load dark theme preference from local storage
  useEffect(() => {
    const storedTheme = localStorage.getItem(DARK_THEME_KEY);
    if (storedTheme) {
      setIsDarkTheme(storedTheme === 'true');
    }
  }, []);

  // Effect to update local storage when dark theme changes
  useEffect(() => {
    localStorage.setItem(DARK_THEME_KEY, String(isDarkTheme));
    // You can also add logic here to apply the dark theme to the entire app
    // e.g., by adding or removing a class to the body element
  }, [isDarkTheme]);

  return {
    isDarkTheme,
    toggleDarkTheme,
  };
};
