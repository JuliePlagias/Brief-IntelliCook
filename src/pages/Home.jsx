import React from "react";
import SearchRecipe from "../component/SearchRecipe";
import Bloc from "../component/home/Bloc";
const Home = () => {
  return (
    <div className="home">
      <SearchRecipe />
      <Bloc />
    </div>
  );
};

export default Home;
