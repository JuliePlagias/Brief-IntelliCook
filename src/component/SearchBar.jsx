import React from 'react'
import IngredientsDropdown from './IngredientsDropdown'

/**
 * Affiche l'input qui gère la recherche des recettes ou des ingrédients
 * @returns {JSX.Element} Toutes les recettes sont affichées si rien n'est entré dans l'input.
 */
const SearchBar = ({ search, setSearch, searchType, filterIng }) => {

  return (
    <div id='search-bar'>
      <input
        type='text'
        placeholder='Ratatouille, poireaux, ...'
        value={search}
        onChange={e => setSearch(e.target.value)}
        className='searchRecipe'
      />
      {searchType === "ingredients" && <IngredientsDropdown search={search} setSearch={setSearch} filterIng={filterIng} />}
      <img
        id='loupe'
        src='./assets/images/icons/loupe recherche.png'
        alt='Recherche'
      />
    </div>
  )
}

export default SearchBar
