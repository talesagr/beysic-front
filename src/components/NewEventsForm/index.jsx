import { FaCloudUploadAlt } from "react-icons/fa";
import { useState } from 'react';
import './newEvents.css'
const NewEventsForm = () => {
    const [nameEvent, setNameEvent] = useState('');
    const [date, setDate] = useState("");
    const [local, setLocal] = useState("");
    const [establishment, setEstablishment] = useState("");
    const [ticket, setTicket] = useState("");

    return (
        <div className="container-new-events fade-in">
            <h1>Crie seu Evento</h1>
            <div className="info-events">
                <div className='form-events'>
                    <div className="img">
                    </div>
                    <div className='input-field-new-events'>
                        <input
                            type="text"
                            placeholder='Nome do Evento'
                        />
                    </div>
                    <div className='input-field-new-events'>
                        <input type="text"
                            placeholder='Data'
                        />
                    </div>
                    <div className='input-field-new-events'>
                        <input type="text"
                            placeholder='local(cidade)'
                        />
                    </div>
                    <div className='input-field-new-events'>
                        <input type="text"
                            placeholder='estabelicimento'
                        />
                    </div>
                    <div className='input-field-new-events'>
                        <input type="text"
                            placeholder='ingressos (lotes,valores)'
                        />
                    </div>
                    <div className='btn-end'>
                        <div class="file-upload">
                            <input type="file" id="fileInput" />
                            <label for="fileInput" class="file-label">
                            <FaCloudUploadAlt className="icon-nuvem"/>    
                            Escolher Banner
                            </label>
                        </div>
                        <div className='salvar'>
                            <button>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewEventsForm
