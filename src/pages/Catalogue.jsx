import React, { useState } from 'react'
import SearchRecipe from '../component/SearchRecipe'
import Recipes from '../component/Recipes'
import SearchingPage from '../component/SearchingPage'
const Catalogue = () => {
  const [search, setSearch] = useState('')

  return (
    <div className='catalogue'>
      <SearchingPage titlePage={'catalogue'} />
    </div>
  )
}

export default Catalogue
