import React from 'react';
import Navbar from "../../components/Navbar";
import {Footer} from "../../components/Footer";
import TicketsByCategory from "../../components/TicketsByCategory";

export default function ticketsByCategory() {
    return (
        <div className="page-container">
            <Navbar/>
            <div className='body-tickets'>
                <TicketsByCategory/>
            </div>
            <Footer/>
        </div>
    )
}
