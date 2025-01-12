import React , {useState} from 'react'
import FavoritesRecipes from '../component/FavoritesRecipes'

/**
 * Page favoris
 */
export default function Favorites() {
  const [favorites, setFavorites] = useState(() =>
    JSON.parse(localStorage.getItem('favorites') || '[]'),
  )
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
        <FavoritesRecipes favorites={favorites} setFavorites={setFavorites}/>
    </div>
  )
}
