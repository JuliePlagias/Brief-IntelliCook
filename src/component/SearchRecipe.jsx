import React, { useState } from "react";
import Recipes from "./Recipes";

const SearchRecipe = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Recipes search={search} />
    </div>
  );
};

export default SearchRecipe;
