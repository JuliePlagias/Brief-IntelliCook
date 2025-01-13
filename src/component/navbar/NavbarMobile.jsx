import { useEffect, useState } from 'react'
import MenuBurger from '../navbar/MenuBurger'
import Burger from './Burger'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DarkModeContext } from '../DarkModeProvider'
import ToggleButton from '../ToggleButton'

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false)
  const { darkMode } = useContext(DarkModeContext)

  useEffect(() => {
    const lockScroll = () => {
      if (isOpen) {
        document.body.classList.add('lockScroll')
      } else {
        document.body.classList.remove('lockScroll')
      }
    }
    lockScroll()
  }, [isOpen])

  const path = '/assets/images/icons/'
  return (
    <>
      <div className={`navBarMobile ${darkMode && 'navBarDark'}`}>
        <Link to={'/'}>
          <img
            className='logo'
            src={`${path}logo.png`}
            alt='Intelli Cook Logo'
          />
        </Link>
        <ToggleButton />
      </div>
      <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
      <MenuBurger isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
