import Recipe from "./Component/Recipe";
import recipes from "./DATA/recipes.json";

const recipe = {
  name:"Ratatouille",
  imgUrl : "https://i.imgur.com/yXOvdOSs.jpg",
  ingredients:[[1,"","Carrotte"],[]],
  detail:<p>Commencer par découper tous les légumes en gros quartiers.
     Dans un grand plat à four, mettre les courgettes, aubergines, poivrons, oignons, saler, poivrer et arroser le tout d’huile d’olive et herbes de Provence.
     Enfourner à 200° pendant 30 minutes.
     <br></br>Pendant ce temps faire mariner les quartiers de tomates dans un saladier avec sel, poivre, un trait de balsamique et l’ail pelé et haché.\nVerser ce mélange dans les légumes et mélanger le tout et laisser environ 30 minutes toujours à 200°.
     <br></br>Ensuite il faut baisser le four à 100° et d’oublier le tout pendant au moins 2 heures.
     <br></br>Bon appétit !</p>,
};






export default function App() {
  return <Recipe recipe={recipes["Boeuf haché à la tomate"]}/>;
}
