import React from 'react'
import recettes from '../data/recipes.json'
import RecipeCard from './RecipeCard'

/**
 * Mappe toutes les recettes trouvées à partir du nom de la recette
 * @param {string} search
 */

const Recipes = ({ search }) => {
  const findRecipe = recipeName => {
    console.log('recipeName', recipeName)

    return recettes.recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(recipeName.toLowerCase()),
    )
  }

  return (
    <div className='recipes'>
      {findRecipe(search) &&
        findRecipe(search).map((recipe, i) => {
          if (i < 12) {
            return <RecipeCard key={recipe.id} recipe={recipe} />
          }
        })}
    </div>
  )
}

export default Recipes
