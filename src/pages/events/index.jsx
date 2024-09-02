import Navbar from '../../components/Navbar';
import EventsDetails from '../../components/EventsDetails';
import './events.css'

export default function Login() {
    return(
        <>
            <Navbar/>
            <body className='events-body'>
                <EventsDetails/>
            </body>
        </>
    )
}