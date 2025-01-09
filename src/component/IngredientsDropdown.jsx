import React from 'react';
import ingredients from '../data/ingredients.json'

/**
 * Affiche la liste des ingrédients qui correspondent à la recherche sous l'input
 * @param {string} search
 * @returns 
 */
const IngredientsDropdown = ({search}) => {
  const findIngredient = (value) => {
    console.log(ingredients[value.toLowerCase()]);
    
    return ingredients[value.toLowerCase()];
  }

  return (findIngredient(search) && (
    <div className='ingredientsDropdown'>
      <div className='ingredientsDropdown__content'>
        <span>{findIngredient(search)}</span>
        <div className="ingredientsDropdown__content__buttons">
          <button>V</button>
          <button>X</button>
        </div>
      </div>
    </div>));
};

export default IngredientsDropdown;