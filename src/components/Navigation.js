import React from "react";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";

const Navigation = () => {

    return(
        <div className="navigationCon">
            <div className="navigation">
                <nav>
                    <ul className="menus">
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
                            {/* <NavLink
                            to="priser"
                            id="navPriser"
                            className={({ isActive }) =>
                            isActive ? "activeClassName" : undefined
                            }>
                                <span>Priser</span>
                                <div className="dropdown">
                                    <Link to = "/priser/negle">Negle</Link>
                                    <Link to = "/priser/hår"><span>Hår</span></Link>
                                </div>
                            </NavLink> */}
                            <Link id="navPriser">
                                <span>Priser</span>
                                <div className="dropdown">
                                    <NavLink
                                    to="/priser/negle"
                                    className={({ isActive }) =>
                                    isActive ? "activeClassName" : undefined
                                    }>
                                        <span>Negle</span>
                                    </NavLink>

                                    <NavLink
                                    to="/priser/haar"
                                    className={({ isActive }) =>
                                    isActive ? "activeClassName" : undefined
                                    }>
                                        <span>Hår</span>
                                    </NavLink>
                                </div>    
                            </Link>
                        </li>
                        <li>
                            <NavLink
                            to="kontakt"
                            className={({ isActive }) =>
                            isActive ? "activeClassName" : undefined
                            }>
                                <span>Kontakt</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;