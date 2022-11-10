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

    // window.onload = () => {

    //     gsap.to(document.querySelector(".homeContentHeaderOne"), {
    //         duration: 2,
    //         borderBottom: "1px solid black",
    //         transformOrigin: "center",
    //         ease: "elastic.out",
    //     })

    // }

    return(
        <>
            <div className="homeContentInfoCon">
                <h2 className="homeContentHeaderOne">Salon Naja <span></span></h2>
                <h2  className="homeContentHeaderTwo"><span></span> 8660 Skanderborg</h2>
                <button className="homeContentBook" onClick={() => onlineBooking()}>Book tid</button>
                <button className="homeContentKontakt" onClick={routeChange}>Priser</button>
            </div>
            <div className="homeContentImgConPLUS">
                <div className="homeContentImgCon">
                    <img src="assets/placeholder-kvadrat.jpg" alt="" className="homeContentImg" />
                </div>
            </div>      
        </>
    )
}

export default HomeContent;