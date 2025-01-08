import React, { useEffect, useState } from 'react'
import Footer from '../component/home/Footer'
import Recipes from '../component/Recipes'
import RecipeCard from '../component/RecipeCard'

/**
 * Composant de page qui affiche la liste des recettes favorites
 */
export default function Favorites() {
  const [favorites, setFavorites] = useState(null)

  //Aller chercher les recettes favorites dans le localStorage
  useEffect(() => {
    const getFavorites = JSON.parse(localStorage.getItem('favorites'))
    setFavorites(getFavorites)
    console.log(JSON.stringify(getFavorites))
  }, [])

  return (
    <div className='favorites'>
      <h1 className={`searchingPage__title searchingPage__favorites`}>
        Mes recettes favorites
      </h1>
      <div className='recipes'>
        {favorites &&
          favorites.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
      </div>
      <Footer />
    </div>
  )
}
