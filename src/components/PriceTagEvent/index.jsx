import './pricetagevent.css'

export const PriceTagEvent = (props) => {
    const increaseQuantity = () => {
        props.setQuantity(props.quantity + 1);
    };
    const decreaseQuantity = () => {
        if (props.quantity > 0) {
            props.setQuantity(props.quantity - 1);
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
                <p>{props.quantity}</p>
                <button onClick={increaseQuantity}>+</button>
            </div>
        </div>
    )
}