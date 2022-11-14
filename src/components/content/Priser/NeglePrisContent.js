import webcontent from '../../../webcontent.json';

const NeglePrisContent = () => {
    return(
        <>
            <h2 className="priserHeader">Negle Priser</h2>
            <div>   
                <div className="priserContentCon">
                    <h3>Negle</h3>
                    {webcontent.content[1].neglePriser[0].negle.map((item, index) => (
                        <>
                            <div className="indivPrisCon" id={item.lastIDCon} key={index}>
                                <p>{item.title}</p>
                                <p className='pris'>{item.price}</p>
                            </div>
                        </>
                    ))}
                </div>
                <div className="priserContentCon">
                    <h3>Fødder</h3>
                    {webcontent.content[1].neglePriser[1].fodder.map((item, index) => (
                        <>
                            <div className="indivPrisCon" id={item.lastIDCon} key={index}>
                                <p>{item.title}</p>
                                <p className='pris'>{item.price}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div> 
            <div>   
                <div className="priserContentCon">
                    <h3>Negle (Karina)</h3>
                    {webcontent.content[1].neglePriser[2].negleKarina.map((item, index) => (
                        <>
                            <div className="indivPrisCon" id={item.lastIDCon} key={index}>
                                <p>{item.title}</p>
                                <p className='pris'>{item.price}</p>
                            </div>
                        </>
                    ))}
                </div>
                <div className="priserContentCon">
                    <h3>Hænder</h3>
                    {webcontent.content[1].neglePriser[3].haender.map((item, index) => (
                        <>
                            <div className="indivPrisCon" id={item.lastIDCon} key={index}>
                                <p>{item.title}</p>
                                <p className='pris'>{item.price}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div> 
            <div>   
                <div className="priserContentCon">
                    <h3>Negle (Monika)</h3>
                    {webcontent.content[1].neglePriser[4].negleMonika.map((item, index) => (
                        <>
                            <div className="indivPrisCon" id={item.lastIDCon} key={index}>
                                <p>{item.title}</p>
                                <p className='pris'>{item.price}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div> 
        </>
    )
}

export default NeglePrisContent;