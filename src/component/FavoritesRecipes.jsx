import {useEffect } from "react";
import RecipeCard from "./RecipeCard";

export default function FavoritesRecipes({favorites, setFavorites}){

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

    return (<div className="recipes">
        {favorites &&
          favorites.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
    </div>);
}