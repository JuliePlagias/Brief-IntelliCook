import React from 'react'
import recettes from '../data/recipes.json'
import RecipeCard from './RecipeCard'

/**
 * Mappe toutes les recettes trouvées à partir de la recherche search
 * @param {string} search
 */

const Recipes = ({ search, typeOfSearch }) => {
  const findRecipeByName = inputValue => {
    return recettes.recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(inputValue.toLowerCase())
    )
  }

  const findRecipeByIngredient = inputValue => recettes.recipes.filter(recipe => recipe.ingredients.some(ingredient => ingredient.name.toLowerCase().includes(inputValue.toLowerCase())))

  return (
    <div className='recipes'>
      {typeOfSearch === 'name' && findRecipeByName(search) &&
        findRecipeByName(search).map((recipe, i) => {
          if (i < 12) {
            return <RecipeCard key={recipe.id} recipe={recipe} />
          }
        })}
      {typeOfSearch === 'ingredients' && findRecipeByIngredient(search) &&
        findRecipeByIngredient(search).map((recipe, i) => {
          if (i < 12) {
            return <RecipeCard key={recipe.id} recipe={recipe} />
          }
        })}
    </div>
  )
}

export default Recipes
