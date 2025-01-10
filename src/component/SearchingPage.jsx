import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Recipes from './Recipes'

/**
 * Affiche l'input de recherche, le titre de la page et les recettes recherchées.
 * @param {string} titlePage
 * @returns
 */
const SearchingPage = ({ titlePage }) => {
  const [search, setSearch] = useState('')
  const [searchType, setSearchType] = useState('name')

  const style =
    titlePage === 'Mes recettes favorites' ? 'searchingPage__favorites' : ''

  return (
    <div className='searchingPage'>
      <SearchBar search={search} setSearch={setSearch} searchType={searchType} />
      {/* Filtres */}
      <div className="searchingPage__filters">
        <span>Filtrer par : </span>
        <input type="button" value="Nom de recette" onClick={() => setSearchType('name')} className={`filterButton ${searchType === 'name' ? 'filterButton--active' : ''}`} />

        <input type="button" value="Ingrédients" onClick={() => setSearchType('ingredients')}  className={`filterButton ${searchType === 'ingredients' ? 'filterButton--active' : ''}`} />
      </div>
      {/* Fin filtres */}
      <h1 className={`searchingPage__title ${style}`}>{titlePage}</h1>
      {/* <Recipes search={search} searchType={searchType} /> */}
    </div>
  )
}

export default SearchingPage
