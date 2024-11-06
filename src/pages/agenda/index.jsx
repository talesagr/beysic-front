import Navbar from '../../components/Navbar';
import Agenda from '../../components/Agenda';
import {Footer} from "../../components/Footer";

export default function Login() {
    return(
        <>
        <Navbar/>
        <div className='Agenda'>
            <Agenda />
        </div>
        <Footer />
    </>
    )
}
