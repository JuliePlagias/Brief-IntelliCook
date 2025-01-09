import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer({ className }) {
  return (
    <div className={`footer ${className}`}>
      <Link to='/catalogue'><p>Catalogue</p></Link>
      <Link to="/conditions"><p>Conditions d'utilisation</p></Link>
      <p>@Copyright Intellicook tous droits réservés</p>
    </div>
  )
}
