import './nextEvents.css'
import Cards from "../Cards";


const NextEvents = (props) => {
    //agora estamos MOCKANDO os dados, depois passaremos via PROPS
    let cards = [
        {
            houseName : 'Bocatto',
            image : 'https://github.com/talesagr.png',
            description : 'Erechim, RS',
            backgroundImage : 'https://w.wallhaven.cc/full/9d/wallhaven-9dp3y1.jpg'
        },
        {
            houseName : 'Veld',
            image : 'https://github.com/talesagr.png',
            description : 'Erechim, RS',
            backgroundImage : 'https://w.wallhaven.cc/full/9d/wallhaven-9dp3y1.jpg'
        },
        {
            houseName : 'Posto Tradição',
            image : 'https://github.com/talesagr.png',
            description : 'Erechim, RS',
            backgroundImage : 'https://w.wallhaven.cc/full/9d/wallhaven-9dp3y1.jpg'
        },
    ];
    return (
        cards.length > 0 ?
        <div className="nextEvents">
            <div className={"next-events-title"}>
                <h2>Próximos Eventos</h2>
                <h3>Shows</h3>
            </div>
            <div className={"display-cards"}>
                {cards.map(card => (
                    <Cards
                        houseName={card.houseName}
                        image={card.image}
                        description={card.description}
                        backgroundImage={card.backgroundImage}
                    />
                ))}

            </div>
        </div>
            :
            ''
    )
}

export default NextEvents;