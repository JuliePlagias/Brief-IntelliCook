import { Link } from 'react-router-dom'

export default function MenuBurger() {
  return (
    <>
      <div className='menuBurger'>
        <img
          className='logo'
          src='/assets/images/icons/logo.png'
          alt='Intelli Cook Logo'
        ></img>
        <ul className='list'>
          <li>
            <Link to='/'>Acceuil</Link>
          </li>
          <li>
            <Link to='/catalogue'>Catalogue</Link>
          </li>
          <li>
            <Link to='/favoris'>Favoris</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
