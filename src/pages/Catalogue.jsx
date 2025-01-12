import React, {useState} from 'react'
import SearchBar from '../component/SearchBar'
import IngredientsFiltered from '../component/IngredientsFiltered'
import Recipes from '../component/Recipes'
import { useIngredientsFiltered } from '../utils/hooks/useIngredientsFiltered'
import Filters from '../component/Filters'

const Catalogue = () => {
    const [search, setSearch] = useState('')
    const [searchType, setSearchType] = useState('name')
    const filterIng = useIngredientsFiltered();

  return (
    <div className='catalogue'>
      <SearchBar search={search} setSearch={setSearch} searchType={searchType} filterIng={filterIng} />
      {/* Filtres */}
      <Filters searchType={searchType} setSearchType={setSearchType}/>
      {/* Fin filtres */}
      <h1 className={`catalogue__title`}>Catalogue</h1>
      {/* Faire apparaître les ingrédients filtrés s'il y en a */}
      {filterIng.filteredIngredients.length > 0 && searchType === "ingredients" && <IngredientsFiltered filterIng={filterIng} />}
      {/* FIN ingrédients filtrés */}
      <Recipes search={search} searchType={searchType} filterIng={filterIng} />
    </div>
  )
}

export default Catalogue
