const { findRecipeByIngredient } = require('../utils/functions/searchFunctions')
const recettes = require('../data/recipes.json').recipes.slice(0, 3)
/**
 * Recettes ne comporte que les trois premières recettes de la bdd
 * Ratatouille, soupe de légumes et Gratin dauphinois
 * Ingrédients de Ratatouille : courgette, aubergine, tomate, poivron rouge, oignon, ail, huile d'olive, herbes de Provence, sel, poivre
 * Ingrédients de soupe de légumes : carotte, pomme de terre, poireau, bouillon cube, eau, sel
 * Ingrédients de Gratin dauphinois : pomme de terre, crème fraîche, fromage râpé, ail, sel, poivre
 */

describe('findRecipeByIngredient', () => {
  it('should return every recipes', () => {
    const inputValue = ''
    const addedIngredientsList = ['aubergine']
  })
})
