import React, { useEffect, useRef, useState } from 'react';
import ingredients from '../data/ingredients.json'

/**
 * Affiche la dropdownlist des ingrédients qui matchent avec la recherche de l'input
 * @param {string} search
 * @param {function} setSearch
 * @param {Personalized Hook} filterIng
 * @returns 
 */
const IngredientsDropdown = ({search, setSearch, filterIng}) => {
  const catMenu = useRef(null);
  const [openSlide, setOpenSlide] = useState(true); //menu ouvert dés qu'il est monté
  const {filteredIngredients, addIngredient, addUndesirableIngredient} = filterIng;

  useEffect(() => {
    document.addEventListener('mousedown', handleCloseMenu);
    return () => {
      document.removeEventListener('mousedown', handleCloseMenu);
    };
  }, [])
  
  //Retourne la liste des ingrédients qui correspondent à la recherche sous l'input
  const findIngredients = (value) => {
    if (!value) return null;
    const newIngredientsListTemp = Object.keys(ingredients).filter(key =>  key.includes(value.toLowerCase()));
    if (newIngredientsListTemp.length === 0) return null;
    const newIngredientsList = newIngredientsListTemp.filter((newI) => !filteredIngredients.includes(newI));

    return newIngredientsList.length ? newIngredientsList : null;
  }

  const handleCloseMenu = (e) => {
    if (openSlide && !catMenu.current?.contains(e.target)) {
      setOpenSlide(false)
      setSearch('')
    }
  }

  return (findIngredients(search) && openSlide && (
    <div className='ingredientsDropdown' ref={catMenu}>
      {findIngredients(search).map((ingredient,i) => 
        <div key={i} className='ingredientsDropdown__content'>
          <span>{ingredient}</span>
          <div className="ingredientsDropdown__content__buttons">
            <button onClick={() => addIngredient(ingredient)}>+</button>
            <button onClick={() => addUndesirableIngredient(ingredient)}>-</button>
          </div>
        </div>
      )}
    </div>));
};

export default IngredientsDropdown;