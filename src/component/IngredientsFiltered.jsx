import React from 'react';

/**
 * Affiche les ingrédients qui ont été ajoutés ou retirés depuis la dropdown
 * @param {Object} filterIng
 * @returns 
 */
const IngredientsFiltered = ({filterIng}) => {
    const {addedIngredientsList, removedIngredientsList, removeIngredientFromFilter} = filterIng;

    return (
        <div className='ingredients-filtered'>
            {removedIngredientsList.length > 0 && <h2>Ingrédients non désirables</h2>}
            <ul>
                {removedIngredientsList.map(ingredient => (
                    <li key={ingredient.id}>
                        <span>{ingredient}</span>
                        <button onClick={() => removeIngredientFromFilter(ingredient)}>X</button>
                    </li>
                ))}
            </ul>
            {addedIngredientsList.length > 0 && <h2>Ingrédients indispensables</h2>}
            <ul>
                {addedIngredientsList.map(ingredient => (
                    <li key={ingredient.id}>
                        <span>{ingredient}</span>
                        <button onClick={() => removeIngredientFromFilter(ingredient)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IngredientsFiltered;