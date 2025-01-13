import React, { useContext, useEffect, useState } from 'react'
import { updateLocalStorage } from '../utils/functions/updateLocalStorage'
import { Link } from 'react-router-dom'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Ingredient from './Ingredient'
import { DarkModeContext } from './DarkModeProvider'

/**
 * Crée une carte de recette avec son image,son nom, le temps de cuisson, et les boutons "ajouter au panier" et "favoris"
 * @param {Object} recipe
 * @returns
 */
const RecipeCard = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  //Pour gérer la tooltip
  const [showTooltip, setShowTooltip] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState(null)
  const { darkMode } = useContext(DarkModeContext)

  useEffect(() => {
    const displayFavorites = () => {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || []
      setIsFavorite(favorites.some(favorite => favorite.id === recipe.id))
    }
    displayFavorites()
  }, [recipe.id])

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    if (!isFavorite) {
      favorites.push(recipe)
      updateLocalStorage('favorites', favorites)
    } else {
      const updatedFavorites = favorites.filter(fav => fav.id !== recipe.id)
      updateLocalStorage('favorites', updatedFavorites)
    }
    setIsFavorite(!isFavorite)
  }

  const timeInHour = time => {
    const addZero = time % 60 < 10 ? '0' : ''
    return `${Math.floor(time / 60)}h${Math.floor(time % 60)}${addZero}`
  }

  /*Gérer la tooltip*/
  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setShowTooltip(true)
    }, 1500)
    setHoverTimeout(timeout)
  }

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout)
    setHoverTimeout(null)
    setShowTooltip(false)
  }

  const toCamelCase = str => {
    const strRegex = str.replace(/[' ']/g, '-')
    return strRegex
    clearTimeout(hoverTimeout)
    setHoverTimeout(null)
    setShowTooltip(false)
  }

  return (
    <div
      className={`recipeCard ${darkMode && 'recipeCardDark'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={`/recipe/${recipe.name.toLowerCase()}`}
        key={recipe.id}
        className={`${toCamelCase(recipe.name)}`}
        data-tooltip-position-strategy='absolute'
        data-tooltip-float='true'
        data-tooltip-delay-show='1000'
      >
        {/* {showTooltip && <Tooltip ingredients={recipe.ingredients.map(i => i.name)} />} */}
        <div className='recipeCard__image'>
          <img
            src={`/assets/images/recettes/${recipe.name.toLowerCase()}.jpg`}
            alt={recipe.name}
          />
        </div>
        <ReactTooltip
          anchorSelect={`.${toCamelCase(recipe.name)}`}
          place='top'
          style={{
            backgroundColor: 'white',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          }}
          clickable
        >
          <ul className='tooltip__content'>
            {recipe.ingredients.map((ing, i) => {
              return (
                <li className='tooltip__content__ingredient' key={i}>
                  {ing.name}
                </li>
              )
            })}
          </ul>
        </ReactTooltip>
        <h1
          className={`recipeCard__name ${
            recipe.name.length > 16 ? 'recipeCard__name--small' : ''
          }`}
        >
          {recipe.name}
        </h1>
      </Link>
      <span className='recipeCard__time'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
          />
          <path
            fill='currentColor'
            d='M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z'
          />
        </svg>
        {recipe.time >= 60 ? timeInHour(recipe.time) : recipe.time + ' min'}
      </span>
      <div className='recipeCard__buttons'>
        <button className='recipeCard__buttons-favorite'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill={isFavorite ? 'darkred' : 'none'}
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className={isFavorite ? 'favorite-animation' : ''}
            onClick={handleFavoriteClick}
          >
            <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default RecipeCard
