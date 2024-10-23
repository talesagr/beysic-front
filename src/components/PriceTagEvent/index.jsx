import './pricetagevent.css'

export const PriceTagEvent = (props) => {
    return (
        <div className='price-tag-info'>
            <h6>{props.batch}</h6>
            <p>{props.price}</p>
            <p>{props.quantity}</p>
        </div>
    )
}