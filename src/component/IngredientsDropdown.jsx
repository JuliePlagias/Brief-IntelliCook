import React, { useState } from 'react';
import ingredients from '../data/ingredients.json'

/**
 * Affiche la liste des ingrédients qui correspondent à la recherche sous l'input
 * @param {string} search
 * @returns 
 */
const IngredientsDropdown = ({search}) => {
  const [ingredientsList, setIngredientsList] = useState([])
  const [addedIngredientsList, setAddedIngredientsList] = useState([])
  const [removedIngredientsList, setRemovedIngredientsList] = useState([])

  //Retourne la liste des ingrédients qui correspondent à la recherche sous l'input
  const findIngredients = (value) => {
    if (!value) return null;

    const newIngredientsListTemp = Object.keys(ingredients).filter(key => {
      return key.includes(value.toLowerCase());
    });
    if (newIngredientsListTemp.length === 0) return null;

    const newIngredientsList = newIngredientsListTemp.filter((newI) => !ingredientsList.includes(newI));

    return newIngredientsList.length ? newIngredientsList : null;
  }

  const addIngredientToList = (ingredient) => {
    setIngredientsList([...ingredientsList, ingredient])
    setAddedIngredientsList([...addedIngredientsList, ingredient])
  }

  const removeIngredientFromList = (ingredient) => {
    setIngredientsList([...ingredientsList, ingredient])
    setRemovedIngredientsList([...removedIngredientsList, ingredient])
  }

  return (findIngredients(search) && (
    <div className='ingredientsDropdown'>
      {findIngredients(search).slice(0,3).map((ingredient,i) => 
        <div key={i} className='ingredientsDropdown__content'>
          <span>{ingredient}</span>
          <div className="ingredientsDropdown__content__buttons">
            <button onClick={() => addIngredientToList(ingredient)}>V</button>
            <button onClick={() => removeIngredientFromList(ingredient)}>X</button>
          </div>
        </div>
      )}
    </div>));
};

export default IngredientsDropdown;