import { FaCloudUploadAlt } from "react-icons/fa";
import { useState } from 'react';
import './contact.css'

const Contact = () => {
    return (
        <div className='container-contact fade-in'>
                <div className="title-contact">
                    <h2>Fale com a Beysic</h2>
                </div>
                <div className='contact-inf'>
                <div>
                    <input className='information' type="text" placeholder='Nome' />
                </div>
                <div>
                    <input className='information' type="text" placeholder='E-mail' />
                </div>
                <div>
                    <input className='information' type="text" placeholder='Telefone' />
                </div>
                <div>
                    <input className='information' type="text" placeholder='Assunto' />
                </div>
                <div>
                    <input className='message' type="text" placeholder='Mensagem' />
                </div>
                <div className="button-enviar">
                    <button>Enviar</button>
                </div>
                </div>
        </div>
    );
}

export default Contact;