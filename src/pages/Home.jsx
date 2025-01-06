import React from "react";
import SearchRecipe from "../component/SearchRecipe";
import Bloc from "../component/home/Bloc";
import NavBar  from "../component/home/Navbar";
const Home = () => {
  return (
    <div className="home">
      <NavBar/>
      <SearchRecipe />
      <Bloc />
    </div>
  );
};

export default Home;
