import React, { useEffect, useState } from 'react'
import Footer from '../component/home/Footer'
import RecipeCard from '../component/RecipeCard'

/**
 * Composant de page qui affiche la liste des recettes favorites
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
