import React from 'react'
import recettes from '../data/recipes.json'
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
      {searchType === 'name' && findRecipeByName(search, addedIngredientsList, removedIngredientsList) &&
        findRecipeByName(search, addedIngredientsList, removedIngredientsList).map((recipe, i) => {
          if (i < 12) {
            return <RecipeCard key={recipe.id} recipe={recipe} />
          }
        })}
      {searchType === 'ingredients' && findRecipeByIngredient(search, addedIngredientsList, removedIngredientsList) &&
        findRecipeByIngredient(search).map((recipe, i) => {
          if (i < 12) {
            return <RecipeCard key={recipe.id} recipe={recipe} />
          }
        })}
    </div>
  )
}

export default Recipes
