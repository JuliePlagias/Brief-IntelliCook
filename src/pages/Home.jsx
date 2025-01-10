import {useState} from 'react';
import Bloc from '../component/home/Bloc'
import SearchBar from '../component/SearchBar';
import recettes from '../data/recipes.json';
import RecipeCard from '../component/RecipeCard';
import { useIngredientsFiltered } from '../utils/hooks/useIngredientsFiltered';

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
      <div className="searchingPage__filters">
        <span>Filtrer par : </span>
        <input type="button" value="Nom de recette" onClick={() => setSearchType('name')} className={`filterButton ${searchType === 'name' ? 'filterButton--active' : ''}`} />

        <input type="button" value="Ingrédients" onClick={() => setSearchType('ingredients')}  className={`filterButton ${searchType === 'ingredients' ? 'filterButton--active' : ''}`} />
      </div>
      
      <h2>Des idées de recettes pour vous</h2>
      <div className='recipes'>
        {(recettes.recipes.slice(0, 4).map(recipe=>(<RecipeCard key={recipe.id} recipe={recipe}/>)))}
      </div>
      <Bloc />
    </div>
  )
}

export default Home
