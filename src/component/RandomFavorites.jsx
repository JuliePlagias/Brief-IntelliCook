import React, { useEffect, useState } from 'react'
import RecipeCard from '../component/RecipeCard';

export default function RandomFavorites({number}){
    const [favorites, setFavorites] = useState(() =>
        JSON.parse(localStorage.getItem('favorites') || '[]'),
      )
  
    useEffect(() => {
        const handleFavoritesUpdated = e => {
          setFavorites(e.detail)
        }
        window.addEventListener('favoritesUpdated', handleFavoritesUpdated)
    
        return () => {
          window.removeEventListener('favoritesUpdated', handleFavoritesUpdated)
        }
      }, [])
  
    if(favorites.length===0)return <p>Pas encore de favoris</p>;
    const randomRecipes = (favorites, count)=>{
      const shuffled = [...favorites].sort(()=>0.5 - Math.random());
      return shuffled.slice(0, count);
    }
    return (randomRecipes(favorites, number).map(recipe=>(<RecipeCard key={recipe.id} recipe={recipe}/>)));
  }