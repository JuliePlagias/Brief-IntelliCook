import React from 'react'
import RecipeCard from './RecipeCard'
import {
  findRecipeByName,
  findRecipeByIngredient,
} from '../utils/functions/searchFunctions'

/**
 * Mappe toutes les recettes trouvées à partir de la recherche search
 * @param {string} search
 */

const Recipes = ({ search, searchType, filterIng, numberRecipes = 12 }) => {
  const { addedIngredientsList, removedIngredientsList } = filterIng

  return (
    <div className='recipes'>
      {searchType === 'name' &&
        findRecipeByName(search) &&
        findRecipeByName(search).map((recipe, i) => {
          if (i < numberRecipes) {
            return <RecipeCard key={recipe.id} recipe={recipe} />
          }
          return null
        })}
      {searchType === 'ingredients' &&
        findRecipeByIngredient(addedIngredientsList, removedIngredientsList) &&
        findRecipeByIngredient(
          addedIngredientsList,
          removedIngredientsList,
        ).map((recipe, i) => {
          if (i < numberRecipes) {
            return <RecipeCard key={recipe.id} recipe={recipe} />
          }
          return null
        })}
    </div>
  )
}

export default Recipes
