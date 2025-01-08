import { useEffect, useState } from 'react'
import MenuBurger from '../navbar/MenuBurger'
import Burger from './Burger'

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
        <img
          className='logo'
          src={`${path}logo.png`}
          alt='Intelli Cook Logo'
        ></img>
      </div>
      <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
      <MenuBurger isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
