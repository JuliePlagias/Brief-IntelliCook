import { useState } from 'react'

/**
 * Permet de gérer les ingrédients qui ont été ajoutés ou retirés pendant la recherche
 * @returns {Object} filteredIngredients, addIngredient, removeIngredient
 */
export function useIngredientsFiltered() {
  const [ingredientsList, setIngredientsList] = useState([])
  const [addedIngredientsList, setAddedIngredientsList] = useState([])
  const [removedIngredientsList, setRemovedIngredientsList] = useState([])

  const addIngredientsFromSearch = ingredient => {
    setIngredientsList([...ingredientsList, ingredient])
    setAddedIngredientsList([...addedIngredientsList, ingredient])
  }

  const removeIngredientsFromSearch = ingredient => {
    setIngredientsList([...ingredientsList, ingredient])
    setRemovedIngredientsList([...removedIngredientsList, ingredient])
  }

  const removeIngredientFromFilter = ingredient => {
    setIngredientsList(ingredientsList.filter(i => i !== ingredient))
    setRemovedIngredientsList(
      removedIngredientsList.filter(i => i !== ingredient),
    )
    setAddedIngredientsList(addedIngredientsList.filter(i => i !== ingredient))
  }

  return {
    filteredIngredients: ingredientsList,
    addedIngredientsList,
    removedIngredientsList,
    addIngredient: addIngredientsFromSearch,
    addUndesirableIngredient: removeIngredientsFromSearch,
    removeIngredientFromFilter,
  }
}
