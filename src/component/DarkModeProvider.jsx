import { createContext, useState } from 'react'

export const DarkModeContext = createContext()

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    console.log(darkMode)
    setDarkMode(!darkMode)
  }
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}
