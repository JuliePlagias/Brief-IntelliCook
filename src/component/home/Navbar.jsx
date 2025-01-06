export default function NavBar()
{
    const path = "/assets/images/icons/";
    return (
        <div className="navBar">
        <img id="logo" src={`${path}logo.png`} alt="Intelli Cook Logo"></img>
        <div className="icons">
        <img id="heart" src={`${path}heart.svg`} alt="Favoris"></img>
        <img id ="book" src={`${path}book.svg`} alt="Catalogue"></img>
        <img id="cart"src={`${path}cart.svg`} alt="Panier"></img>
        </div>  
        </div>
    );
}