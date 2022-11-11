import React from "react";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";

const Navigation = () => {

    // function onload() {

    //     gsap.to(document.querySelector(".priserCon"), {
    //         duration: 2,
    //         opacity: 1,
    //         ease: "power1"
    //     })

    // }

    return(
        <div className="navigationCon">
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
        </div>
    )
}

export default Navigation;