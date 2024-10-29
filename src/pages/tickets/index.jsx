import Navbar from '../../components/Navbar';
import Tickets from '../../components/Tickets'


export default function Login() {
    return(
        <>
            <Navbar/>
            <div className='body-tickets'>
                <Tickets />
            </div>
        </>
    )
}

