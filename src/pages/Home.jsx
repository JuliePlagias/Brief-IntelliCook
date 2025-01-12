import {useState} from 'react';
import Bloc from '../component/home/Bloc'
import SearchBar from '../component/SearchBar';
import recettes from '../data/recipes.json';
import RecipeCard from '../component/RecipeCard';
import { useIngredientsFiltered } from '../utils/hooks/useIngredientsFiltered';
import Recipes from '../component/Recipes';
import Filters from '../component/Filters';
import IngredientsFiltered from '../component/IngredientsFiltered';


/**
 * Page d'accueil
 */
const Home = () => {

   const [search, setSearch] = useState('');
    const [searchType, setSearchType] = useState('name');
    const filterIng = useIngredientsFiltered();

  return (
    <div className='home'>
      <SearchBar search={search} setSearch={setSearch} searchType={searchType} filterIng={filterIng}/>
      <Filters searchType={searchType} setSearchType={setSearchType}/>
      <h1 className={`home__title`}>Accueil</h1>
      {/* Faire apparaître les ingrédients filtrés s'il y en a */}
      {filterIng.filteredIngredients.length > 0 && searchType === "ingredients" && <IngredientsFiltered filterIng={filterIng} />}
      {/* FIN ingrédients filtrés */}
      <div className='home__recipes'>
        <div className={`search ${search.length > 0 || filterIng.filteredIngredients.length > 0 ?'visible':'notVisible'}`}>
          <h2>Résultats de votre recherche</h2>
          <Recipes search={search} searchType={searchType} filterIng={filterIng} />
        </div>
        <h2>Des idées de recettes pour vous</h2>
        <div className='recommandation'> 
          {(recettes.recipes.slice(0, 4).map(recipe=>(<RecipeCard key={recipe.id} recipe={recipe}/>)))}
        </div>
      </div>
      <Bloc />
    </div>
  )
}

export default Home
