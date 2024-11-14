import React from 'react';
import './checkoutCartPopup.css'

const CheckoutCartPopup = ({showPopup, closePopup}) => {
    if (!showPopup) return null;
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>O item foi adicionado ao seu carrinho!</h2>
                <button onClick={closePopup}>Fechar</button>
            </div>
        </div>
    )
}

export default CheckoutCartPopup