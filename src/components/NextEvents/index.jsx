import './nextEvents.css'
import Cards from "../Cards";
import { Link, Navigate } from 'react-router-dom';



const NextEvents = (props) => {
    //agora estamos MOCKANDO os dados, depois passaremos via PROPS
    let cards = [
        {
            eventName: 'Pagodinho dos cria',
            eventDate: '29/08',
            houseName: 'Bocatto',
            description: 'Erechim, RS',
            backgroundImage: 'https://w.wallhaven.cc/full/9d/wallhaven-9dp3y1.jpg',
            id: 1
        },
        {
            eventName: 'Icaro e Gilmar',
            eventDate: '30/08',
            houseName: 'Veld',
            description: 'Erechim, RS',
            backgroundImage: 'https://w.wallhaven.cc/full/9d/wallhaven-9dp3y1.jpg',
            id: 2
        },
        {
            eventName: 'Encontro de carros',
            eventDate: '31/08',
            houseName: 'Posto Tradição',
            description: 'Erechim, RS',
            backgroundImage: 'https://w.wallhaven.cc/full/9d/wallhaven-9dp3y1.jpg',
            id: 3
        },
    ];
    return (
        cards.length > 0 ?
            <div className="nextEvents">
                <div className="next-events-title">
                    <h2>Próximos Eventos</h2>
                    <div className='novo-evento'>
                        <Link to="/NewEventsForm">
                        <button>Novo evento</button>
                        </Link>
                    </div>
                </div>
                <div className="display-cards">
                    {cards.map(card => (
                        <Link to={`/event/${card.id}`} key={card.id}>
                            <Cards
                                eventName={card.eventName}
                                eventDate={card.eventDate}
                                houseName={card.houseName}
                                description={card.description}
                                backgroundImage={card.backgroundImage}
                            />
                        </Link>
                    ))}
                </div>
            </div>
            : ''
    )
}

export default NextEvents;