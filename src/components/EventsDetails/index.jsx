import { Link } from 'react-router-dom';
import './eventsdetails.css'
import { PriceTagEvent } from '../PriceTagEvent';
import {useEffect, useState} from "react";
import axios from 'axios';

const EventsDetails = () => {
    const [tickets, setTickets] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [prices, setPrices] = useState({});

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get('http://localhost:3001/ticket');
                const fetchedTickets = response.data;

                const initialQuantities = {};
                const initialPrices = {};

                fetchedTickets.forEach((ticket) => {
                    initialQuantities[`lote${ticket.id}`] = 0;
                    initialPrices[`lote${ticket.id}`] = ticket.price;
                });

                setTickets(fetchedTickets);
                setQuantities(initialQuantities);
                setPrices(initialPrices);
            } catch (error) {
                console.error("Erro ao buscar os tickets: ", error);
            }
        };

        fetchTickets();
    }, []);

    useEffect(() => {
        const newTotalPrice = Object.keys(quantities).reduce((acc, key) => {
            return acc + (prices[key] * quantities[key]);
        }, 0);
        setTotalPrice(newTotalPrice);
    }, [quantities, prices]);

    const updateQuantity = (batch, newQuantity) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [batch]: newQuantity
        }));
    };

    const handleCheckout = async () => {
        try {
            const userId = 1; //o id do user vai vir do cache do usuario logado
            const cartItems = tickets.map(ticket => ({
                ticketId: ticket.id,
                quantity: 2,
            }))

            for (const item of cartItems) {
                const response = await axios.post(
                    `http://localhost:3001/shop-cart/${userId}/add`, item)
                console.log(response.data)
            }
            console.log('Carrinho atualizado com sucesso!');
        } catch (e) {
            console.error("Erro ao adicionar ao carrinho: ", e)
        }
    }

    return (
        <div className='ticket-info'>
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
                    {tickets.map(ticket => (
                        <PriceTagEvent
                            key={ticket.id}
                            batch={`LOTE ${ticket.id}`}
                            price={`R$${prices[`lote${ticket.id}`]}`}
                            quantity={quantities[`lote${ticket.id}`]}
                            setQuantity={(newQuantity) => updateQuantity(`lote${ticket.id}`, newQuantity)}
                        />
                    ))}
                    <button className="end-buy-button" onClick={handleCheckout}>Finalizar Compra</button>
                </div>
            </div>
        </div>
    )
}
export default EventsDetails