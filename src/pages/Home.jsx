import {useState} from 'react';
import Bloc from '../component/home/Bloc'
import SearchBar from '../component/SearchBar';
import recettes from '../data/recipes.json';
import RecipeCard from '../component/RecipeCard';
import { useIngredientsFiltered } from '../utils/hooks/useIngredientsFiltered';
import Recipes from '../component/Recipes';
import Filters from '../component/Filters';


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
      <h1 className={`home__title`}>Acceuil</h1>
      <div className='home__recipes'>
        <div className={`${search.length>0?'visible':'notVisible'}`}>
          <Recipes search={search} searchType={searchType} filterIng={filterIng} />
        </div>
        <h2>Des idées de recettes pour vous</h2>
        {(recettes.recipes.slice(0, 4).map(recipe=>(<RecipeCard key={recipe.id} recipe={recipe}/>)))}
      </div>
      <Bloc />
    </div>
  )
}

export default Home
