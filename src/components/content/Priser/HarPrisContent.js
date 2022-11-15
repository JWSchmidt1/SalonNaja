import webcontent from '../../../webcontent.json';

const HarPrisContent = () => {

    return(
        <>
            <div>
                <div className="priserContentCon">
                    <h3>Klip</h3>    
                    {webcontent.content[0].hairPriser[0].klip.map((item, index) => (
                        <>
                            <div className="indivPrisCon" id={item.lastIDCon} key={index}>
                                <p>{item.title}</p>
                                <p className='pris'>{item.price}</p>
                            </div>
                        </>
                    ))}
                </div>
                <div className="priserContentCon">
                    <h3>Kur</h3>    
                    {webcontent.content[0].hairPriser[1].kur.map((item, index) => (
                        <>
                            <div className="indivPrisCon" id={item.lastIDCon} key={index}>
                                <p>{item.title}</p>
                                <p className='pris'>{item.price}</p>
                            </div>
                        </>
                    ))}
                </div>
                <div className="priserContentCon">
                    <h3>Bryn & Vipper</h3>
                    {webcontent.content[0].hairPriser[2].brynvipper.map((item, index) => (
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
                    <h3>Farvebehandling</h3>
                    {webcontent.content[0].hairPriser[3].farvebehandling.map((item, index) => (
                        <>
                            <div className="indivPrisCon" id={item.lastIDCon} key={index}>
                                <p>{item.title}</p>
                                <p className='pris'>{item.price}</p>
                            </div>
                        </>
                    ))}
                </div>
                <div className="priserContentCon">
                    <h3>Reflekser</h3>
                    {webcontent.content[0].hairPriser[4].reflekser.map((item, index) => (
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
                    <h3>Formning</h3>
                    {webcontent.content[0].hairPriser[5].formning.map((item, index) => (
                        <>
                            <div className="indivPrisCon" id={item.lastIDCon} key={index}>
                                <p>{item.title}</p>
                                <p className='pris'>{item.price}</p>
                            </div>
                        </>
                    ))}
                </div>
                <div className="priserContentCon">
                    <h3>Permanent</h3>
                    {webcontent.content[0].hairPriser[6].permenent.map((item, index) => (
                        <>
                            <div className="indivPrisCon" id={item.lastIDCon} key={index}>
                                <p>{item.title}</p>
                                <p className='pris'>{item.price}</p>
                            </div>
                        </>
                    ))}
                </div>
                <div className="priserContentCon">
                    <h3>Microblading</h3>
                    {webcontent.content[0].hairPriser[7].microblading.map((item, index) => (
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

export default HarPrisContent;