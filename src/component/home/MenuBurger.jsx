import Link from "react-router-dom"

export default function MenuBurger()
{
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/catalogue">Catalogue</Link>
                </li>
                <li>
                    <Link to="/favoris">Favoris</Link>
                </li>
            </ul>
        </div>
    );
}

