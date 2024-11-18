import './tickets.css';
import { FaUser, FaLock } from "react-icons/fa";
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { IoTicket } from "react-icons/io5";
import { MdQrCode2 } from "react-icons/md";
import axios from "axios";

const Tickets = () => {
    const [tickets, setTickets] = useState([]);
    const userId = 1

    useEffect(() => {
        const fetchTickets = async () => {
            try{
                const response = await axios.get(`http://localhost:3001/ticket/user/${userId}`);
                setTickets(response.data);
            } catch (e) {
                console.error("Erro ao buscar ingressos: ", e)
            }
        };
        fetchTickets()
    },[])
    return (
        <div className='container-tickets fade-in'>
            <div className='title-tickets'>
                <h3>Meus ingressos</h3>
                <div className='icon-ticket'>
                    <IoTicket />
                </div>
            </div>
            <div className='grid-tickets'>
                {tickets.length > 0 ? (
                    tickets.map(ticket => (
                        <div key={ticket.id} className='box-tickets'>
                            <div className='img-banner'>
                                <img src="https://www.designi.com.br/images/preview/11807908.jpg" alt={ticket.eventName} />
                            </div>
                            <div className='QRcode'>
                                <MdQrCode2 />
                            </div>
                            <div className='tx-tickes'>
                                <h5>{ticket.eventName}</h5>
                                <h5>PARTICIPANTE:</h5>
                                <p>{ticket.participant || "Nome do Participante"}</p>
                                <h5>VALOR R$</h5>
                                <p>R${parseFloat(ticket.price).toFixed(2)}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Você ainda não possui ingressos.</p>
                )}
            </div>
        </div>
    );
}

export default Tickets;