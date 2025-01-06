import React, { useState } from "react";

const RecipeCard = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="recipeCard">
      <div className="recipeCard__image">
        <img
          src={`/assets/images/recettes/${recipe.name.toLowerCase()}.jpg`}
          alt={recipe.name}
        />
      </div>
      <h1
        className={`recipeCard__name ${
          recipe.name.length > 16 ? "recipeCard__name--small" : ""
        }`}
      >
        {recipe.name}
      </h1>
      <span className="recipeCard__time">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path
            fill="black"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          />
          <path fill="black" d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
        </svg>
        40 min
      </span>
      <div className="recipeCard__buttons">
        <button className="recipeCard__buttons-add">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z"
            />
          </svg>
        </button>
        <button className="recipeCard__buttons-favorite">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={isFavorite ? "darkred" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isFavorite ? "favorite-animation" : ""}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
