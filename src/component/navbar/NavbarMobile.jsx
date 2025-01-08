import { useEffect, useState } from 'react'
import MenuBurger from '../navbar/MenuBurger'
import Burger from './Burger'
import { Link } from 'react-router-dom'

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false)

  const lockScroll = () => {
    if (isOpen) {
      document.body.classList.add('lockScroll')
    } else {
      document.body.classList.remove('lockScroll')
    }
  }

  useEffect(() => {
    lockScroll()
  }, [isOpen])

  const path = '/assets/images/icons/'
  return (
    <>
      <div className='navBarMobile'>
        <Link to={'/'}>
          <img
            className='logo'
            src={`${path}logo.png`}
            alt='Intelli Cook Logo'
          />
        </Link>
      </div>
      <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
      <MenuBurger isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
