import React from 'react'
import recettes from '../data/recipes.json'
import RecipeCard from './RecipeCard'

/**
 * Mappe toutes les recettes trouvées à partir de la recherche search
 * @param {string} search
 */

const Recipes = ({ search, typeOfSearch, filterIng }) => {
  const {addedIngredientsList, removedIngredientsList} = filterIng;

  const findRecipeByName = inputValue => {
    //Filtrer les recettes dont le nom contient la recherche (recherche par défaut sans ingrédients ajoutés ou retirés)
    const filteredRecipesByDefault = recettes.recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    //si addedIngredientsList est vide, retourner les recettes par défaut
    if (addedIngredientsList.length === 0) return filteredRecipesByDefault;
    //Filtrer les recettes dont les ingrédients indispensables sont présents
    const filteredRecipesByAddedIngredients = filteredRecipesByDefault.filter((recipe) => recipe.ingredients.some(ing => addedIngredientsList.includes(ing.name))
  );
    //Puis, dégager les recettes dont les ingrédients non désirables sont présents
    return filteredRecipesByAddedIngredients;
  }

  const findRecipeByIngredient = inputValue => recettes.recipes.filter(recipe => recipe.ingredients.some(ingredient => ingredient.name.toLowerCase().includes(inputValue.toLowerCase())))

  return (
    <div className='recipes'>
      {searchType === 'name' && findRecipeByName(search) &&
        findRecipeByName(search).map((recipe, i) => {
          if (i < 12) {
            return <RecipeCard key={recipe.id} recipe={recipe} />
          }
        })}
      {searchType === 'ingredients' && findRecipeByIngredient(search) &&
        findRecipeByIngredient(search).map((recipe, i) => {
          if (i < 12) {
            return <RecipeCard key={recipe.id} recipe={recipe} />
          }
        })}
    </div>
  )
}

export default Recipes
