const { findRecipeByIngredient } = require('../utils/functions/searchFunctions')
const recettes = require('../data/recipes.json')

describe('findRecipeByIngredient', () => {
  it('should return every recipes', () => {
    const addedIngredientsList = []
    const removedIngredientsList = []
    const result = findRecipeByIngredient(
      addedIngredientsList,
      removedIngredientsList,
    )
    expect(result).toEqual(recettes.recipes)
  })
})

//addedIngredients
describe('findRecipeByIngredient', () => {
  it('should return ratatouille, quiche aux légumes, poulet au curry, boeuf bourguignon, soupe de potimarron and chili sin carne', () => {
    const addedIngredientsList = ['oignon']
    const removedIngredientsList = []
    const result = findRecipeByIngredient(
      addedIngredientsList,
      removedIngredientsList,
    )
    expect(result).toEqual([
      { ...recettes.recipes[0] },
      { ...recettes.recipes[3] },
      { ...recettes.recipes[4] },
      { ...recettes.recipes[15] },
      { ...recettes.recipes[17] },
      { ...recettes.recipes[18] },
    ])
  })
})

//removedIngredients
describe('findRecipeByIngredient', () => {
  it('should return all recipes except ratatouille, quiche aux légumes, poulet au curry, boeuf bourguignon, soupe de potimarron and chili sin carne', () => {
    const addedIngredientsList = []
    const removedIngredientsList = ['oignon']
    const result = findRecipeByIngredient(
      addedIngredientsList,
      removedIngredientsList,
    )
    expect(result).not.toEqual([
      { ...recettes.recipes[0] },
      { ...recettes.recipes[3] },
      { ...recettes.recipes[4] },
      { ...recettes.recipes[15] },
      { ...recettes.recipes[17] },
      { ...recettes.recipes[18] },
    ])
  })
})

//les deux ensembles
describe('findRecipeByIngredient', () => {
  it('should return quiche aux légumes, poulet au curry, boeuf bourguignon, soupe de potimarron and remove ratatouille and chili sin carne', () => {
    const addedIngredientsList = ['oignon']
    const removedIngredientsList = ['tomate']
    const result = findRecipeByIngredient(
      addedIngredientsList,
      removedIngredientsList,
    )
    expect(result).toEqual([
      {
        ...recettes.recipes.find(
          r => r.name.toLowerCase() === 'Quiche aux légumes'.toLowerCase(),
        ),
      },
      {
        ...recettes.recipes.find(
          r => r.name.toLowerCase() === 'Poulet au curry'.toLowerCase(),
        ),
      },
      {
        ...recettes.recipes.find(
          r => r.name.toLowerCase() === 'Bœuf Bourguignon'.toLowerCase(),
        ),
      },
      {
        ...recettes.recipes.find(
          r => r.name.toLowerCase() === 'Soupe de potimarron'.toLowerCase(),
        ),
      },
    ])
  })
})

//inversé
describe('findRecipeByIngredient', () => {
  it('should not return quiche aux légumes, poulet au curry, boeuf bourguignon, soupe de potimarron, ratatouille and chili sin carne', () => {
    const addedIngredientsList = ['tomate']
    const removedIngredientsList = ['oignon']
    const result = findRecipeByIngredient(
      addedIngredientsList,
      removedIngredientsList,
    )
    expect(result).not.toEqual([
      { ...recettes.recipes[0] },
      { ...recettes.recipes[3] },
      { ...recettes.recipes[4] },
      { ...recettes.recipes[15] },
      { ...recettes.recipes[17] },
      { ...recettes.recipes[18] },
    ])
  })
})
