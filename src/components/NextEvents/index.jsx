import './nextEvents.css'
import Cards from "../Cards";


const NextEvents = () => {
    return (
        <div className="nextEvents">
            <div className={"next-events-title"}>
                <h2>Próximos Eventos</h2>
                <h3>Shows</h3>
            </div>
            <div className={"display-cards"}>
                <Cards />
            </div>
        </div>
    )
}

export default NextEvents;