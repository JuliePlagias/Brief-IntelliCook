import {Link, Outlet} from "react-router-dom";

export default function MenuBurger()
{
    console.log('Menu burger rendu');
    return (
        <>
        <div className="menuBurger">
            <img src="/assets/images/icons/logo.png" alt="Intelli Cook Logo"></img>
            <ul>
                {/* <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/catalogue">Catalogue</Link>
                </li>
                <li>
                    <Link to="/favoris">Favoris</Link>
                </li> */}
            </ul>
        </div>
        <Outlet/>
        </>
    );
}

