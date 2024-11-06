import Navbar from '../../components/Navbar';
import Tickets from '../../components/Tickets'
import {Footer} from "../../components/Footer";


export default function Login() {
    return(
        <>
            <Navbar/>
            <div className='body-tickets'>
                <Tickets />
            </div>
            <Footer />
        </>
    )
}

