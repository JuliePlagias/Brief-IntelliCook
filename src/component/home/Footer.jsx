import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../DarkModeProvider'

export default function Footer() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={`footer ${darkMode && 'footerDark'}`}>
      <Link to='/catalogue'>
        <p>Catalogue</p>
      </Link>
      <Link to='/conditions'>
        <p>Conditions d'utilisation</p>
      </Link>
      <p>@Copyright Intellicook tous droits réservés</p>
    </div>
  )
}
