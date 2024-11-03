import { Link } from 'react-router-dom';
import './eventsdetails.css'
import { PriceTagEvent } from '../PriceTagEvent';
import {useState} from "react";

const EventsDetails = () => {

    const [quantities, setQuantities] = useState({
        lote1:23,
        lote2:23,
        lote3:23,
    });

    const updateQuantity = (lote, newQuantity) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [lote]: newQuantity
        }));
    };

    const prices = {
        lote1: 150.00,
        lote2: 150.00,
        lote3: 150.00
    };

    const totalPrice = (prices.lote1 * quantities.lote1) + (prices.lote2 * quantities.lote2) + (prices.lote3 * quantities.lote3);

    return (
        <div className='ticket-info fade-in'>
            <div className='image-container'>
                <img src={"https://www.designi.com.br/images/preview/11807908.jpg"} alt={'name'}></img>
            </div>
            <div className="content-ticket">
                <div className='background-text'>
                    <p>
                        Prepare-se para uma noite inesquecível na Festa Tropical Sunset! Em um ambiente vibrante e cheio
                        de cores, celebraremos o melhor do verão com música contagiante, drinks refrescantes e uma
                        decoração que transporta você diretamente para uma ilha paradisíaca. Vista-se com suas roupas
                        mais leves e floridas, e venha dançar ao som dos melhores DJs da cena, que trarão ritmos
                        tropicais para animar a pista de dança. Traga seus amigos e sua melhor energia, e venha curtir
                        uma noite onde o pôr do sol será apenas o começo da diversão!
                    </p>
                </div>
                <div className='ticket-card'>
                    <div className='ticket-card-info'>
                        <h2>Ingressos</h2>
                        <p>R$ {totalPrice.toFixed(2)}</p>
                    </div>
                    <PriceTagEvent
                        batch={"LOTE 1"}
                        price={`R$${prices.lote1}`}
                        quantity={quantities.lote1}
                        setQuantity={(newQuantity) => updateQuantity('lote1', newQuantity)}
                    />
                    <PriceTagEvent
                        batch={"LOTE 2"}
                        price={`R$${prices.lote2}`}
                        quantity={quantities.lote2}
                        setQuantity={(newQuantity) => updateQuantity('lote2', newQuantity)}
                    />
                    <PriceTagEvent
                        batch={"LOTE 3"}
                        price={`R$${prices.lote3}`}
                        quantity={quantities.lote3}
                        setQuantity={(newQuantity) => updateQuantity('lote3', newQuantity)}
                    />
                    <button className="end-buy-button">Finalizar Compra</button>
                </div>
            </div>
        </div>
    )
}
export default EventsDetails