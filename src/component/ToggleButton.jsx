import { useContext } from 'react'
import { DarkModeContext } from './DarkModeProvider'

export default function ToggleButton() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  return (
    <button
      className={`toggle ${darkMode ? 'darkMode' : ''}`}
      onClick={toggleDarkMode}
    >
      <svg
        className={`sun`}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <g
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
        >
          <circle cx='12' cy='12' r='4' />
          <path d='M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41' />
        </g>
      </svg>
      <svg
        className={`moon`}
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 16 16'
      >
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M8 13.5a5.5 5.5 0 0 0 2.263-10.514a5.5 5.5 0 0 1-7.278 7.278A5.5 5.5 0 0 0 8 13.5M1.045 8.795a7.001 7.001 0 1 0 7.75-7.75l-.028-.003A7 7 0 0 0 8 1c-.527 0-.59.842-.185 1.18a4 4 0 0 1 .342.322A4 4 0 1 1 2.18 7.814C1.842 7.41 1 7.474 1 8a7 7 0 0 0 .045.794'
          clipRule='evenodd'
        />
      </svg>
    </button>
  )
}
