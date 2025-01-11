import React from 'react'
import RecipeCard from './RecipeCard'
import {findRecipeByName, findRecipeByIngredient} from "../utils/functions/searchFunctions";

/**
 * Mappe toutes les recettes trouvées à partir de la recherche search
 * @param {string} search
 */

const Recipes = ({ search, searchType, filterIng }) => {
  const {addedIngredientsList, removedIngredientsList} = filterIng;
  
  return (
    <div className='recipes'>
      {searchType === 'name' && findRecipeByName(search) &&
        findRecipeByName(search).map((recipe, i) => {
          if (i < 12) {
            return <RecipeCard key={recipe.id} recipe={recipe} />
          }
        })}
      {searchType === 'ingredients' && findRecipeByIngredient(addedIngredientsList, removedIngredientsList) &&
        findRecipeByIngredient(addedIngredientsList, removedIngredientsList).map((recipe, i) => {
          if (i < 12) {
            return <RecipeCard key={recipe.id} recipe={recipe} />
          }
        })}
    </div>
  )
}

export default Recipes
