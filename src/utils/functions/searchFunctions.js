const recettes = require('../../data/recipes.json')

function findRecipeByName(inputValue) {
  return recettes.recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(inputValue.toLowerCase()),
  )
}

/**
 * Retourne les recettes qui correspondent aux ingrédients ajoutés ou retirés
 * @returns {Array} recettes
 */
function findRecipeByIngredient(addedIngredientsList, removedIngredientsList) {
  //Filtrer les recettes dont les ingrédients indispensables sont présents
  const filteredRecipesByAddedIngredients = recettes.recipes.filter(recipe => {
    // console.log('recette testé : ', recipe)
    for (let i = 0; i < addedIngredientsList.length; i++) {
      // console.log('ingrédient testé : ', addedIngredientsList[i])
      if (
        !recipe.ingredients
          .map(i => i.name.toLowerCase())
          .includes(addedIngredientsList[i].toLowerCase())
      ) {
        return false
      }
    }
    return true
  })

  console.log(
    'recherche par ingrédients ajoutés : ',
    filteredRecipesByAddedIngredients,
  )

  //Puis, dégager les recettes dont les ingrédients non désirables sont présents
  const finalFilteredRecipes = filteredRecipesByAddedIngredients.filter(
    recipe => {
      for (let i = 0; i < removedIngredientsList.length; i++) {
        if (
          recipe.ingredients
            .map(i => i.name.toLowerCase())
            .includes(removedIngredientsList[i].toLowerCase())
        ) {
          return false
        }
      }
      return true
    },
  )
  console.log('résultat de la recherche : ', finalFilteredRecipes)

  return finalFilteredRecipes
}

module.exports = {
  findRecipeByName,
  findRecipeByIngredient,
}
