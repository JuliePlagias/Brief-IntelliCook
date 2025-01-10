import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Recipes from './Recipes'
import { useIngredientsFiltered } from '../utils/hooks/useIngredientsFiltered';
import IngredientsFiltered from './IngredientsFiltered';

/**
 * Affiche l'input de recherche, le titre de la page et les recettes recherchées.
 * @param {string} titlePage
 * @returns
 */
const SearchingPage = ({ titlePage }) => {
  const [search, setSearch] = useState('')
  const [typeOfSearch, setTypeOfSearch] = useState('name')
  const filterIng = useIngredientsFiltered();

  const style =
    titlePage === 'Mes recettes favorites' ? 'searchingPage__favorites' : ''

  return (
    <div className='searchingPage'>
      <SearchBar search={search} setSearch={setSearch} typeOfSearch={typeOfSearch} filterIng={filterIng} />
      {/* Filtres */}
      <div className="searchingPage__filters">
        <span>Filtrer par : </span>
        <input type="button" value="Nom de recette" onClick={() => setSearchType('name')} className={`filterButton ${searchType === 'name' ? 'filterButton--active' : ''}`} />

        <input type="button" value="Ingrédients" onClick={() => setSearchType('ingredients')}  className={`filterButton ${searchType === 'ingredients' ? 'filterButton--active' : ''}`} />
      </div>
      {/* Fin filtres */}
      <h1 className={`searchingPage__title ${style}`}>{titlePage}</h1>
      {/* Faire apparaître les ingrédients filtrés s'il y en a */}
      {filterIng.filteredIngredients.length > 0 && <IngredientsFiltered filterIng={filterIng} />}
      {/* FIN ingrédients filtrés */}
      <Recipes search={search} typeOfSearch={typeOfSearch} />
    </div>
  )
}

export default SearchingPage
