import { useState } from 'react'
import Bloc from '../component/home/Bloc'
import SearchBar from '../component/SearchBar'
import recettes from '../data/recipes.json'
import RecipeCard from '../component/RecipeCard'
import { useIngredientsFiltered } from '../utils/hooks/useIngredientsFiltered'
import Recipes from '../component/Recipes'
import Filters from '../component/Filters'
import IngredientsFiltered from '../component/IngredientsFiltered'
import FavoritesRecipes from '../component/FavoritesRecipes'

/**
 * Page d'accueil
 */
const Home = () => {
  const [search, setSearch] = useState('')
  const [searchType, setSearchType] = useState('name')
  const filterIng = useIngredientsFiltered()
  const [favorites, setFavorites] = useState(() =>
    JSON.parse(localStorage.getItem('favorites') || '[]'),
  )

  return (
    <div className='home'>
      <SearchBar
        search={search}
        setSearch={setSearch}
        searchType={searchType}
        filterIng={filterIng}
      />
      <Filters searchType={searchType} setSearchType={setSearchType} />
      <h1 className={`home__title`}>Accueil</h1>
      {/* Faire apparaître les ingrédients filtrés s'il y en a */}
      {filterIng.filteredIngredients.length > 0 &&
        searchType === 'ingredients' && (
          <IngredientsFiltered filterIng={filterIng} />
        )}
      {/* FIN ingrédients filtrés */}
      <div className='home__recipes'>
        <div
          className={`search ${
            search.length > 0 || filterIng.filteredIngredients.length > 0
              ? 'visible'
              : 'notVisible'
          }`}
        >
          <h2>Résultats de votre recherche</h2>
          <Recipes
            search={search}
            searchType={searchType}
            filterIng={filterIng}
          />
        </div>
        <div
          className={`favorites ${
            favorites.length > 0 ? 'visible' : 'notVisible'
          }`}
        >
          <h2>Quelques Favoris</h2>
          <FavoritesRecipes
            favorites={favorites}
            setFavorites={setFavorites}
            sliceNumber={4}
          />
        </div>
        <h2
          className={`favorites ${
            favorites.length === recettes.recipes.length
              ? 'notVisible'
              : 'visible'
          }`}
          id='recipes__ideas'
        >
          Des idées de recettes pour vous
        </h2>
        <div className='recipes'>
          {recettes.recipes
            .filter(recipe => !favorites.some(fav => fav.id === recipe.id))
            .map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
            .slice(0, 4)}
        </div>
      </div>
      <Bloc />
    </div>
  )
}

export default Home
