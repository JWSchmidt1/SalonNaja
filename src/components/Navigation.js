import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
    return(
        <div className="navigation">
            <nav>
                <ul>
                    {/* <li><Link to = "/"><span>Hjem</span></Link></li>
                    <li><a href="https://salonbook.one/?salon.naja#/" target="_blank"><span>Book tid</span></a></li>
                    <li><Link to = "/priser"><span>Priser</span></Link></li>
                    <li><Link to = "/kontakt-os"><span>Kontakt</span></Link></li> */}

                    <li>
                        <NavLink
                        to=""
                        className={({ isActive }) =>
                        isActive ? "activeClassName" : undefined
                        }>
                            <span>Hjem</span>
                        </NavLink>
                    </li>
                    <li>
                        <a href="https://salonbook.one/?salon.naja#/" target="_blank"><span>Book tid</span></a>
                    </li>
                    <li>
                        <NavLink
                        to="priser"
                        className={({ isActive }) =>
                        isActive ? "activeClassName" : undefined
                        }>
                            <span>Priser</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="kontakt"
                        className={({ isActive }) =>
                        isActive ? "activeClassName" : undefined
                        }>
                            <span>KOntakt</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;