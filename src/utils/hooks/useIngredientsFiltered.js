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
  console.log('ingredientsList : ', ingredientsList)
  console.log('addedIngList : ', addedIngredientsList)
  console.log('removeIngList : ', removedIngredientsList)

  return {
    filteredIngredients: ingredientsList,
    addedIngredientsList,
    removedIngredientsList,
    addIngredient: addIngredientToList,
    removeIngredient: removeIngredientFromList,
  }
}
