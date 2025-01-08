import React, { useEffect, useState } from 'react'
import Footer from '../component/home/Footer'
import Recipes from '../component/Recipes'
import RecipeCard from '../component/RecipeCard'

export default function Favorites() {
  const [favorites, setFavorites] = useState(null)

  //Aller chercher les recettes favorites
  useEffect(() => {
    const getFavorites = JSON.parse(localStorage.getItem('favorites'))
    setFavorites(getFavorites)
    console.log(getFavorites)
  }, [])

  return (
    <div className='favorites'>
      <h1 className={`searchingPage__title searchingPage__favorites`}>
        Mes recettes favorites
      </h1>
      {favorites && favorites.map(recipe => <RecipeCard recipe={recipe} />)}
      <Footer />
    </div>
  )
}
