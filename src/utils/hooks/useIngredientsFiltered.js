import { useState } from 'react'

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
    ingredientsList,
    addedIngredientsList,
    removedIngredientsList,
  }
}
