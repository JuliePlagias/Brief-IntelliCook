import { useEffect } from 'react'
import RecipeCard from './RecipeCard'

export default function FavoritesRecipes({
  favorites,
  setFavorites,
  sliceNumber = favorites.length,
}) {
  //Aller chercher les recettes favorites dans le localStorage
  useEffect(() => {
    const handleFavoritesUpdated = e => {
      setFavorites(e.detail)
    }
    window.addEventListener('favoritesUpdated', handleFavoritesUpdated)

    return () => {
      window.removeEventListener('favoritesUpdated', handleFavoritesUpdated)
    }
  }, [setFavorites])

  return (
    <div className='recipes'>
      {favorites &&
        favorites
          .map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
          .slice(0, sliceNumber)}
    </div>
  )
}
