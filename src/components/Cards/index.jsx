import './cards.css'

const Cards = ({houseName, image, description, backgroundImage}) => {
    return (
        <div className="cards">
            <div className='header' style={{backgroundImage: `url(https://w.wallhaven.cc/full/9d/wallhaven-9dp3y1.jpg)`}}>
                <img src={"https://github.com/talesagr.png"} alt={'name'}></img>
            </div>
            <div className='bottom'>
                <h4>{houseName}</h4>
                <h5>{description}</h5>
            </div>
        </div>
    )
}

export default Cards;