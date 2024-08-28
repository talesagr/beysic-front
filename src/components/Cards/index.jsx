import './cards.css'

const Cards = ({houseName, image, description, backgroundImage}) => {
    return (
         <div className="cards">
            <div className='header'>
                <img src={"https://www.designi.com.br/images/preview/11807908.jpg"} alt={'name'}></img>
            </div>
            <div className='bottom'>
                <h4>{houseName}</h4>
                <h5>{description}</h5>
            </div>
        </div>
    )
}

export default Cards;