import React from 'react';

const IngredientsFiltered = ({filterIng}) => {
    const {addedIngredientsList, removedIngredientsList} = filterIng;

    return (
        <div className='ingredients-filtered'>
            <h2>Ingredients non désirables</h2>
            <ul>
                {removedIngredientsList.map(ingredient => (
                    <li key={ingredient.id}>
                        {ingredient}
                        <button>X</button>
                    </li>
                ))}
            </ul>
            <h2>Ingredients ajoutés</h2>
            <ul>
                {addedIngredientsList.map(ingredient => (
                    <li key={ingredient.id}>
                        {ingredient}
                        <button>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IngredientsFiltered;