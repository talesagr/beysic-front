import React, {useEffect, useState} from 'react';
import './checkoutCartPopup.css'
import axios from "axios";

const CheckoutCartPopup = ({ showPopup, closePopup}) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('CREDIT_CARD');
    const userId = 1;

    useEffect(() => {
        const calculateTotal = () => {
            const total = cartItems.reduce((acc, item) => {
                return acc + parseFloat(item.ticket.price) * item.quantity;
            }, 0);
            setTotalPrice(total);
        };
        calculateTotal();
    }, [cartItems]);

    useEffect(() => {
        const fectchCartItems = async () => {
            if (showPopup) {
                try {
                    const res = await axios.get(`http://localhost:3001/shop-cart/${userId}`);
                    setCartItems(res.data.items);
                } catch (e) {
                    console.error("Erro ao carregar carrinho: ", e)
                }
            }
        };
        fectchCartItems();
    }, [showPopup])

    const onFinalizePayment = async () => {
        try {
            const userId = 1;
            const response = await axios.post(
                `http://localhost:3001/payment/cart/${userId}`,
                {paymentMethod}
            );
            if (!response.data.success) {
                console.error("Erro no pagamento:", response.data.message);
            } else {
                console.log("Pagamento finalizado com sucesso:", response.data);
                setCartItems([]);
                //onPaymentSuccess();
                closePopup();
            }
        } catch (error) {
            console.error("Erro ao finalizar o pagamento:", error);
        }
    }

    const onDeleteItem = async () => {
        try {
            const itemId = 1; // Exemplo: o ID do item pode vir de um estado global ou contexto
            const response = await axios.delete(`http://localhost:3001/cart/item/${itemId}`);
            setCartItems(cartItems.filter(item => item.id !== itemId));
            console.log("Item excluído com sucesso:", response.data);
            closePopup();
        } catch (error) {
            console.error("Erro ao excluir o item:", error);
        }
    };

    if (!showPopup) return null;

    return (
        <div className="popup-overlay">
            <h2>Seu Carrinho</h2>
            {cartItems.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <ul className="cart-items">
                    {cartItems.map(item => (
                        <li key={item.id} className="cart-item">
                            <div>
                                <strong>{item.ticket.eventName}</strong>
                                <p>
                                    {item.ticket.categories} | {item.ticket.place}, {item.ticket.city}, {item.ticket.state}
                                </p>
                                <p>Preço: R$ {parseFloat(item.ticket.price).toFixed(2)}</p>
                                <p>Quantidade: {item.quantity}</p>
                            </div>
                            <button
                                className="delete-button"
                                onClick={() => onDeleteItem(item.id)}
                            >
                                Excluir
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <div className="popup-total">
                <strong>Total da Compra:</strong>
                <p>R$ {totalPrice.toFixed(2)}</p>
            </div>
            <div className="popup-buttons">
                {cartItems.length > 0 && (
                    <button className="finalize-button" onClick={onFinalizePayment}>
                        Finalizar Pagamento
                    </button>
                )}
                <button className="close-button" onClick={closePopup}>Fechar</button>
            </div>
        </div>
    );
}

export default CheckoutCartPopup