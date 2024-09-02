import Navbar from '../../components/Navbar';
import Forgot from '../../components/Forgot'; 
import './forgot.css'

export default function Login() {
    return(
        <>
            <Navbar/>
            <body className='forgot-body'>
                <Forgot/>
            </body>
        </>
    )
}