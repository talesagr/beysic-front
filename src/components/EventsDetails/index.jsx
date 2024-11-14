import {useParams} from 'react-router-dom';
import './eventsdetails.css'
import { PriceTagEvent } from '../PriceTagEvent';
import {useEffect, useState} from "react";
import axios from 'axios';
import CheckoutCartPopup from "../CheckoutCartPopup";

const EventsDetails = () => {
    const {id} = useParams();
    const [ticket, setTicket] = useState(null);
    const [quantities, setQuantities] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [price, setprice] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const fetchTicket = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/ticket/${id}`);
                const ticketData = response.data;

                setTicket(ticketData);
                setprice(parseFloat(ticketData.price));
            } catch (error) {
                console.error("Erro ao buscar o ticket: ", error);
            }
        };

        fetchTicket()
    }, [id]);

    useEffect(() => {
        setTotalPrice(price * quantities);
    }, [quantities, price]);

    const updateQuantity = (newQuantity) => {
        setQuantities(newQuantity)
    };

    const handleCheckout = async () => {
        try {
            const userId = 1; //o id do user vai vir do cache do usuario logado
            const cartItem = {
                ticketId: ticket.id,
                quantity: quantities,
            }

            const response = await axios.post(
                `http://localhost:3001/shop-cart/${userId}/add`, cartItem)
            if (response.status !== 201) {
                console.log('Deu b.o');
                return
            }
            setShowPopup(true)
            console.log('Carrinho atualizado com sucesso!');
        } catch (e) {
            console.error("Erro ao adicionar ao carrinho: ", e)
        }
    }

    const closePopup = () => {
        setShowPopup(false)
    }

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
                    {ticket && (
                        <PriceTagEvent
                            key={ticket.id}
                            batch={`LOTE 1`}
                            price={`R$${price.toFixed(2)}`}
                            quantity={quantities}
                            setQuantity={updateQuantity}
                    />
                    )}
                    {
                        quantities === 0 ?
                            <button disabled={true} className="end-buy-button-disabled" onClick={handleCheckout}>Adicionar ao Carrinho</button> :
                            <button className="end-buy-button" onClick={handleCheckout}>Adicionar ao Carrinho</button>
                    }
                </div>
            </div>
            <CheckoutCartPopup showPopup={showPopup} closePopup={closePopup}/>
        </div>
)
}
export default EventsDetails