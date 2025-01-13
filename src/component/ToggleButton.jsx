import { useContext } from 'react'
import { DarkModeContext } from './DarkModeProvider'

export default function ToggleButton() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  return (
    <button className='toggle' onClick={toggleDarkMode}>
      Toggle
    </button>
  )
}
