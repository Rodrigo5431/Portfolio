import { createContext, useState, useContext, useEffect } from "react";

export const DarkContext = createContext();

export default function DarkProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode === "true"; 
  });


  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#160529" : "grey"; 
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newDarkMode = !prev;
      localStorage.setItem("darkMode", newDarkMode); 
      return newDarkMode;
    });
  };

  return (
    <DarkContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkContext);
