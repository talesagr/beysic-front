import './contact.css'

const Contact = () => {
    return (
        <div className='container-contact'>
            <div className='tx-contact'>
                <div className='contact-nome-email'>
                    <input className = 'contact-nome'  type="text" placeholder='Nome' />
                </div>
                <div>
                    <input type="text" placeholder='E-mail' />
                </div>
            </div>
            <div className='tx-contact-two'>
                <div>
                    <input type="text" placeholder='Telefone' />
                </div>
                <div>
                    <input type="text" placeholder='Assunto' />
                </div>
            </div>
        </div>
    );
}

export default Contact;