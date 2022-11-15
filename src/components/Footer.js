import { Link, NavLink } from "react-router-dom";

const Footer = () => {
    return(
        <div className="footerBGCcon">
            <div className="footerCon">
            <Link to = "/" className="footerLogo"><h1>SalonNaja</h1></Link>

                <address className="addressCon">
                    <p>Adelgade 33</p>
                    <p>8660, Skanderborg</p>
                    <p>salon-naja@hotmail.com</p>
                    <p>+45 86 52 12 20</p>
                </address>

                <div className="tiderCon">
                    <b>Åbningstider</b>
                    <div className="indivTiderCon">
                        <p>Mandag</p>
                        <p className="tid">Lukket</p>
                    </div>
                    <div className="indivTiderCon">
                        <p>Tirsdag</p>
                        <p className="tid">08.30 - 17.30</p>
                    </div>
                    <div className="indivTiderCon">
                        <p>Onsdag</p>
                        <p className="tid">08.30 - 17.30</p>
                    </div>
                    <div className="indivTiderCon">
                        <p>Torsdag</p>
                        <p className="tid">08.30 - 20.00</p>
                    </div>
                    <div className="indivTiderCon">
                        <p>Fredag</p>
                        <p className="tid">08.30 - 18.00</p>
                    </div>
                    <div className="indivTiderCon">
                        <p>Lørdag</p>
                        <p className="tid">08.30 - 13.00</p>
                    </div>
                    <div className="indivTiderCon">
                        <p>Søndag</p>
                        <p className="tid">Lukket</p>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}

export default Footer;