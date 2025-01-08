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

  return (
    <>
      <SearchRecipe search={search} setSearch={setSearch} />
      <h1 className={`searchingPage__title`}>{titlePage}</h1>
      <Recipes search={search} />
    </>
  )
}

export default SearchingPage
