import React from 'react';

/**
 * Affiche une bulle d'info sur le hover de la Carte de recette
 * @param {Array} ingredients
 * @returns 
 */
const Tooltip = ({ingredients}) => {
    
    return (
        <div className='tooltip'>
            <h2>Ingrédients</h2>
            <div className='tooltip__content'>
            {ingredients.map((ingredient, i) => 
                <li key={i} >{ingredient}</li>
            )}
            </div>
        </div>
    );
};

export default Tooltip;