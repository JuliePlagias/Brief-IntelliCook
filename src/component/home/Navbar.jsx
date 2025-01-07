import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";
import { Outlet } from "react-router-dom";

export default function NavBar()
{       
    return (

        <div>
            <NavbarDesktop/>
            <NavbarMobile/>   
        </div>
    );
}