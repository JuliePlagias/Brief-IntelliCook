import { Link } from 'react-router-dom'

/**
 * Menu avec les liens qui apparaît lorsqu'on clique sur l'icône burger
 * @param {boolean} isOpen
 * @param {function} setIsOpen
 * @returns
 */
export default function MenuBurger({ isOpen, setIsOpen }) {
  const handleBurgerMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className={`menuBurger ${isOpen ? 'appear' : 'disappear'}`}>
      <img
        className='logo'
        src='/assets/images/icons/logo.png'
        alt='Intelli Cook Logo'
      ></img>
      <ul className='list'>
        <li>
          <Link to='/' onClick={handleBurgerMenu}>
            Acceuil
          </Link>
        </li>
        <li>
          <Link to='/catalogue' onClick={handleBurgerMenu}>
            Catalogue
          </Link>
        </li>
        <li>
          <Link to='/favoris' onClick={handleBurgerMenu}>
            Favoris
          </Link>
        </li>
      </ul>
    </div>
  )
}
