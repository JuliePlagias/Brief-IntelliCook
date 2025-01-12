import React, { useEffect, useState } from 'react'
import Footer from '../component/home/Footer'
import RecipeCard from '../component/RecipeCard'

/**
 * Page favoris
 */
export default function Favorites() {
  const [favorites, setFavorites] = useState(() =>
    JSON.parse(localStorage.getItem('favorites') || '[]'),
  )

  //Aller chercher les recettes favorites dans le localStorage
  useEffect(() => {
    const handleFavoritesUpdated = e => {
      setFavorites(e.detail)
    }
    window.addEventListener('favoritesUpdated', handleFavoritesUpdated)

    return () => {
      window.removeEventListener('favoritesUpdated', handleFavoritesUpdated)
    }
  }, [])
  return (
    <div className='favorites'>
      <h1 className={`favorites__title favorites__favorites`}>
        Mes recettes favorites
      </h1>
      <p className={`placeHolder ${favorites.length>0? "notVisible":"visible"}`} >
        Vous n'avez pas encore de recettes favorites.
        <br />
        Parcourez notre catalogue pour trouver des recettes qui vous plaisent.
      </p>
      <div className='recipes'>
        {favorites &&
          favorites.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
      </div>
    </div>
  )
}
