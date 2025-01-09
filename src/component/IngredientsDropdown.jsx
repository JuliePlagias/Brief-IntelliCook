import React from 'react';
import ingredients from '../data/ingredients.json'

/**
 * Affiche la liste des ingrédients qui correspondent à la recherche sous l'input
 * @param {string} search
 * @returns 
 */
const IngredientsDropdown = ({search}) => {
  const findIngredient = (value) => {
    return ingredients[value];
  }

  return (
    <div className='ingredientsDropdown'>
      {findIngredient(search) ? findIngredient(search) : "AUCUNE RECHERCHE"}
    </div>
  );
};

export default IngredientsDropdown;