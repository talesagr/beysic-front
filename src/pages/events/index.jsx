import Navbar from '../../components/Navbar';
import EventsDetails from '../../components/EventsDetails';
import './events.css'
import {Footer} from "../../components/Footer";

export default function Login() {
    return(
        <>
            <Navbar/>
            <div className='events-body'>
                <EventsDetails/>
            </div>
            <Footer />
        </>
    )
}