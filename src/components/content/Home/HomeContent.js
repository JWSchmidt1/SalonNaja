const HomeContent = () => {
    return(
        <>
            <div className="homeContentInfoCon">
                <h2 className="homeContentHeaderOne">Salon Naja <span></span></h2>
                <h2  className="homeContentHeaderTwo"><span></span> 8660 Skanderborg</h2>
                <button className="homeContentBook">Book tid</button>
                <button className="homeContentKontakt">Kontakt</button>
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