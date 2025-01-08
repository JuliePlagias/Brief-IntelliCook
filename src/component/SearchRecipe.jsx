import React from 'react'

/**
 * Retourne toutes les recettes qui correspondent à la recherche.
 * @returns {JSX.Element} Toutes les recettes sont affichées si rien n'est entré dans l'input.
 */
const SearchRecipe = ({ setSearch }) => {
  return (
    <div id='search-bar'>
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
    </div>
  )
}

export default SearchRecipe
