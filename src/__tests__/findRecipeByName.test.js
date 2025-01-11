function findRecipeByName(inputValue) {
  return recettes.recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(inputValue.toLowerCase()),
  )
}

const RATATOUILLE = [require('../data/recipes.json').recipes[0]]

const recettes = require('../data/recipes.json')

const RATATOUILLE_AND_GRATIN_DAUPHINOIS = [
  { ...RATATOUILLE[0] },
  { ...require('../data/recipes.json').recipes[2] },
]

describe('findRecipeByName', () => {
  it('should return the ratatouille recipe', () => {
    const inputValue = 'ratatouille'
    const result = findRecipeByName(inputValue)
    expect(result).toEqual(RATATOUILLE)
  })
})

describe('findRecipeByName', () => {
  it('should return ratatouille and gratin dauphinois', () => {
    const inputValue = 'ra'
    const result = findRecipeByName(inputValue)
    expect(result).toEqual(RATATOUILLE_AND_GRATIN_DAUPHINOIS)
  })
})

describe('findRecipeByName', () => {
  it('should return all recipes', () => {
    const inputValue = ''
    const result = findRecipeByName(inputValue)
    expect(result).toEqual(recettes.recipes)
  })
})

describe('findRecipeByName', () => {
  it('should return no recipes (empty array)', () => {
    const inputValue = 'zdqr'
    const result = findRecipeByName(inputValue)
    expect(result).toEqual([])
  })
})
