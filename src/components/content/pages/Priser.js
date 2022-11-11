import PriserContent from "../Priser/PriserContent";
import gsap from "gsap";

const Priser = () => {
    
    // window.onloadeddata = () => {

    //     gsap.to(document.querySelector(".priserCon"), {
    //         duration: 2,
    //         alpha: 1,
    //         ease: "power1"
    //     })

    // }

    return(
        <div className="priserCon">
            <PriserContent />
        </div>
    )
}

export default Priser;