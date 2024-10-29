import './tickets.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoTicket } from "react-icons/io5";
import { MdQrCode2 } from "react-icons/md";

const Tickets = () => {
    return (
        <div className='container-tickets'>
            <div className='title-tickets'>
                <h3>Meus ingressos</h3>
                <div className='icon-ticket'>
                    <IoTicket />
                </div>
            </div>
            <div className='grid-tickets'>
                <div className='box-tickets'>
                    <div className='img-banner'>
                        <img src="https://www.designi.com.br/images/preview/11807908.jpg" alt="" />
                    </div>
                    <div className='QRcode'>
                        <MdQrCode2 />
                    </div>
                    <div className='tx-tickes'>
                        <h5>LOTE 1</h5>
                        <h5>PARTICIPANTE:</h5>
                        <p>Caio Rolando</p>
                        <h5>VALOR R$</h5>
                        <p>R$35.00</p>
                    </div>
                </div>
                <div className='box-tickets'>
                    <div className='img-banner'>
                        <img src="https://www.designi.com.br/images/preview/11807908.jpg" alt="" />
                    </div>
                    <div className='QRcode'>
                        <MdQrCode2 />
                    </div>
                    <div className='tx-tickes'>
                        <h5>LOTE 1</h5>
                        <h5>PARTICIPANTE:</h5>
                        <p>Caio Rolando</p>
                        <h5>VALOR R$</h5>
                        <p>R$35.00</p>
                    </div>
                </div>
                <div className='box-tickets'>
                    <div className='img-banner'>
                        <img src="https://www.designi.com.br/images/preview/11807908.jpg" alt="" />
                    </div>
                    <div className='QRcode'>
                        <MdQrCode2 />
                    </div>
                    <div className='tx-tickes'>
                        <h5>LOTE 1</h5>
                        <h5>PARTICIPANTE:</h5>
                        <p>Caio Rolando</p>
                        <h5>VALOR R$</h5>
                        <p>R$35.00</p>
                    </div>
                </div>
                <div className='box-tickets'>
                    <div className='img-banner'>
                        <img src="https://www.designi.com.br/images/preview/11807908.jpg" alt="" />
                    </div>
                    <div className='QRcode'>
                        <MdQrCode2 />
                    </div>
                    <div className='tx-tickes'>
                        <h5>LOTE 1</h5>
                        <h5>PARTICIPANTE:</h5>
                        <p>Caio Rolando</p>
                        <h5>VALOR R$</h5>
                        <p>R$35.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tickets;