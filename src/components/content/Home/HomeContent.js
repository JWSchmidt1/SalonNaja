import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const HomeContent = () => {

    let navigate = useNavigate(); 

    const routeChange = () =>{ 
      let path = `priser`; 
      navigate(path);
    }

    const onlineBooking = () =>{ 
        window.open('https://salonbook.one/?salon.naja#/', '_blank')
    }

    // gsap.set(document.querySelector(".homeContentHeaderOne"), {
    //     borderBottom: "0",
    //     scale: 0
    // })

    // window.onload = () => {

    //     gsap.to(document.querySelector(".homeContentHeaderOne"), {
    //         duration: 2,
    //         borderBottom: "1px solid black",
    //         transformOrigin: "center",
    //         scale: 1,
    //         ease: "elastic.out",
    //     })

    // }

    return(
        <div className="homeCon">
            <div className="homeContentInfoCon">
                <h1 className="homeContentHeaderOne">Salon Naja <span></span></h1>
                <h2  className="homeContentHeaderTwo"><span></span> 8660 Skanderborg</h2>
                <button className="homeContentBook" onClick={() => onlineBooking()}>Book tid</button>
                <button className="homeContentKontakt" onClick={routeChange}>Priser</button>
            </div>
            <div className="kontaktInfoCon">
                <p><span>Adresse:</span> <a href="https://www.google.com/maps?q=Adelgade 33, 8660 Skanderborg" target="_blank">Adelgade 33, 8660 Skanderborg</a></p>
                <p><span>TLF:</span> <a href="tel:+4586521220">+45 86 52 12 20</a></p>
                <p><span>E-mail:</span> <a href="mailto:salon-naja@hotmail.com" target="_blank">salon-naja@hotmail.com</a></p>
            </div>
            <div className="homeContentImgConPLUS">
                {/* <div className="homeContentImgCon"> */}
                    <img src="assets/placeholder-kvadrat.jpg" alt="" className="homeContentImg" />
                {/* </div> */}
            </div>      
        </div>
    )
}

export default HomeContent;