import React, { useContext, useState } from 'react'
import SearchBar from '../component/SearchBar'
import IngredientsFiltered from '../component/IngredientsFiltered'
import Recipes from '../component/Recipes'
import { useIngredientsFiltered } from '../utils/hooks/useIngredientsFiltered'
import Filters from '../component/Filters'
import recettes from '../data/recipes.json'
import { DarkModeContext } from '../component/DarkModeProvider'

const Catalogue = () => {
  const [search, setSearch] = useState('')
  const [searchType, setSearchType] = useState('name')
  const [numberRecipes, setNumberRecipes] = useState(12)
  const filterIng = useIngredientsFiltered()
  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className='catalogue'>
      <SearchBar
        search={search}
        setSearch={setSearch}
        searchType={searchType}
        filterIng={filterIng}
      />
      {/* Filtres */}
      <Filters searchType={searchType} setSearchType={setSearchType} />
      {/* Fin filtres */}
      <h1 className={`catalogue__title`}>Catalogue</h1>
      {/* Faire apparaître les ingrédients filtrés s'il y en a */}
      {filterIng.filteredIngredients.length > 0 &&
        searchType === 'ingredients' && (
          <IngredientsFiltered filterIng={filterIng} />
        )}
      {/* FIN ingrédients filtrés */}
      <Recipes
        search={search}
        searchType={searchType}
        filterIng={filterIng}
        numberRecipes={numberRecipes}
      />
      {numberRecipes < recettes.recipes.length && (
        <button
          className={`catalogue__button ${darkMode && 'buttonDark'}`}
          onClick={() => setNumberRecipes(numberRecipes + 12)}
        >
          Afficher + de recettes
        </button>
      )}
    </div>
  )
}

export default Catalogue
