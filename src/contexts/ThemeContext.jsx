  // import React, { createContext, useContext, useState, useEffect } from 'react';

  // interface ThemeContextType {
  //   isDark: boolean;
  //   toggleTheme: () => void;
  // }

  // const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

  // export const useTheme = () => {
  //   const context = useContext(ThemeContext);
  //   if (context === undefined) {
  //     throw new Error('useTheme must be used within a ThemeProvider');
  //   }
  //   return context;
  // };

  // export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  //   const [isDark, setIsDark] = useState(false);

  //   useEffect(() => {
  //     const stored = localStorage.getItem('freshstart_theme');
  //     if (stored) {
  //       setIsDark(stored === 'dark');
  //     }
  //   }, []);

  //   useEffect(() => {
  //     if (isDark) {
  //       document.documentElement.classList.add('dark');
  //     } else {
  //       document.documentElement.classList.remove('dark');
  //     }
  //     localStorage.setItem('freshstart_theme', isDark ? 'dark' : 'light');
  //   }, [isDark]);

  //   const toggleTheme = () => {
  //     setIsDark(!isDark);
  //   };

  //   return (
  //     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
  //       {children}
  //     </ThemeContext.Provider>
  //   );
  // };


//   import React, { createContext, useContext, useState, useEffect } from 'react';

// interface ThemeContextType {
//   isDark: boolean;
//   toggleTheme: () => void;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };

// export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isDark, setIsDark] = useState(() => {
//     const stored = localStorage.getItem('freshstart_theme');
//     return stored === 'dark';
//   });

//   useEffect(() => {
//     const root = document.documentElement;
//     if (isDark) {
//       root.classList.add('dark');
//     } else {
//       root.classList.remove('dark');
//     }
//     localStorage.setItem('freshstart_theme', isDark ? 'dark' : 'light');
//   }, [isDark]);

//   const toggleTheme = () => {
//     setIsDark(prev => !prev);
//   };

//   return (
//     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };




import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('freshstart_theme');
    return stored === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('freshstart_theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
// export default ThemeProvider;