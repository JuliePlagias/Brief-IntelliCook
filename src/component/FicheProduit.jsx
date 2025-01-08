import React from 'react'
import Ingredient from './Ingredient'
import { useNavigate, useParams } from 'react-router-dom'

/**
 * Affiche la fiche produit de la recette passée en props
 * @param {Object} recipe
 */
export default function FicheProduit({ recipes }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const recipe = recipes.find(r => r.id === parseInt(id, 10))

  if (!recipe)
    return <p className='ficheProduit--error'>Pas de recettes trouvée :(...</p>

  return (
    <div className='ficheProduit'>
      <h1>{recipe.name}</h1>
      <img
        src={`/assets/images/recettes/${recipe.name.toLowerCase()}.jpg`}
        alt={recipe.name}
      />
      <h2>Ingrédients</h2>
      <ul>
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
      <ul>
        {recipe.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ul>
      <button onClick={() => navigate(-1)}>Retour</button>
    </div>
  )
}
