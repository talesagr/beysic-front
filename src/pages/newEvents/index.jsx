import Navbar from '../../components/Navbar';
import NewEventsForm from '../../components/NewEventsForm';
import {Footer} from "../../components/Footer";

export default function Login() {
    return(
        <>
            <Navbar/>
            <div className='new-events-body'>
                <NewEventsForm/>
            </div>
            <Footer />
        </>
    )
}