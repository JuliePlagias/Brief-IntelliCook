import React, { useState } from 'react'
import SearchRecipe from './SearchRecipe'
import Recipes from './Recipes'

/**
 * Affiche l'input de recherche, le titre de la page et les recettes recherchées.
 * @param {string} titlePage
 * @returns
 */
const SearchingPage = ({ titlePage }) => {
  const [search, setSearch] = useState('')
  const [typeOfSearch, setTypeOfSearch] = useState('name')

  const style =
    titlePage === 'Mes recettes favorites' ? 'searchingPage__favorites' : ''

  return (
    <div className='searchingPage'>
      <SearchRecipe search={search} setSearch={setSearch} />
      {/* Filtres */}
      <div className="searchingPage__filters">
        <span>Filtrer par : </span>
        <input type="button" value="Nom de recette" onClick={() => setTypeOfSearch('name')} className={`filterButton ${typeOfSearch === 'name' ? 'filterButton--active' : ''}`} />

        <input type="button" value="Ingrédients" onClick={() => setTypeOfSearch('ingredients')}  className={`filterButton ${typeOfSearch === 'ingredients' ? 'filterButton--active' : ''}`} />
      </div>
      {/* Fin filtres */}
      <h1 className={`searchingPage__title ${style}`}>{titlePage}</h1>
      <Recipes search={search} typeOfSearch={typeOfSearch} />
    </div>
  )
}

export default SearchingPage
