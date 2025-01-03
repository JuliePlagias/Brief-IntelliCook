import React from "react";

export default function Recipe({recipe}){
    
    return (<>
    <h1>{recipe.name}</h1>
    <img src={recipe.imgUrl}
    alt={"Photo de "+recipe.name}/>
    {recipe.detail}
     </>);
};


  