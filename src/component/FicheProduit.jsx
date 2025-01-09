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
    return <p className='ficheProduit--error'>Pas de recettes trouvée :(...</p>

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
      <h2>Etapes</h2>
      <ul className='steps'>
        {recipe.steps.map((step, i) => (
          <li key={i}>Étape {i +1} <br></br>{step}</li>
        ))}
      </ul>
      <button onClick={() => navigate(-1)}>Retour</button>
    </div>
  )
}
