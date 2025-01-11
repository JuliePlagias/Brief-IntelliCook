import React from 'react'
import Ingredient from './Ingredient'
import { useNavigate, useParams } from 'react-router-dom'

/**
 * Affiche la fiche produit de la recette passée en props
 * @param {Object} recipe
 */
export default function FicheProduit({ recipes }) {
  const { name } = useParams()
  const navigate = useNavigate()
  const recipe = recipes.find(r => r.name.toLowerCase() === name)
  
  if (!recipe)
    return <div className='ficheProduit--error'>
      <span>Oups ! Pas de recette trouvée 🐀</span>
      <button onClick={() => navigate(-1)}>Retour</button>
      </div>

  return (
    <div className='ficheProduit'>
      <img
        src={`/assets/images/recettes/${recipe.name.toLowerCase()}.jpg`}
        alt={recipe.name}
        />
      <h1>{recipe.name}</h1>
      <h2>Ingrédients</h2>
      <ul className='ingredients'>
        {recipe.ingredients.map((ingredient, i) => (
          <li key={i}>
            <Ingredient
              name={ingredient.name}
              quantity={ingredient.quantity}
              unit={ingredient.unit}
            />
          </li>
        ))}
      </ul>
      <div id="preparation">
        <h2>Préparation</h2>
        <ul className='steps'>
          {recipe.steps.map((step, i) => (
            <li  key={i}>
              <p className='step'>Étape {i+1}</p>
              <p className='step_content'>{step}</p>
            </li>
         ))}
        </ul>
      </div>
    </div>
  )
}
