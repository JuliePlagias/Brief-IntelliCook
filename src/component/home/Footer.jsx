import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
      <Link to='/catalogue'>Catalogue</Link>
      <p>Conditions d'utilisation</p>
      <p>@Copyright Intellicook tous droits réservés</p>
    </div>
  )
}
