import {FaInstagramSquare, FaLinkedin} from "react-icons/fa";
import {FaSquareGithub} from "react-icons/fa6";
import './footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <div className='container-payments'>
                    <h2>Formas de pagamentos</h2>
                    <div className='icons-pagaments'>
                        <img className='cartoes'
                             src="https://wx.mlcdn.com.br/site/desk/footer/payment-types/elo.svg"></img>
                        <img className='cartoes'
                             src="https://wx.mlcdn.com.br/site/desk/footer/payment-types/hipercard.svg"></img>
                        <img className='cartoes'
                             src="https://wx.mlcdn.com.br/site/desk/footer/payment-types/mastercard.svg"></img>
                        <img className='cartoes'
                             src="https://wx.mlcdn.com.br/site/desk/footer/payment-types/visa.svg"></img>
                        <img className='cartoes'
                             src="https://wx.mlcdn.com.br/site/desk/footer/payment-types/boleto.svg"></img>
                        <img className='cartoes'
                             src="https://wx.mlcdn.com.br/site/desk/footer/payment-types/american-express.svg"></img>
                        <img className='cartoes' src="https://logopng.com.br/logos/pix-106.svg"></img>
                    </div>
                </div>
                <div className='mark-and-icons'>
                    <p className='mark'>Beysic Soluções S.A. © Copyright 2024</p>
                    <div>
                        <i className='icons-footer'><FaLinkedin/></i>
                        <i className='icons-footer'><FaSquareGithub/></i>
                        <i className='icons-footer'><FaInstagramSquare/></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}