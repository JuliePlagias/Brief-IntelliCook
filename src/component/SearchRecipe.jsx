import React, { useState } from 'react'
import Recipes from './Recipes'

/**
 * Retourne toutes les recettes qui correspondent à la recherche.
 * @returns {JSX.Element} Toutes les recettes sont affichées si rien n'est entré dans l'input.
 */
const SearchRecipe = () => {
  const [search, setSearch] = useState('')

  return (
    <div>
      <input
        type='text'
        placeholder='Ratatouille, poireaux, ...'
        onChange={e => setSearch(e.target.value)}
        className='searchRecipe'
      />

      <img
        id='loupe'
        src='./assets/images/icons/loupe recherche.png'
        alt='Recherche'
      />

      <Recipes search={search} />
    </div>
  )
}

export default SearchRecipe
