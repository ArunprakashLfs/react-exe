import Birds from './Birds';
import '../About/About.css';

const About =()=>{
    return (
        <>
            <h1 className="header">Bird Reserve Tiruppur</h1>
            <div className="card" id="card">
            
            {Birds.map(({imageUrl, BirdName, Description})=>{
                return(
                    <div className='birds-container'>
                        <h2>{BirdName}</h2>
                        <div className='image-container'>
                            <img src={imageUrl} alt='bird pics' className='image-bird'></img>
                        </div>
                        <h3>Bird-Name </h3>
                        <span>{BirdName}</span>
                        <br/>
                        <h3>Bird-Description </h3>
                        <span>{Description}</span>
                    </div>
                )
            })}
        </div>
        </>
    )
}
export default About;