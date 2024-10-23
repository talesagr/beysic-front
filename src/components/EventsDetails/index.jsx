import { Link } from 'react-router-dom';
import './eventsdetails.css'
import { PriceTagEvent } from '../PriceTagEvent';

const EventsDetails = () => {
    return (
        <div className='ticket-info'>
            <div className='image-container'>
                <img src={"https://www.designi.com.br/images/preview/11807908.jpg"} alt={'name'}></img>
            </div>
            <div className="content-ticket">
                <div className='background-text'>
                    <p>
                        Prepare-se para uma noite inesquecível na Festa Tropical Sunset! Em um ambiente vibrante e cheio de cores, celebraremos o melhor do verão com música contagiante, drinks refrescantes e uma decoração que transporta você diretamente para uma ilha paradisíaca. Vista-se com suas roupas mais leves e floridas, e venha dançar ao som dos melhores DJs da cena, que trarão ritmos tropicais para animar a pista de dança. Traga seus amigos e sua melhor energia, e venha curtir uma noite onde o pôr do sol será apenas o começo da diversão!
                    </p>
                </div>
                <div className='ticket-card'>
                    <div>
                        <title>Ingressos</title>
                        <p>R$ totalPrice</p>
                    </div>
                    <PriceTagEvent batch={"LOTE 1"} price={"R$150.00"} quantity={23} />
                    <PriceTagEvent batch={"LOTE 2"} price={"R$150.00"} quantity={23} />
                    <PriceTagEvent batch={"LOTE 3"} price={"R$150.00"} quantity={23} />
                </div>
            </div>
        </div>
    )
}
export default EventsDetails