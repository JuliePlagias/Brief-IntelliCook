import recettes from '../../data/recipes.json'

export function findRecipeByName(
  inputValue,
  addedIngredientsList,
  removedIngredientsList,
) {
  return recettes.recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(inputValue.toLowerCase()),
  )
}

/**
 * Retourne les recettes qui correspondent aux ingrédients ajoutés ou retirés
 */
export function findRecipeByIngredient(
  inputValue,
  addedIngredientsList,
  removedIngredientsList,
) {
  //Filtrer les recettes dont la value contient la recherche (recherche par défaut sans ingrédients ajoutés ou retirés)
  const filteredRecipesByDefault = recettes.recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(inputValue.toLowerCase()),
  )

  //si addedIngredientsList est vide, retourner les recettes par défaut
  if (addedIngredientsList.length === 0) return filteredRecipesByDefault
  //Filtrer les recettes dont les ingrédients indispensables sont présents
  console.log('addedIngredientsList : ', addedIngredientsList)

  const filteredRecipesByAddedIngredients = filteredRecipesByDefault.filter(
    recipe => {
      console.log('recette testé : ', recipe)
      for (let i = 0; i < addedIngredientsList.length; i++) {
        console.log('ingrédient testé : ', addedIngredientsList[i])
        if (
          !recipe.ingredients
            .map(i => i.name.toLowerCase())
            .includes(addedIngredientsList[i].toLowerCase())
        ) {
          return false
        }
      }
      return true
    },
  )
  console.log(
    'filtered recipes by added ingredients : ',
    filteredRecipesByAddedIngredients,
  )

  //Puis, dégager les recettes dont les ingrédients non désirables sont présents
  /* */
  return filteredRecipesByAddedIngredients
}
