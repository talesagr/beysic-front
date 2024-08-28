import Navbar from '../../components/Navbar'
import RegisterForm from '../../components/RegisterForm';
import './register.css'

export default function Register() {
    return(
        <>
            <Navbar/>
            <body className='register-body'>
                <RegisterForm/>
            </body>
        </>
    )
}