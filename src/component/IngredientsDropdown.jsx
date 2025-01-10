import React from 'react';
import ingredients from '../data/ingredients.json'
import { useIngredientsFiltered } from '../utils/hooks/useIngredientsFiltered';

/**
 * Affiche la liste des ingrédients qui correspondent à la recherche sous l'input
 * @param {string} search
 * @returns 
 */
const IngredientsDropdown = ({search}) => {
  const {filteredIngredients, addIngredient, removeIngredient} = useIngredientsFiltered();
  
  //Retourne la liste des ingrédients qui correspondent à la recherche sous l'input
  const findIngredients = (value) => {
    if (!value) return null;

    const newIngredientsListTemp = Object.keys(ingredients).filter(key => {
      return key.includes(value.toLowerCase());
    });
    if (newIngredientsListTemp.length === 0) return null;

    const newIngredientsList = newIngredientsListTemp.filter((newI) => !filteredIngredients.includes(newI));

    return newIngredientsList.length ? newIngredientsList : null;
  }

  return (findIngredients(search) && (
    <div className='ingredientsDropdown'>
      {findIngredients(search).slice(0,3).map((ingredient,i) => 
        <div key={i} className='ingredientsDropdown__content'>
          <span>{ingredient}</span>
          <div className="ingredientsDropdown__content__buttons">
            <button onClick={() => addIngredient(ingredient)}>V</button>
            <button onClick={() => removeIngredient(ingredient)}>X</button>
          </div>
        </div>
      )}
    </div>));
};

export default IngredientsDropdown;