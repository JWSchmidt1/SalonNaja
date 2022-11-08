import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
    return(
        <div className="navigation">
            <nav>
                <ul>
                    <li><Link to = "/hjem"><span>Hjem</span></Link></li>
                    <li><a href="https://salonbook.one/?salon.naja#/" target="_blank"><span>Book tid</span></a></li>
                    <li><Link to = "/priser"><span>Priser</span></Link></li>
                    <li><Link to = "/kontakt-os"><span>Kontakt</span></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;