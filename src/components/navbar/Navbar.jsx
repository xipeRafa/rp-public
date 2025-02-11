import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";







export default function Navbar() {

    const [isActive, setIsActive] = useState(true);

    const windowWidth = window.innerWidth;

    const InWidth = () => {
        if (windowWidth < 999) {
            setIsActive(true);
        }
    };

    return (
        <div className="navBar">

            <div onClick={() => setIsActive(!isActive)} className="hamburger">
                <div className="menu-bar">
                    <div className="uno" />
                    <div className="dos" />
                    <div className="tres" />
                </div>
                <span className='menuX'>{isActive ? "MENU" : "✘"}</span>
            </div>

            <div className={isActive ? "menu " : "menu display"} onClick={InWidth}>


                <NavLink to="/rp-public" onClick={()=>window.scrollTo(0,0)}> Inicio </NavLink>

                <NavLink to="/rp-public/GRUPO" onClick={()=>window.scrollTo(0,0)}> GRUPO </NavLink>

                <NavLink to="/rp-public/CENACULOS" onClick={()=>window.scrollTo(0,0)}> CENACULOS </NavLink>

                <NavLink to="/rp-public/CONSAGRACIONES" onClick={()=>window.scrollTo(0,0)}> CONSAGRACIONES </NavLink>
{/*
                <NavLink to="/MLJM/licencias" onClick={()=>window.scrollTo(0,0)}> Licencias </NavLink>

                <NavLink to="/MLJM/clientes" onClick={()=>window.scrollTo(0,0)}> Clientes </NavLink>

                <NavLink to="/MLJM/contacto" onClick={()=>window.scrollTo(0,0)}> Contacto </NavLink>
*/}
                {/*<NavLink to="/AhilloPage/gobierno">    Gobierno </NavLink>

                <NavLink to="/AhilloPage/PGP"> PGP 2031-2033 </NavLink>

                <NavLink to="/AhilloPage/provincia"> Provincia Eclesiástica de Hermosillo </NavLink>*/}

            </div>
        </div>
    );
}
