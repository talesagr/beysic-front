import {useState} from 'react'
import './pricetagevent.css'

export const PriceTagEvent = (props) => {
    const [quantity, setQuantity] = useState(props.quantity);
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className='price-tag-info'>
            <div className='batch-price-controls'>
            <h6>{props.batch}</h6>
            <p>{props.price}</p>
            </div>
            <div className='quantity-controls'>
                <button onClick={decreaseQuantity}>-</button>
                <p>{quantity}</p>
                <button onClick={increaseQuantity}>+</button>
            </div>
        </div>
    )
}