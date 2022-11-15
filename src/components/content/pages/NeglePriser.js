import NeglePrisContent from "../Priser/NeglePrisContent";

const HaarPriser = () => {

    return(
        <>
            <h2 className="priserHeader">Negle Priser</h2>
            <div className="priserCon">
                <NeglePrisContent />
                <div className="priserConBorder"></div>
            </div>
        </>
    )
}

export default HaarPriser;