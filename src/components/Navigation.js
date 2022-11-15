import React from "react";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";

const Navigation = () => {

    return(
        <div className="navigationCon">
            <div className="navigation">
            <Link to = "/" className="headerLogo"><h1>SalonNaja</h1></Link>
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
                            to="galleri"
                            className={({ isActive }) =>
                            isActive ? "activeClassName" : undefined
                            }>
                                <span>Galleri</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="om-os"
                            className={({ isActive }) =>
                            isActive ? "activeClassName" : undefined
                            }>
                                <span>Om os</span>
                            </NavLink>
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
                        <li className="bookTid">
                            <a href="https://salonbook.one/?salon.naja#/" target="_blank"><span>Book tid</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;