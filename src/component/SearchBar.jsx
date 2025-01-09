import React from 'react'
import IngredientsDropdown from './IngredientsDropdown'

/**
 * Affiche l'input qui gère la recherche des recettes ou des ingrédients
 * Affiche la dropdown des ingrédients si une recherche par ingrédient est active
 * @returns {JSX.Element} Toutes les recettes sont affichées si rien n'est entré dans l'input.
 */
const SearchBar = ({ search, setSearch, typeOfSearch }) => {

  return (
    <div id='search-bar'>
      <input
        type='text'
        placeholder='Ratatouille, poireaux, ...'
        onChange={e => setSearch(e.target.value)}
        className='searchRecipe'
      />
      {typeOfSearch === "ingredients" && <IngredientsDropdown search={search} />}
      <img
        id='loupe'
        src='./assets/images/icons/loupe recherche.png'
        alt='Recherche'
      />
    </div>
  )
}

export default SearchBar
