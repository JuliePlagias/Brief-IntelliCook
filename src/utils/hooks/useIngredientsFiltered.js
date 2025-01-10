import { useState } from 'react'

/**
 * Permet de gérer les ingrédients qui ont été ajoutés ou retirés pendant la recherche
 * @returns {Object} filteredIngredients, addIngredient, removeIngredient
 */
export function useIngredientsFiltered() {
  const [ingredientsList, setIngredientsList] = useState([])
  const [addedIngredientsList, setAddedIngredientsList] = useState([])
  const [removedIngredientsList, setRemovedIngredientsList] = useState([])

  const addIngredientToList = ingredient => {
    setIngredientsList([...ingredientsList, ingredient])
    setAddedIngredientsList([...addedIngredientsList, ingredient])
  }

  const removeIngredientFromList = ingredient => {
    setIngredientsList([...ingredientsList, ingredient])
    setRemovedIngredientsList([...removedIngredientsList, ingredient])
  }

  return {
    filteredIngredients: ingredientsList,
    addIngredient: addIngredientToList,
    removeIngredient: removeIngredientFromList,
  }
}
