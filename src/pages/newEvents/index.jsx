import Navbar from '../../components/Navbar';
import NewEventsForm from '../../components/NewEventsForm';

export default function Login() {
    return(
        <>
            <Navbar/>
            <div className='new-events-body'>
                <NewEventsForm/>
            </div>
        </>
    )
}