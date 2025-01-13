import NavbarMobile from './NavbarMobile'
import NavbarDesktop from './NavbarDesktop'
import ToggleButton from '../ToggleButton'

export default function NavBar() {
  return (
    <>
      <ToggleButton />
      <NavbarDesktop />
      <NavbarMobile />
    </>
  )
}
