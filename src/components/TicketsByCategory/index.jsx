import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ticketsByCategory.css';
import { PriceTagEvent } from '../PriceTagEvent';
import CheckoutCartPopup from "../CheckoutCartPopup";
import axios from 'axios';

const TicketsByCategory = () => {
    const { categoryName } = useParams();
    const [tickets, setTickets] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [totalPrices, setTotalPrices] = useState({});
    const [loading, setLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/ticket/category/${categoryName}`);
                const data = response.data.map(ticket => ({
                    ...ticket,
                    price: parseFloat(ticket.price),
                }));

                const initialQuantities = {};
                const initialTotalPrices = {};
                data.forEach(ticket => {
                    initialQuantities[ticket.id] = 0;
                    initialTotalPrices[ticket.id] = 0;
                });

                setQuantities(initialQuantities);
                setTotalPrices(initialTotalPrices);
                setTickets(data);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar tickets:", error);
                setLoading(false);
            }
        };

        fetchTickets();
    }, [categoryName]);

    const updateQuantity = (ticketId, newQuantity, price) => {
        setQuantities(prev => ({ ...prev, [ticketId]: newQuantity }));
        setTotalPrices(prev => ({ ...prev, [ticketId]: newQuantity * price }));
    };

    const handleCheckout = async (ticket) => {
        try {
            const userId = 1;
            const cartItem = {
                ticketId: ticket.id,
                quantity: quantities[ticket.id],
            };

            const response = await axios.post(
                `http://localhost:3001/shop-cart/${userId}/add`, cartItem
            );

            if (response.status !== 201) {
                console.log('Erro ao adicionar ao carrinho.');
                return;
            }

            setShowPopup(false);
            setTimeout(() => setShowPopup(true), 0)
        } catch (e) {
            console.error("Erro ao adicionar ao carrinho: ", e);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    if (loading) {
        return <p>Carregando tickets da categoria {categoryName}...</p>;
    }

    if (tickets.length === 0) {
        return <p>Nenhum ticket encontrado para a categoria {categoryName}.</p>;
    }

    return (
        <div className="tickets-category">
            <h1>Tickets da Categoria: {categoryName}</h1>
            <div className="ticket-list">
                {tickets.map(ticket => (
                    <div key={ticket.id} className="ticket-item">
                        <h2>{ticket.eventName}</h2>
                        <p>{ticket.place}, {ticket.city} - {ticket.state}</p>
                        <p>Preço: R$ {ticket.price.toFixed(2)}</p>
                        <PriceTagEvent
                            batch="LOTE 1"
                            price={`R$${ticket.price.toFixed(2)}`}
                            quantity={quantities[ticket.id]}
                            setQuantity={(newQuantity) => updateQuantity(ticket.id, newQuantity, ticket.price)}
                        />
                        <p>Total: R$ {totalPrices[ticket.id]?.toFixed(2)}</p>
                        {
                            quantities[ticket.id] === 0 ?
                                <button disabled className="end-buy-button-disabled">Adicionar ao Carrinho</button> :
                                <button className="end-buy-button" onClick={() => handleCheckout(ticket)}>Adicionar ao Carrinho</button>
                        }
                    </div>
                ))}
            </div>
            <CheckoutCartPopup showPopup={showPopup} closePopup={closePopup} />
        </div>
    );
};

export default TicketsByCategory;
